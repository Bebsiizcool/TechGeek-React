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
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi est dolor officiis laudantium suscipit molestias ullam. Laudantium quisquam officiis rerum! Aut adipisci dolorum, voluptates nemo illum, laudantium nobis aliquid facilis eveniet quasi quisquam nostrum. Iure numquam distinctio possimus commodi minus.",
  },
  {
    id: 2,
    icon: TbDeviceMobileCancel,
    title: "Mobile App Development",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi est dolor officiis laudantium suscipit molestias ullam. Laudantium quisquam officiis rerum! Aut adipisci dolorum, voluptates nemo illum, laudantium nobis aliquid facilis eveniet quasi quisquam nostrum. Iure numquam distinctio possimus commodi minus.",
  },
  {
    id: 3,
    icon: FaQuidditch,
    title: "UI/UX Design",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi est dolor officiis laudantium suscipit molestias ullam. Laudantium quisquam officiis rerum! Aut adipisci dolorum, voluptates nemo illum, laudantium nobis aliquid facilis eveniet quasi quisquam nostrum. Iure numquam distinctio possimus commodi minus.",
  },
  {
    id: 4,
    icon: IoMdCloudy,
    title: "Cloud Solutions",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi est dolor officiis laudantium suscipit molestias ullam. Laudantium quisquam officiis rerum! Aut adipisci dolorum, voluptates nemo illum, laudantium nobis aliquid facilis eveniet quasi quisquam nostrum. Iure numquam distinctio possimus commodi minus.",
  },
  {
    id: 5,
    icon: FaBrain,
    title: "AI & Machine Learning",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi est dolor officiis laudantium suscipit molestias ullam. Laudantium quisquam officiis rerum! Aut adipisci dolorum, voluptates nemo illum, laudantium nobis aliquid facilis eveniet quasi quisquam nostrum. Iure numquam distinctio possimus commodi minus.",
  },
  {
    id: 6,
    icon: MdOutlineSecurity,
    title: "Cybersecurity",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi est dolor officiis laudantium suscipit molestias ullam. Laudantium quisquam officiis rerum! Aut adipisci dolorum, voluptates nemo illum, laudantium nobis aliquid facilis eveniet quasi quisquam nostrum. Iure numquam distinctio possimus commodi minus.",
  },
];

const Services = () => {
  return (
    <div>
    
      <div
        id="services"
        className="relative overflow-hidden flex flex-col lg:flex-row justify-between min-h-screen bg-gray-800"
      >
        {/* Image: hidden on small screens, shown from md up.
            Sized with vh/dvh capped so it never forces the section
            taller than short landscape viewports (e.g. 1280x720). */}
        <div
          data-aos="fade-up"
          className="hidden md:flex md:items-end mt-6 lg:mt-0 md:w-1/2 lg:w-auto lg:shrink-0 self-end"
        >
          <img
            className="transition-all duration-300 ease-out hover:drop-shadow-[0_0_25px_rgba(0,60,149,1)] h-72 md:h-[83vh] lg:h-[91vh] lg:max-h-[780px] xl:h-[96vh] xl:max-h-[870px] w-full md:w-auto object-contain lg:object-cover object-bottom mx-auto"
            src="/ser33.png"
            alt=""
          />
        </div>

        <div
          id="left"
          className="items-center justify-center flex flex-col w-full lg:w-1/2 px-4 py-8 lg:py-6 xl:py-10"
        >
          <div className="flex">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-bold py-4 lg:py-4 xl:py-10 text-center">
              Our Services
            </h1>
          </div>

          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-3 xl:gap-6 w-full max-w-4xl"
          >
            {servicesData.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-gray-300 rounded-3xl xl:rounded-4xl w-full h-full py-2"
                >
                  <div className="flex items-center p-3">
                    <h1 className="flex flex-row text-base sm:text-lg lg:text-base xl:text-xl font-medium px-3 py-1 items-center bg-gray-800 rounded-3xl xl:rounded-4xl gap-1 text-white">
                      <Icon className="text-xl xl:text-2xl shrink-0" />
                      {service.title}
                    </h1>
                  </div>
                  <p className="text-gray-800 text-sm lg:text-xs xl:text-md font-medium text-justify px-5 -mt-2">
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