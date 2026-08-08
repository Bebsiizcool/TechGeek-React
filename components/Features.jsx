import React from 'react'
import { GrDocumentPerformance } from "react-icons/gr";
import { IoIosCloudDone } from "react-icons/io";
import { RiSecurePaymentFill } from "react-icons/ri";

const featuresData = [
  {
    id: 1,
    icon: <GrDocumentPerformance className='text-gray-800' />,
    title: "Performance",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est unde tempora iusto, autem, ipsa consequuntur consectetur fugit ad, sequi minima doloremque cumque consequatur voluptate quidem eum in sed veniam. Nobis, vitae distinctio cum dignissimos repellat dicta aliquam delectus tempore voluptas."
  },
  {
    id: 2,
    icon: <IoIosCloudDone className='text-gray-800' />,
    title: "Cloud Integeration",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est unde tempora iusto, autem, ipsa consequuntur consectetur fugit ad, sequi minima doloremque cumque consequatur voluptate quidem eum in sed veniam. Nobis, vitae distinctio cum dignissimos repellat dicta aliquam delectus tempore voluptas."
  },
  {
    id: 3,
    icon: <RiSecurePaymentFill className='text-gray-800' />,
    title: "Secure Solutions",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est unde tempora iusto, autem, ipsa consequuntur consectetur fugit ad, sequi minima doloremque cumque consequatur voluptate quidem eum in sed veniam. Nobis, vitae distinctio cum dignissimos repellat dicta aliquam delectus tempore voluptas."
  },
];

const Features = () => {
  return (
    <div>
      <div  id="features" className='min-h-screen bg-gray-800'>

<div data-aos="fade-up">
        <div  className='flex justify-center text-7xl py-20 font-bold'>
          <h1>Our Features</h1>
        </div>

        <div className="flex justify-center  items-center">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className='rounded-4xl flex flex-col items-center justify-center mx-10 border border-gray-300 w-[25%] h-150'
            >
              <div className=' bg-gray-300 rounded-full w-45 h-45 flex items-center justify-center text-8xl'>
                {feature.icon}
              </div>
              <h1 className='text-3xl font-medium py-5'>{feature.title}</h1>
              <p className='max-w-xs text-justify'>{feature.description}</p>
              <button
                className='border border-gray-300 px-10 py-3 mt-5 hover:cursor-pointer hover:bg-gray-300 hover:text-gray-800'
                type="button"
              >
                Read More
              </button>
            </div>
          ))}
        </div>

      </div>
      </div>
    </div>
  )
}

export default Features