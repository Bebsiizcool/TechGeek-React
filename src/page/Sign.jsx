import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Sign = () => {
  const [showpass, setshowpass] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div className='flex justify-center items-center h-screen'>


      <div className='bg-gray-800 w-150 h-170 rounded-4xl  '>

        <div>
          <h1 className='text-5xl font-bold flex mt-15 ml-17 pb-2'> SignUp </h1>
        
        </div>

        <form className='flex ml-15 mt-10 flex-col w-[80%]  ' onSubmit={handleSubmit(onSubmit)}>

          <p className=' mb-2 ml-5'>Username:</p>
          <input
            className=' rounded-4xl border border-amber-50 p-5'
            placeholder='UserName'
            {...register("Username", {
              required: '*Username is missing',              
                // message: "Please enter a valid email address",
            })} />
          
          {errors.Username && (
            <span className="text-red-400 text-sm">
              {errors.Username.message}
            </span>
          )}

          <p className=' mt-6 mb-2 ml-5'>Email Address:</p>
          <input
            className=' rounded-4xl border border-amber-50 p-5'
            placeholder='Your@exmaple.com'
            {...register("Email", {
              required: '*Email is missing',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              }
            })} />

          {errors.Email && (
            <span className="text-red-400 text-sm">
              {errors.Email.message}
            </span>
          )}



          <div className='relative'>
          <p className=' mt-6 mb-2 ml-5'>Password: </p>
          <input
            type={showpass ? "text" : "password"}
            className=' rounded-4xl border border-amber-50 p-5  w-full '
            placeholder='Enter 6 characters or more'
            {...register("Password", {
              required: "*Password is required", minLength: {
                value: 6,
                message: "*Password must be at least 6 characters long"
              }
            })} />

          <button
            type="button"
            onClick={() => setshowpass(!showpass)}
            className=" hover: cursor-pointer absolute right-4 top-23 -translate-y-1/2 text-gray-400 hover:text-white"
          >
            {showpass ? <FaEyeSlash /> : <FaEye />}
          </button>

          {errors.Password && (
            <span className="text-red-400 text-sm">
              {errors.Password.message}
            </span>
          )}
          </div>

          <Link to="/login">
          <span className='flex justify-end mt-1 underline hover:cursor-pointer'>Already have an account?</span>
            </Link>

          <button
            type="submit"
            className=" hover: cursor-pointer rounded-4xl mt-5 bg-amber-50 text-gray-800 p-3 hover:bg-gray-300"
          >
            Submit
          </button>
        </form>

      </div>
    </div>
  )
}

export default Sign
