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

   const scrolltoabout = () =>{
    document.getElementById('about').scrollIntoView({
      behavior: "smooth",
    })
  }

   const scrolltohero = () =>{
    document.getElementById('hero').scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <div className="fixed top-3 md:top-7 z-50 w-full flex justify-center px-2 md:px-4">
      <nav className='w-full max-w-6xl bg-gray-800 flex justify-center text-white rounded-full items-center px-2 md:px-4  flex-wrap border-b-2 border-amber-50 transition-all duration-300 ease-in-out hover:p-2  hover:scale-105  hover:max-w-7xl hover:text-lg' >

        <Link
          to=""
          className="flex items-center text-xl md:text-3xl px-4 md:pr-12 font-medium"
          onClick={scrolltohero}
        >
          <SiTechcrunch className='m-2' />

          <span className=''> TechGeek</span>
        </Link>

       <ul className="hidden md:flex gap-8 lg:gap-12 p-4">
          <NavLink onClick={scrolltoservices}> <li>Services</li> </NavLink>
          <NavLink> <li onClick={scrolltotestimonial}>Testamonials</li> </NavLink>
          <NavLink onClick={scrolltofeature}> <li>Features</li> </NavLink>
          <NavLink onClick={scrolltoabout}> <li>AboutUS</li> </NavLink>
          <NavLink onClick={scrolltocontact}> <li>Contact</li> </NavLink>
        </ul>

       <div className="flex gap-2 md:gap-3 px-3 md:px-8 items-center text-gray-800">

          <Link to='/login'>
          <button className='bg-white rounded-full w-16 md:w-20 h-8 text-sm md:text-base hover:cursor-pointer'>Login</button>
          </Link>

          <Link to='/sign'>
          <button className='bg-white rounded-full w-16 md:w-20 h-8 text-sm md:text-base hover:cursor-pointer'>SignUp</button>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
