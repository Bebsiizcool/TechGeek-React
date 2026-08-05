import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div>
       <div className='flex justify-between h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black'>
    <div className='w-1/2 pl-40  flex justify-center flex-col'>

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

   

      <div className=' flex pt-20'>
      <img className='   scale-x-[-1] 'src="\herosimg.png" alt="" srcset="" />
      </div>



    </div>
    </div>
  )
}

export default Hero
