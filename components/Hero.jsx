import React from 'react'
import { Link } from 'react-router-dom'
import ShootingStarsBackground from './ShootingStarsBackground'


const Hero = () => {
  return (
    <div>
       <div id='hero' className="relative overflow-hidden flex flex-col lg:flex-row justify-between min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black">
        <ShootingStarsBackground transparent />

        {/* transparent=true so it layers on top of the gradient above, instead of covering it */}

    <div className="relative z-10 w-full lg:w-1/2 px-6 md:px-12 lg:px-20 xl:pl-40 flex justify-center flex-col">

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">INTRODUCING</h1>
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold italic text-gray-300  -mt-2">NEW TECHNOLOGY</h1>

      <p className="max-w-2xl mt-5 text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, pariatur magnam. Animi enim possimus autem inventore quasi quia, mollitia obcaecati minima, sed magnam excepturi ipsum pariatur. Architecto numquam nihil enim, aperiam impedit soluta dicta temporibus beatae odio quidem expedita porro labore. Quasi hic odit rem possimus autem ducimus, quo vitae nihil, cumque accusantium voluptate itaque est deleniti id recusandae quidem corporis nemo doloremque quos sit magnam qui praesentium! Voluptas, quibusdam.</p>

        <div className='flex mt-5 gap-3 text-lg  text-white-800 '>

          <Link to='/login'>
          <button className='bg-gray-800 rounded-full w-50 h-10 hover:cursor-pointer'>Get Started</button>
          </Link>

          <Link to='/login'>
          <button className='bg-gray-800 rounded-full w-50 h-10 hover:cursor-pointer'>Documentation</button>
          </Link>

          
        </div>

    </div>

   

      <div className='relative z-10 flex pt-20'>
      <img className='   scale-x-[-1] 'src="\herosimg.png" alt="" srcset="" />
      </div>



    </div>
    </div>
  )
}

export default Hero