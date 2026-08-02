import React from 'react'
import { GrDocumentPerformance } from "react-icons/gr";
import { IoIosCloudDone } from "react-icons/io";
import { RiSecurePaymentFill } from "react-icons/ri";

const Features = () => {
  return (
    <div>
      <div id= "features" className='min-h-screen bg-gray-800'>

<div className='flex justify-center text-5xl pt-20 font-bold'>
<h1>Our Features</h1>
</div>

<div className="flex  justify-center mt-20 ">

<div className=' rounded-4xl flex flex-col items-center mx-10 border border-amber-50 w-[25%] h-170'>
  <div className=' mt-22 bg-amber-50 rounded-full w-45 h-45  flex  items-center justify-center text-8xl'> <GrDocumentPerformance className='text-gray-800'/>  
  </div>
  <h1 className='text-3xl font-medium py-5'>Performance</h1>
  <p className='max-w-xs text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, corporis magni? Distinctio perspiciatis adipisci eligendi esse maiores in, ipsum voluptas dolorum sapiente id corrupti dolore rerum explicabo fuga eveniet accusantium quae. Culpa ea excepturi corrupti explicabo non perferendis ratione reprehenderit.</p>
  <button className='border border-red-50 px-10 py-3 mt-5 hover:cursor-pointer hover:bg-amber-50 hover:text-gray-800' type="button">Read More</button>
</div>


<div className=' rounded-4xl flex flex-col items-center mx-10 border border-amber-50 w-[25%] h-170'>
  <div className=' mt-22 bg-amber-50 rounded-full w-45 h-45  flex  items-center justify-center text-8xl'> <IoIosCloudDone className='text-gray-800'/>
  </div>
  <h1 className='text-3xl font-medium py-5'>Cloud Integeration</h1>
  <p className='max-w-xs text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, corporis magni? Distinctio perspiciatis adipisci eligendi esse maiores in, ipsum voluptas dolorum sapiente id corrupti dolore rerum explicabo fuga eveniet accusantium quae. Culpa ea excepturi corrupti explicabo non perferendis ratione reprehenderit.</p>
  <button className='border border-red-50 px-10 py-3 mt-5 hover:cursor-pointer hover:bg-amber-50 hover:text-gray-800' type="button">Read More</button>
</div>

<div className=' rounded-4xl flex flex-col items-center mx-10 border border-amber-50 w-[25%] h-170'>
  <div className=' mt-22 bg-amber-50 rounded-full w-45 h-45  flex  items-center justify-center text-8xl'> <RiSecurePaymentFill className='text-gray-800' />
  </div>
  <h1 className='text-3xl font-medium py-5'>Secure Solutions</h1>
  <p className='max-w-xs text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, corporis magni? Distinctio perspiciatis adipisci eligendi esse maiores in, ipsum voluptas dolorum sapiente id corrupti dolore rerum explicabo fuga eveniet accusantium quae. Culpa ea excepturi corrupti explicabo non perferendis ratione reprehenderit.</p>
  <button className='border border-red-50 px-10 py-3 mt-5 hover:cursor-pointer hover:bg-amber-50 hover:text-gray-800' type="button">Read More</button>
</div>


</div>

</div>
    </div>
  )
}

export default Features
