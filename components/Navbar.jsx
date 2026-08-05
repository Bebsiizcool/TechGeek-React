import React from 'react'
import { SiTechcrunch } from "react-icons/si";
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
   const scrolltofeature = () =>{
    document.getElementById('features').scrollIntoView({
      behavior: "smooth",
    })
  }
   const scrolltoservices = () =>{
    document.getElementById('services').scrollIntoView({
      behavior: "smooth",
    })
  }

   const scrolltocontact = () =>{
    document.getElementById('footer').scrollIntoView({
      behavior: "smooth",
    })
  }

   const scrolltotestimonial = () =>{
    document.getElementById('testimonial').scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <div className=' w-[100%] mt-12 fixed z-99 flex justify-center h-10 items-center hover:'>
      <nav className=' bg-gray-800 flex text-white rounded-full  flex-warp border border-amber-50'>

        <Link
          to="/"
          className="flex items-center text-3xl px-12  font-medium hover:cursor-pointer"
        >
          <SiTechcrunch className='m-2' />

          <span className=''> TechGeek</span>
        </Link>

        <ul className='flex gap-13 p-4 hover:cursor-pointer hover:p-8'>
          <NavLink onClick={scrolltoservices}> <li>Services</li> </NavLink>
          <NavLink> <li onClick={scrolltotestimonial}>Testamonials</li> </NavLink>
          <NavLink onClick={scrolltofeature}> <li>Features</li> </NavLink>
          <NavLink onClick={scrolltocontact}> <li>Contact</li> </NavLink>
          <NavLink> <li>AboutUS</li> </NavLink>
        </ul>

        <div className='flex  gap-3 px-12 text-lg items-center text-gray-800 '>

          <Link to='/login'>
          <button className='bg-white rounded-full w-20 h-10 hover:cursor-pointer'>Login</button>
          </Link>

          <Link to='/sign'>
          <button className='bg-white rounded-full w-20 h-10 hover:cursor-pointer'>SignUp</button>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
