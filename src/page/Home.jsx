import React from 'react'
import { Link } from 'react-router-dom'
import { GrDocumentPerformance } from "react-icons/gr";
import { IoIosCloudDone } from "react-icons/io";
import { RiSecurePaymentFill } from "react-icons/ri";

const Home = () => {
 

  return (
  <div>
    <div className='flex justify-between  bg-gradient-to-br from-gray-900 via-slate-900 to-black'>
    <div className='w-1/2 pl-40 mt-48'>

      <h1 className='text-7xl font-bold'>INTRODUCING</h1>
      <h1 className='text-6xl font-medium -mt-2 text-blue-200 italic '>NEW TECHNOLOGY</h1>

      <p className='max-w-5xl mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla corporis dolores quam voluptates earum voluptatum pariatur perferendis quasi magni, recusandae veritatis deserunt quidem velit esse, consectetur quo! In veniam dignissimos modi possimus tempora dolore iure a assumenda et quibusdam, magnam magni molestiae quam eum cupiditate enim consectetur obcaecati exercitationem doloribus quisquam, voluptate quidem quasi, voluptatem voluptates! Consequuntur aut, a cum provident repudiandae aspernatur officia, ex reiciendis, suscipit similique consequatur delectus natus consectetur. Quasi ratione sit laboriosam eaque neque velit consequuntur corrupti libero. Ab consequatur quas voluptates dolores animi. Dolorum eos dolorem necessitatibus ullam, consequuntur incidunt harum pariatur aperiam facilis consectetur!</p>

        <div className='flex mt-5 gap-3 text-lg  text-white-800 '>

          <Link to='/login'>
          <button className='bg-gray-800 rounded-full w-50 h-10 hover:cursor-pointer'>Get Started</button>
          </Link>

          <Link to='/login'>
          <button className='bg-gray-800 rounded-full w-50 h-10 hover:cursor-pointer'>Documentation</button>
          </Link>

          
        </div>

    </div>

   

      <div className=' flex '>
      <img className='   scale-x-[-1] 'src="\herosimg.png" alt="" srcset="" />
      </div>



    </div>



<div id="services" className=" flex justify-between h-screen bg-gray-800 overflow-hidden">
 
<div className='mt-15'>
  <img className='h-dvh'src="/ser33.png " alt="" />
</div>

<div id='left' className='' >
<h1 className='flex mr-110 text-5xl font-bold pt-40'>Our Services</h1>

<div className='flex flex-row flex-wrap ap-4'>
  <div className="border border-amber-50 w-md h-40"></div>
  <div className="border border-amber-50 w-md h-40"></div>
  <div className="border border-amber-50 w-md h-40"></div>
  <div className="border border-amber-50 w-md h-40"></div>
</div>

</div>


</div>


<div id="services" className="h-screen bg-slate-950 overflow-hidden">
 
<div className='mt-15'>
 
</div>


</div>


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

export default Home
