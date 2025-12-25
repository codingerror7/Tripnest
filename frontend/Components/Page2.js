"use client"
import React from 'react'
import { IoSearchCircleSharp } from "react-icons/io5";
import Slider1 from './Slider1'
import Slider2 from './Slider2'
import Slider3 from './Slider3'
import Slider4 from './Slider4'
import Slider5 from './Slider5'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const page2 = () => {
  
  let router = useRouter();
  const [query, setquery] = useState(" ");
  const handleQuery = () => {
    if(!query.trim()) return;
    router.push(`/Search?query=${encodeURIComponent(query)}`);
  }

  return (
    <>
    <div className='min-h-[370vh] bg-stone-900 pt-[5%] overflow-hidden'>
      <h1 className='font-[gilroy] text-[65px] font-extrabold uppercase text-sky-300 w-[60%] ml-[2%]'>Discover hidden gems around the world</h1>
      <div className='flex items-center justify-between border-white w-[30%] text-white font-semibold ml-[2%]'>
        <h2 className='border-[1px] rounded-[30px] font-[gilroy] text-[12px] p-[8px]'>SEARCH</h2>
        <h2 className='border-[1px] rounded-[30px] font-[gilroy] text-[12px] p-[8px]'>EXPLORE</h2>
        <h2 className='border-[1px] rounded-[30px] font-[gilroy] text-[12px] p-[8px]'>EXPERIENCE</h2>
      </div>
     <form onSubmit={(e)=>{e.preventDefault();
      handleQuery();
     }}>
       <input placeholder='Search by name..' type='text' value={query} onChange={(e)=>setquery(e.target.value)} className='border-[1px] rounded-[50px] w-[30%] p-[10px] ml-[2%] mt-[4%] border-white text-black bg-white font-[gilroy] font-medium outline-none'>
     </input>
      <button type='submit' className='absolute text-[33px] ml-[-3%] mt-[4.5%] cursor-pointer'><IoSearchCircleSharp /></button>
     </form>
      <h1 className='font-[gilroy] text-[30px] font-extrabold text-white w-[40%] ml-[2%] mt-[6%] flex'>EXPLORE VILLAS <svg className='mt-[1.6%]' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></h1>
      <Slider1/>
       <h1 className='font-[gilroy] text-[30px] font-extrabold text-white w-[40%] ml-[2%] mt-[6%] flex'>DORMETRY/HOSTELS <svg className='mt-[1.6%]' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></h1>
       <Slider2/>
          <h1 className='font-[gilroy] text-[30px] font-extrabold text-white w-[40%] ml-[2%] mt-[6%] flex'>EXPLORE HOTELS <svg className='mt-[1.6%]' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></h1>
          <Slider3/>
           <h1 className='font-[gilroy] text-[30px] font-extrabold text-white w-[40%] ml-[2%] mt-[6%] flex'>RESORTS <svg className='mt-[1.6%]' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></h1>
           <Slider4/>
            <h1 className='font-[gilroy] text-[30px] font-extrabold text-white w-[40%] ml-[2%] mt-[6%] flex'>SHORT STAY/COTTAGES <svg className='mt-[1.6%]' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></h1>
            <Slider5/>
    </div>
    </>
  )
}

export default page2