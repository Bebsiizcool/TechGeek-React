import { motion } from "framer-motion";
import TestimonialCard from "./Testimonialcard";
import ShootingStarsBackground from "./shootingstars/ShootingStarsBackground";
const testimonials = [
  {
    id: 1,
    name: "Gabrielle Williams",
    role: "CEO",
    image: "https://i.pravatar.cc/150?img=32",
    text: "Creative geniuses who listen, understand and craft captivating visuals."
  },
  {
    id: 2,
    name: "Samantha Johnson",
    role: "Founder",
    image: "https://i.pravatar.cc/150?img=47",
    text: "Exceeded our expectations with innovative designs that truly brought our vision alive."
  },
  {
    id: 3,
    name: "Natalie Martinez",
    role: "Marketing Head",
    image: "https://i.pravatar.cc/150?img=12",
    text: "From concept to execution, their creativity knows no bounds."
  },
  {
    id: 4,
    name: "Victoria Thompson",
    role: "CEO",
    image: "https://i.pravatar.cc/150?img=20",
    text: "Highly recommended for any project. Their work is refreshing and imaginative."
  },
  {
    id: 5,
    name: "John Peter",
    role: "Creative Director",
    image: "https://i.pravatar.cc/150?img=68",
    text: "Their artistic flair transformed our campaigns into something remarkable."
  },
  {
    id: 6,
    name: "Jacob Smith",
    role: "Designer",
    image: "https://i.pravatar.cc/150?img=56",
    text: "Working with them has been one of the best experiences."
  }
];

const top = [...testimonials, ...testimonials];
const bottom = [...testimonials].reverse();
const bottomRow = [...bottom, ...bottom];

export default function Testimonials() {
  return (
    <section id="testimonial" className="relative overflow-hidden py-24 bg-slate-950 h-screen overflow-hidden">
<ShootingStarsBackground transparent />
      <div data-aos="fade-up" className="text-center mb-14">

        <span className="px-5 py-2 rounded-full bg-black text-white text-sm">
          ⭐ Rated 5/5 by over 1,400 users
        </span>

        <h2 className="text-6xl font-bold mt-8">
          What Others Say About Us
        </h2>

        <p className="text-2xl pt-2">
          Our team created best opportunities for your business.
        </p>

      </div>

      {/* TOP */}
      <div data-aos="fade-up" >
      <motion.div
        className="flex gap-6 mb-8 w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        whileHover={{}}
      >
        {top.map((item, index) => (
          <TestimonialCard
            key={index}
            item={item}
          />
        ))}
      </motion.div>

      {/* BOTTOM */}

      <motion.div
        className="flex gap-6 w-max"
        animate={{
          x: ["-50%", "0%"],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
  
      >
        {bottomRow.map((item, index) => (
          <TestimonialCard
            key={index}
            item={item}
          />
        ))}
      </motion.div>
</div>
    </section>
  );
}