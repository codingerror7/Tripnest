"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from "react-hook-form"

const page = () => {
    let router = useRouter();
    function review(){
        console.log("reviewed..");
        router.push("/Done");
    }
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  return (
    <>
    <div className='min-h-[100vh] border-[#f8eded] border-[10px] bg-stone-900 overflow-hidden'>
         <div className='absolute w-[17%] h-[12%] bg-[#f8eded] p-[2%] rounded-[50px] text-black text-center font-[gilroy] font-extrabold text-[22px] mt-[-1%] ml-[-2%] '><h1 className='mt-[1%] ml-[-15%]'>TRIPNEST<svg className='mt-[-18%] ml-[10.5vw]' xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="40px" fill="#000000ff"><path d="m354-334 356-94q15-4 22.5-18.5T736-476q-4-15-17.5-22.5T690-502l-98 26-160-150-56 14 96 168-96 24-50-38-38 10 66 114Zm446 174H160q-33 0-56.5-23.5T80-240v-160q33 0 56.5-23.5T160-480q0-33-23.5-56.5T80-560v-160q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160Zm0-80v-480H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102h640ZM480-480Z"/></svg></h1></div>
         <form onSubmit={(e)=>{
            e.preventDefault();
            review();
         }} className='border-[1px] border-black rounded-[20px] p-[15px] w-[35%] min-h-[50vh] ml-[32.5%] mt-[7%] bg-[#f8eded]'>
             <div className='mt-[10%] ml-[8%]'>
              <label className='font-semibold text-[18px]'>Username:</label>
              <input type='text' name='username' {...register('username',{required:true})}
              className='border-[1px] border-black p-[5px] ml-[2%] rounded-[10px] w-[64%] font-[gilroy]' placeholder='Enter your username:'></input> 
              {errors.username && <p className='text-red-700'>username is required.</p>}
            </div>
            <div className='mt-[7%] ml-[15%]'>
              <textarea type='text' className='border-[1px] border-black p-[10px] ml-[13%] rounded-[10px] w-[70%] font-[gilroy]' placeholder='Review..'></textarea>
            </div>
            <div className='mt-[7%]'>
              <button type='submit' className='rounded-[20px] p-[5px] text-[12px] text-white bg-stone-900 font-semibold cursor-pointer ml-[35%] w-[30%]'>Submit</button>
            </div>
         </form>
    </div>
    </>
  )
}

export default page