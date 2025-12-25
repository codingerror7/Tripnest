import React from 'react'
import { useState } from 'react'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Link from 'next/link'

const Navbar = () => {
  const [route, setroute] = useState("Home")
  return (
    <>
    <div className='border-[1px] border-black rounded-[20px] w-[32vw] flex items-center justify-between font-[gilroy] p-[10px] gap-[20px] ml-[16vw] mt-[1%] font-semibold'>
      <button onClick={()=>setroute("Home")} className='text-[15px]  hover:cursor-pointer hover:text-[16px]'>HOME</button>
      <button onClick={()=>setroute("About")} className='text-[15px] hover:cursor-pointer hover:text-[16px]'>ABOUT</button>
      <button onClick={()=>setroute("Reviews")} className='text-[15px] hover:cursor-pointer  hover:text-[16px]'>REVIEWS</button>
      <button onClick={()=>setroute("Packages")} className='text-[15px] hover:cursor-pointer hover:text-[16px]'>PACKAGES</button>
    </div>

    </>
  )
}

export default Navbar