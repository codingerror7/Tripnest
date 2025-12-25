"use client"
import React from 'react'
import Footer from '@/Components/Footer'
import axios from 'axios'
import { useRouter } from 'next/navigation';

const page = () => {
  
  return (
    <>
    <div className='min-h-[100vh] border-stone-900 border-[10px] bg-[linear-gradient(150deg,#FFF8E7_0%,#C7E9FF_50%,#E6E8FF_100%)] overflow-hidden'>
    <div className='absolute w-[17%] h-[12%] bg-stone-900 p-[2%] rounded-[50px] text-white text-center font-[gilroy] font-extrabold text-[22px] mt-[-1%] ml-[-2%]'><h1 className='mt-[1%] ml-[-15%]'>TRIPNEST<svg className='mt-[-18%] ml-[10.5vw]' xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="m354-334 356-94q15-4 22.5-18.5T736-476q-4-15-17.5-22.5T690-502l-98 26-160-150-56 14 96 168-96 24-50-38-38 10 66 114Zm446 174H160q-33 0-56.5-23.5T80-240v-160q33 0 56.5-23.5T160-480q0-33-23.5-56.5T80-560v-160q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160Zm0-80v-480H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102h640ZM480-480Z"/></svg></h1></div>
    <div className='border-[1px] border-black rounded-[20px] w-[32vw] flex items-center justify-between font-[gilroy] p-[10px] gap-[20px] ml-[16vw] mt-[1%] font-semibold'>
      <h3 className='text-[15px]  hover:cursor-pointer hover:text-[16px]'>HOME</h3>
      <h3 className='text-[15px] hover:cursor-pointer hover:text-[16px]'>ABOUT</h3>
      <h3 className='text-[15px] hover:cursor-pointer  hover:text-[16px]'>REVIEWS</h3>
      <h3 className='text-[15px] hover:cursor-pointer hover:text-[16px]'>PACKAGES</h3>
    <img className='h-[12%] w-[6%] hover:cursor-pointer' src='/wishlist.png'></img>
    </div>
    <hr className='mt-[6%] w-[80%] ml-[10%]'></hr>
    <div className='absolute w-[17vw] h-[9%] bg-stone-900 text-white text-center font-[gilroy] mt-[26.4%] ml-[81vw] rounded-s-[50px] '>
      <button className='text-[12px] border-[1px] border-white w-[50%] p-[2%] rounded-[20px] font-extrabold bg-white text-black flex items-center justify-around ml-[30%] mt-[7%] cursor-pointer'>LOGOUT<svg className='text-black' xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg></button>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default page