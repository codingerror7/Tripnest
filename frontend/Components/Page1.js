"use client"
import React from 'react'
import Navbar from './Navbar'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import { MdOutlineAccountCircle } from "react-icons/md";
import { useRouter } from 'next/navigation';

const page1 = () => {
  let router = useRouter();
 const [isSignUp, setisSignUp] = useState(false);
 useEffect(()=>{
  const token = localStorage.getItem("token");
  setisSignUp(!!token);
  const handleStorageChange = ()=>{
    let token = localStorage.getItem("token");
    setisSignUp(!!token);
  }
  window.addEventListener("storage",handleStorageChange);
  return() => window.removeEventListener("storage",handleStorageChange);
},[]);

const handleLogOut = () => {
localStorage.removeItem("token");
localStorage.removeItem("user");
setisSignUp(false);
router.push("/");
}
   
   const [showPopUp, setshowPopUp] = useState(false);

  return (
    <>
    <div id='Page1' className='min-h-[100vh] border-stone-900 border-[10px] bg-[linear-gradient(150deg,#FFF8E7_0%,#C7E9FF_50%,#E6E8FF_100%)] overflow-hidden'>
      <div className='absolute w-[17%] h-[12%] bg-stone-900 p-[2%] rounded-[50px] text-white text-center font-[gilroy] font-extrabold text-[22px] mt-[-1%] ml-[-2%] '><h1 className='mt-[1%] ml-[-15%]'>TRIPNEST<svg className='mt-[-18%] ml-[10.5vw]' xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="m354-334 356-94q15-4 22.5-18.5T736-476q-4-15-17.5-22.5T690-502l-98 26-160-150-56 14 96 168-96 24-50-38-38 10 66 114Zm446 174H160q-33 0-56.5-23.5T80-240v-160q33 0 56.5-23.5T160-480q0-33-23.5-56.5T80-560v-160q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160Zm0-80v-480H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102h640ZM480-480Z"/></svg></h1></div>
     {showPopUp && <div className='absolute h-[24%] w-[10%] border-1px border-black rounded-[10px] bg-white p-[10px] text-black text-center right-30 mt-[4%] z-[10]'>
        <Link href='./Dashboard' className='mt-[3%] cursor-pointer hover:bg-gray-300'>Dashboard</Link>
        <button className='mt-[3%] cursor-pointer hover:bg-gray-300'>Account Settings</button><br></br>
        <button className='mt-[3%] mb-[5%] cursor-pointer hover:bg-gray-300'>Privacy</button><br></br>
        <hr></hr>
        <Link href='./Login' className='mt-[3%] cursor-pointer text-red-900 hover:bg-red-300'>Login</Link><br></br>
        <a onClick={handleLogOut} className='mt-[3%] cursor-pointer text-red-900 hover:bg-red-300'>Logout</a>
      </div>}
      <div className='absolute w-[21vw] h-[12%] bg-stone-900 p-[2%] text-white text-center font-[gilroy] font-extrabold text-[26px] mt-[-1%] ml-[77vw] rounded-s-[50px] '>
        <div className='flex items-center justify-between font-[gilroy] w-[100%] p-[10px] mt-[-2%]'>
          {isSignUp? (
           <button onClick={()=>setshowPopUp(prev=>!prev)} className='flex items-center justify-around text-[13px] border-[1px] border-white w-[48%] p-[3px] rounded-[20px] font-medium cursor-pointer hover:border-[2px]'>Profile <MdOutlineAccountCircle className='text-[20px]'/></button>)
           :
           (<Link href= './Signup' className='text-[12px] border-[1px] border-white w-[50%] p-[4px] rounded-[20px] font-medium cursor-pointer hover:border-[2px]'>SIGNUP</Link>)}
            <Link href='./Listing' className='text-[12px] border-[1px] border-white w-[50%] p-[4px] rounded-[20px] font-medium cursor-pointer hover:border-[2px]'>BE A HOST.</Link>
       
        
        </div>
      </div>
      <Navbar/>
      <div>
        <h1 className='font-[gilroy] text-[80px] font-extrabold text-gray-900 w-[80%] uppercase ml-[16vw] mt-[13vh]'>Find Your Perfect Nest Anywhere with -<span className='border-black rounded-[40px] p-[10px] text-[80px] text-blue-950 bg-blue-200'>tripnest</span></h1>
      </div>
      <div className='flex items-center justify-between w-[50vw] p-[10px] ml-[25vw] mt-[1%]'>
        <svg className='text-black' xmlns="http://www.w3.org/2000/svg" height="110px" viewBox="0 -960 960 960" width="110px"><path d="M160-120v-375l-72 55-48-64 120-92v-124h80v63l240-183 440 336-48 63-72-54v375H160Zm80-80h200v-160h80v160h200v-356L480-739 240-556v356Zm-80-560q0-50 35-85t85-35q17 0 28.5-11.5T320-920h80q0 50-35 85t-85 35q-17 0-28.5 11.5T240-760h-80Zm80 560h480-480Z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="110px" viewBox="0 -960 960 960" width="110px"><path d="m46-160 138-276q10-20 28.5-32t41.5-12q24 0 44 12.5t29 35.5l27 66q2 6 9 5.5t9-6.5l86-287q14-48 53.5-77t89.5-29q49 0 87.5 28.5T742-657l173 497h-85L666-632q-8-23-25-35.5T601-680q-23 0-40.5 13T535-631l-86 287q-9 28-32.5 46T363-280q-27 0-50-14.5T280-335l-27-66-118 241H46Zm194-400q-50 0-85-35.5T120-680q0-50 35-85t85-35q50 0 85 35t35 85q0 49-35 84.5T240-560Zm0-80q17 0 28.5-11.5T280-680q0-17-11.5-28.5T240-720q-17 0-28.5 11.5T200-680q0 17 11.5 28.5T240-640Zm123 360ZM240-680Z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="110px" viewBox="0 -960 960 960" width="110px"><path d="M80-80v-186l350-472-70-94 64-48 56 75 56-75 64 48-70 94 350 472v186H80Zm400-591L160-240v80h120l200-280 200 280h120v-80L480-671ZM378-160h204L480-302 378-160Zm102-280 200 280-200-280-200 280 200-280Z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="110px" viewBox="0 -960 960 960" width="110px"><path d="m280-40 123-622q6-29 27-43.5t44-14.5q23 0 42.5 10t31.5 30l40 64q18 29 46.5 52.5T700-529v-71h60v560h-60v-406q-48-11-89-35t-71-59l-24 120 84 80v300h-80v-240l-84-80-72 320h-84Zm17-395-85-16q-16-3-25-16.5t-6-30.5l30-157q6-32 34-50.5t60-12.5l46 9-54 274Zm243-305q-33 0-56.5-23.5T460-820q0-33 23.5-56.5T540-900q33 0 56.5 23.5T620-820q0 33-23.5 56.5T540-740Z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="110px" viewBox="0 -960 960 960" width="110px"><path d="M120-120v-560h160v-160h400v320h160v400H520v-160h-80v160H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"/></svg>
      </div>
      <div className='absolute w-[17vw] h-[10%] bg-stone-900 text-white text-center font-[gilroy] mt-[5%] ml-[81vw] rounded-s-[50px] '>
        <p className='text-[13px] text-center font-semibold mt-[3%]'>GIVE FEEDBACK/ASK QUERY:</p>
          <a href='mailto:tripnest@gmail.com' className='text-[12px] border-[1px] border-white w-[50%] p-[1%] rounded-[20px] font-extrabold bg-white text-black flex items-center justify-around ml-[25%] mt-[3%] cursor-pointer'>EMAIL US<svg className='text-black' xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg></a>
        </div>
      </div>
      
    </>
  )
}
export default page1