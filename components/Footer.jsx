import React from 'react'
import { SiTechcrunch } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <div id='footer' className='bg-gray-800 '>
    <div className=' w-full flex'>
      <div className='px-20 pt-10 w-1/3 '>
        <h1 className='flex items-center text-4xl'><SiTechcrunch className='m-2' /> TechGeek</h1>
        <p className='pl-2 pb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio nostrum ipsam modi delectus cupiditate quam inventore vero iste architecto tenetur.</p>
      </div>

    <div className='flex flex-col list-none'>
        <div className='pb-8'>
    <h1 className='gap-40 px-30 pt-10 text-lg'> Hot links</h1>
    <li className='mt-5 px-30 pt-3 text-sm'>Services</li>
    <li className='px-30 pt-3 text-sm'>Production</li>
    <li className='px-30 pt-3 text-sm'>Features</li>
    <li className='px-30 pt-3 text-sm'>Contact</li>
    </div>
</div>

    <div className='flex flex-col list-none'>
    <h1 className='gap-40 px-30 pt-10 text-lg'> More Info</h1>
    <div className='pb-8'>
    <li className='mt-5 px-30 pt-3 text-sm'>How it works</li>
    <li className='px-30 pt-3 text-sm'>AboutUs</li>
    <li className='px-30 pt-3 text-sm'>Sustainablity</li>
    <li className='px-30 pt-3 text-sm'>Terms & Conditions</li>
    </div>
</div>

    <div className='flex flex-col list-none'>
    <h1 className='gap-40 px-30 pt-10 text-lg '> Customer Care</h1>
    <div className='pb-8'>
    <li className='mt-5 px-30 pt-3 text-sm'>FAQ</li>
    <li className='px-30 pt-3 text-sm'>Terms of use</li>
    <li className='px-30 pt-3 text-sm'>Privacy Policy</li>
    <li className='px-30 pt-3 text-sm'>Discount System</li>
    </div>
</div>
     
    </div>
    <div className='w-full flex justify-between items-center'>
        <h1 className='px-10 py-3'>@All rights reserved</h1>

        <div className='flex justify-end px-10 gap-10'>
                <BsInstagram />
                <BsLinkedin />
                <FiTwitter />
        </div>
     </div>
    </div>
  )
}

export default Footer
