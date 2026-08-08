import React from 'react'
import { TbBrandReact } from "react-icons/tb";
import { TbDeviceMobileCancel } from "react-icons/tb";
import { FaQuidditch } from "react-icons/fa";
import { IoMdCloudy } from "react-icons/io";
import { FaBrain } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import ShootingStarsBackground from './ShootingStarsBackground';


const Services = () => {
  return (
    <div>
      <div id="services" className=" relative overflow-hidden flex justify-between h-screen  bg-gray-800 overflow-hidden">
      
 
<div data-aos="fade-up" className='mt-15'>
  <img className='transition-all duration-300 ease-out
         
         hover:drop-shadow-[0_0_25px_rgba(0,60,149,1)] h-dvh'src="/ser33.png" alt="" />
</div>

<div id='left' className='  items-center justify-center flex flex-col w-1/2' >

<div className=' flex '>
<h1 className=' text-6xl font-bold py-10 '>Our Services</h1>
</div>

<div  data-aos="fade-up" className='flex flex-wrap gap-6'>

  <div className="bg-gray-300 rounded-4xl w-md h-40 "> 
  <div className='flex items-center p-3'>
   <h1 className='flex flex-row text-xl font-medium px-3 py-1 items-center bg-gray-800 rounded-4xl gap-1'> <TbBrandReact className=' text-2xl'/>  Web Development</h1>
      </div>
      <p className='text-gray-800 text-md font-medium text-justify px-5 -mt-2  '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam tenetur praesentium reiciendis voluptas officia voluptatem, eos quidem eligendi nihil fugiat dolores, dolor ipsum fugit laborum!</p>
    </div>

  <div className="bg-gray-300 rounded-4xl w-md h-40 "> 
  <div className='flex items-center p-3'>
   <h1 className='flex flex-row text-xl font-medium px-3 py-1 items-center bg-gray-800 rounded-4xl gap-1'> <TbDeviceMobileCancel className=' text-2xl'/>  Mobile App Development</h1>
      </div>
      <p className='text-gray-800 text-md font-medium text-justify px-5 -mt-2  '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam tenetur praesentium reiciendis voluptas officia voluptatem, eos quidem eligendi nihil fugiat dolores, dolor ipsum fugit laborum!</p>
    </div>

  <div className="bg-gray-300 rounded-4xl w-md h-40 "> 
  <div className='flex items-center p-3'>
   <h1 className='flex flex-row text-xl font-medium px-3 py-1 items-center bg-gray-800 rounded-4xl gap-1'> <FaQuidditch className=' text-2xl'/>  UI/UX Design</h1>
      </div>
      <p className='text-gray-800 text-md font-medium text-justify px-5 -mt-2  '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam tenetur praesentium reiciendis voluptas officia voluptatem, eos quidem eligendi nihil fugiat dolores, dolor ipsum fugit laborum!</p>
    </div>
    
  <div className="bg-gray-300 rounded-4xl w-md h-40 "> 
  <div className='flex items-center p-3'>
   <h1 className='flex flex-row text-xl font-medium px-3 py-1 items-center bg-gray-800 rounded-4xl gap-1'> <IoMdCloudy className=' text-2xl'/>Cloud Solutions</h1>
      </div>
      <p className='text-gray-800 text-md font-medium text-justify px-5 -mt-2  '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam tenetur praesentium reiciendis voluptas officia voluptatem, eos quidem eligendi nihil fugiat dolores, dolor ipsum fugit laborum!</p>
    </div>
 

  <div className="bg-gray-300 rounded-4xl w-md h-40 "> 
  <div className='flex items-center p-3'>
   <h1 className='flex flex-row text-xl font-medium px-3 py-1 items-center bg-gray-800 rounded-4xl gap-1'> <FaBrain className=' text-2xl'/>AI & Machine Learning</h1>
      </div>
      <p className='text-gray-800 text-md font-medium text-justify px-5 -mt-2  '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam tenetur praesentium reiciendis voluptas officia voluptatem, eos quidem eligendi nihil fugiat dolores, dolor ipsum fugit laborum!</p>
    </div>
 

  <div className="bg-gray-300 rounded-4xl w-md h-40 "> 
  <div className='flex items-center p-3'>
   <h1 className='flex flex-row text-xl font-medium px-3 py-1 items-center bg-gray-800 rounded-4xl gap-1'> <MdOutlineSecurity className=' text-2xl'/> Cybersecurity </h1>
      </div>
      <p className='text-gray-800 text-md font-medium text-justify px-5 -mt-2  '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam tenetur praesentium reiciendis voluptas officia voluptatem, eos quidem eligendi nihil fugiat dolores, dolor ipsum fugit laborum!</p>
    </div>
 
  {/* <div className="bg-gray-300 rounded-4xl w-md h-40"></div> */}
</div>

</div>


</div>
    </div>
  )
}

export default Services
