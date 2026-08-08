
import React, { useEffect } from "react";
import { TbBrandReact } from "react-icons/tb";
import Services from '../../components/Services';
import Features from '../../components/Features';
import Hero from '../../components/Hero';
import Testamonials from '../../components/testamonials';
import About from '../../components/About';
import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "lenis";


const Home = () => {
   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);

    useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);


  
 
  return (
  <div> 
    <Hero/>
    <Services/>
    <Testamonials/>
    <Features/>
    <About/>
    
    </div>
  )
}

export default Home