"use client"
import React from 'react'
import { TiTickOutline } from "react-icons/ti";
import { useRouter } from 'next/navigation';

const page = () => {
    let router = useRouter();
    function done(){
        router.push("/");
    }
  return (
    <>
    <div className='min-h-[100vh] border-[#f8eded] border-[10px] bg-stone-900 overflow-hidden'>
    <h1 className='text-center font-[gilroy] text-red-500 text-[70px] font-extrabold uppercase mt-[10%]'>Hurray..REVIEW SUBMITED<TiTickOutline className='text-[100px] text-green-800 ml-[79%] mt-[-6.5%]' /></h1>
    <form onSubmit={(e)=>{
        e.preventDefault();
        done();
    }}>
<button className='border-[1px] border-white rounded-[20px] p-[10px] text-[15px] text-white font-semibold cursor-pointer ml-[45%] mt-[2%] hover:bg-[white] hover:text-black'>
        Go to Homapage!
    </button>
    </form>
    </div>
    </>
  )
}

export default page