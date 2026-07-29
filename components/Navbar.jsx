import React from 'react'
import { SiTechcrunch } from "react-icons/si";
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=' w-[95%] m-auto pt-8 '>
      <nav className='bg-gray-800 flex text-white rounded-full '>

        <Link
          to="/"
          className="flex items-center text-3xl pl-12 pr-12 font-medium hover:cursor-pointer"
        >
          <SiTechcrunch className='m-2' />

          <span className=''> TechGeek</span>
        </Link>

        <ul className='flex gap-13 p-8 hover:cursor-pointer'>
          <NavLink> <li>Features</li> </NavLink>
          <NavLink> <li>Production</li> </NavLink>
          <NavLink> <li>Services</li> </NavLink>
          <NavLink> <li>Contact</li> </NavLink>
          <NavLink> <li>AboutUS</li> </NavLink>
        </ul>

        <div className='flex ml-165 gap-3 text-lg items-center text-gray-800 '>

          <Link to='/login'>
          <button className='bg-white rounded-full w-30 h-10 hover:cursor-pointer'>Login</button>
          </Link>

          <Link to='/sign'>
          <button className='bg-white rounded-full w-30 h-10 hover:cursor-pointer'>SignUp</button>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
