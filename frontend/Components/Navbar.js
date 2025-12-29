import React from 'react'
import { useState } from 'react'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <div className='border-[1px] border-black rounded-[20px] w-[32vw] flex items-center justify-between font-[gilroy] p-[10px] gap-[20px] ml-[16vw] mt-[1%] font-semibold'>
      <a href='#Page1' className='text-[15px]  hover:cursor-pointer hover:text-[16px]'>HOME</a>
      <a href='#Page2' className='text-[15px] hover:cursor-pointer hover:text-[16px]'>ABOUT</a>
      <a href='#Page3' className='text-[15px] hover:cursor-pointer  hover:text-[16px]'>REVIEWS</a>
      <a href='#Page4' className='text-[15px] hover:cursor-pointer hover:text-[16px]'>PACKAGES</a>
    </div>

    </>
  )
}

export default Navbar