import React from 'react'
import {Link} from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form" 

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data)
  return (
    <>
        <div className='flex h-screen items-center justify-center'>
            <div className='w-[600px]' >
                <div className='modal-box dark:bg-slate-700 dark:text-white'>
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        
                        <h1 className="font-bold text-lg ">Contact Us!</h1>
                        {/* Name */}
                        <div className="mt-4 space-y-2">
                            <span>Name :</span>
                            <br/>
                            <input 
                                type='text' 
                                placeholder='Enter Your Name' 
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register("Name", { required: true })}
                            />
                            <br/>
                            {errors.email && <span className='text-sm text-red-500 '>This field is required</span>}
                        </div>
                        {/*Email */}
                        <div className="mt-4 space-y-2">
                            <span>Email :</span>
                            <br/>
                            <input 
                                type='email' 
                                placeholder='Enter Your Email' 
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register("email", { required: true })}
                            />
                            <br/>
                            {errors.email && <span className='text-sm text-red-500 '>This field is required</span>}
                        </div>
                        {/* Message */}
                        <div className="mt-4 space-y-2">
                            <span>Message: </span>
                            <br/>
                            <textarea 
                                type='text' 
                                placeholder='Enter Your Message' 
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register("password", { required: true })}
                            />
                            <br/>
                            {errors.password && <span className='text-sm text-red-500 '>This field is required</span>}
                        </div>
                        
                        {/* Button */}
                        <div className="justify-around mt-10">
                            <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact