import { useEffect, useRef } from "react";

/**
 * ShootingStarsBackground
 * Drop this behind your hero content (position: relative on the parent,
 * this component is absolutely positioned to fill it).
 *
 * <div style={{ position: "relative" }}>
 *   <ShootingStarsBackground />
 *   <YourHeroContent />
 * </div>
 */
export default function ShootingStarsBackground({
  starCount = 140,
  shootingStarFrequency = 0.92, // higher = fewer shooting stars, keep between 0.8 and 0.99
  maxSimultaneous = 6, // cap on how many shooting stars can be on screen at once
  transparent = true, // true = don't paint a background, just draw stars over your own bg
  bgFrom = "#05070f",
  bgTo = "#0b1026",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let width, height, dpr;

    const stars = [];
    const shootingStars = [];

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedStars();
    }

    function seedStars() {
      stars.length = 0;
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 1.3 + 0.3,
          baseAlpha: Math.random() * 0.6 + 0.3,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    }

    const SHOOTING_STAR_ANGLE = 35 * (Math.PI / 180); // fixed: top-left -> bottom-right

    function spawnShootingStar() {
      // spawn spread along the top and left edges so they consistently
      // travel from upper-left toward lower-right
      const edgeRoll = Math.random();
      let startX, startY;
      if (edgeRoll < 0.6) {
        startX = Math.random() * width;
        startY = -20;
      } else {
        startX = -20;
        startY = Math.random() * height * 0.6;
      }
      const angle = SHOOTING_STAR_ANGLE;
      const speed = Math.random() * 9 + 9;
      const length = Math.random() * 120 + 90;

      shootingStars.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length,
        life: 0,
        maxLife: Math.random() * 40 + 50,
        opacity: 1,
      });
    }

    function draw() {
      if (transparent) {
        ctx.clearRect(0, 0, width, height);
      } else {
        // background gradient
        const grad = ctx.createLinearGradient(0, 0, 0, height);
        grad.addColorStop(0, bgFrom);
        grad.addColorStop(1, bgTo);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      }

      // twinkling stars
      for (const s of stars) {
        s.twinklePhase += s.twinkleSpeed;
        const alpha = s.baseAlpha + Math.sin(s.twinklePhase) * 0.3;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${Math.max(0, Math.min(1, alpha))})`;
        ctx.fill();
      }

      // randomly spawn shooting stars (can spawn more than one per tick)
      if (!prefersReducedMotion && shootingStars.length < maxSimultaneous) {
        if (Math.random() > shootingStarFrequency) {
          spawnShootingStar();
        }
        // small chance of a burst of 2-3 at once for a denser feel
        if (Math.random() > 0.995) {
          const burst = Math.floor(Math.random() * 2) + 2;
          for (let b = 0; b < burst; b++) spawnShootingStar();
        }
      }

      // draw + update shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const st = shootingStars[i];
        st.x += st.vx;
        st.y += st.vy;
        st.life += 1;
        st.opacity = 1 - st.life / st.maxLife;

        if (
          st.life > st.maxLife ||
          st.x > width + 100 ||
          st.y > height + 100
        ) {
          shootingStars.splice(i, 1);
          continue;
        }

        const tailX = st.x - Math.cos(Math.atan2(st.vy, st.vx)) * st.length;
        const tailY = st.y - Math.sin(Math.atan2(st.vy, st.vx)) * st.length;

        const streak = ctx.createLinearGradient(st.x, st.y, tailX, tailY);
        streak.addColorStop(0, `rgba(255,255,255,${st.opacity})`);
        streak.addColorStop(0.4, `rgba(180,200,255,${st.opacity * 0.4})`);
        streak.addColorStop(1, "rgba(180,200,255,0)");

        ctx.strokeStyle = streak;
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(st.x, st.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // bright head
        ctx.beginPath();
        ctx.arc(st.x, st.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${st.opacity})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [starCount, shootingStarFrequency, maxSimultaneous, transparent, bgFrom, bgTo]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
        zIndex: 0,
      }}
    />
  );
}