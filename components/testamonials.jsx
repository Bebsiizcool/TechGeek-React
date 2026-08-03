import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Frontend Developer",
    review: "Amazing service!",
  },
  {
    id: 2,
    name: "Sarah Smith",
    role: "UI Designer",
    review: "Everything was perfect!",
  },
  {
    id: 3,
    name: "Michael",
    role: "Engineer",
    review: "Would definitely recommend.",
  },
  {
    id: 4,
    name: "Emma",
    role: "Manager",
    review: "Fantastic work!",
  },
];

export default function Testimonial() {
  return (
    <div id="testimonial" className="  h-screen max-w-7xl mx-auto py-20">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-6xl ">What Others Say About Us</h1>
        <p className="text-xl p-5">Our team created best opportunities for your business.</p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white rounded-xl shadow-lg p-6 h-64 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-black">{item.name}</h2>

              <p className="text-blue-500 mb-4">{item.role}</p>

              <p>{item.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}