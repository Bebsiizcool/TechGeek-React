import React from 'react'
import ShootingStarsBackground from './ShootingStarsBackground'

const About = () => {
  return (
    <div>
      <div id='about' className="h-screen relative overflow-hidden flex items-center justify-center">
        <ShootingStarsBackground transparent />
          <div className="flex flex-col text-center ">
            <h1 className='font-bold text-7xl w-2xl flex  leading-19 text-center'>We're Changing The Way People Think About Tech</h1>
            <p className='w-2xl text-center p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum temporibus provident quas quam, enim qui atque voluptas alias culpa aliquid iste exercitationem, porro dolorem recusandae eius nihil? Quas, voluptatum vitae odit sint impedit, dolores porro recusandae, libero nostrum corporis odio totam reprehenderit ullam possimus alias fugiat tempore doloribus sit!</p>

            <p className='w-2xl text-center px'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum temporibus provident quas quam, enim qui atque voluptas alias culpa aliquid iste exercitationem, porro dolorem recusandae eius nihil? Quas, voluptatum vitae odit sint impedit, dolores porro recusandae, libero nostrum corporis odio totam reprehenderit ullam possimus alias fugiat tempore doloribus sit!</p>
          </div>

      </div>
    </div>
  )
}

export default About
