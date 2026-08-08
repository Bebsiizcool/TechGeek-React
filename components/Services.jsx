import React from 'react'
import { TbBrandReact, TbDeviceMobileCancel } from "react-icons/tb";
import { FaQuidditch, FaBrain } from "react-icons/fa";
import { IoMdCloudy } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import ShootingStarsBackground from './shootingstars/ShootingStarsBackground';

const servicesData = [
  {
    id: 1,
    icon: TbBrandReact,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam tenetur praesentium reiciendis voluptas officia voluptatem, eos quidem eligendi nihil fugiat dolores, dolor ipsum fugit laborum!",
  },
  {
    id: 2,
    icon: TbDeviceMobileCancel,
    title: "Mobile App Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam tenetur praesentium reiciendis voluptas officia voluptatem, eos quidem eligendi nihil fugiat dolores, dolor ipsum fugit laborum!",
  },
  {
    id: 3,
    icon: FaQuidditch,
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam tenetur praesentium reiciendis voluptas officia voluptatem, eos quidem eligendi nihil fugiat dolores, dolor ipsum fugit laborum!",
  },
  {
    id: 4,
    icon: IoMdCloudy,
    title: "Cloud Solutions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam tenetur praesentium reiciendis voluptas officia voluptatem, eos quidem eligendi nihil fugiat dolores, dolor ipsum fugit laborum!",
  },
  {
    id: 5,
    icon: FaBrain,
    title: "AI & Machine Learning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam tenetur praesentium reiciendis voluptas officia voluptatem, eos quidem eligendi nihil fugiat dolores, dolor ipsum fugit laborum!",
  },
  {
    id: 6,
    icon: MdOutlineSecurity,
    title: "Cybersecurity",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam tenetur praesentium reiciendis voluptas officia voluptatem, eos quidem eligendi nihil fugiat dolores, dolor ipsum fugit laborum!",
  },
];

const Services = () => {
  return (
    <div>
      <div
        id="services"
        className="relative overflow-hidden flex flex-col lg:flex-row justify-between min-h-screen lg:h-screen bg-gray-800"
      >
        {/* Image: hidden on small screens, shown from md up */}
        <div data-aos="fade-up" className="hidden md:block mt-15 md:w-1/2 lg:w-auto">
          <img
            className="transition-all duration-300 ease-out hover:drop-shadow-[0_0_25px_rgba(0,60,149,1)] h-64 md:h-96 lg:h-dvh w-full md:w-auto object-cover mx-auto"
            src="/ser33.png"
            alt=""
          />
        </div>

        <div
          id="left"
          className="items-center justify-center flex flex-col w-full lg:w-1/2 px-4 py-10 lg:py-0"
        >
          <div className="flex">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold py-6 lg:py-10 text-center">
              Our Services
            </h1>
          </div>

          <div
            data-aos="fade-up"
            className="flex flex-wrap justify-center gap-6"
          >
            {servicesData.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-gray-300 rounded-4xl w-full sm:w-md h-auto sm:h-40 py-2"
                >
                  <div className="flex items-center p-3">
                    <h1 className="flex flex-row text-lg sm:text-xl font-medium px-3 py-1 items-center bg-gray-800 rounded-4xl gap-1 text-white">
                      <Icon className="text-2xl" />
                      {service.title}
                    </h1>
                  </div>
                  <p className="text-gray-800 text-sm sm:text-md font-medium text-justify px-5 -mt-2">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;