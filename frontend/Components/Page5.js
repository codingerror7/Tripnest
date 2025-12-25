import Link from 'next/link'
import React from 'react'

const Page5 = () => {
  return (
    <>
     <div className='min-h-[110vh] bg-stone-900 pt-[6%] overflow-hidden'>
        <h1 className='font-[gilroy] text-[60px] font-extrabold uppercase text-sky-300 w-[65%] ml-[2%]'>Turn your property into profit — start hosting today!</h1>
        <p className='font-[gilroy] text-[25px] text-white font-medium ml-[2%] w-[60%]'>Whether you have a cozy apartment, a villa, or a shared room — list your property with us and start earning by welcoming guests from all over the world.</p>
        <div className='flex justify-between w-[30vw] p-[10px] ml-[2%] mt-[1%]'>
             <svg xmlns="http://www.w3.org/2000/svg" height="110px" viewBox="0 -960 960 960" width="110px" fill="#e8eaed"><path d="M160-120v-375l-72 55-48-64 120-92v-124h80v63l240-183 440 336-48 63-72-54v375H160Zm80-80h200v-160h80v160h200v-356L480-739 240-556v356Zm-80-560q0-50 35-85t85-35q17 0 28.5-11.5T320-920h80q0 50-35 85t-85 35q-17 0-28.5 11.5T240-760h-80Zm80 560h480-480Z"/></svg>
             <svg xmlns="http://www.w3.org/2000/svg" height="110px" viewBox="0 -960 960 960" width="110px" fill="#e8eaed"><path d="M120-120v-560h160v-160h400v320h160v400H520v-160h-80v160H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"/></svg>
             <svg xmlns="http://www.w3.org/2000/svg" height="110px" viewBox="0 -960 960 960" width="110px" fill="#e8eaed"><path d="M280-240h40v-60h320v60h40v-160q0-33-23.5-56.5T600-480H460v140H320v-180h-40v280Zm110-120q21 0 35.5-14.5T440-410q0-21-14.5-35.5T390-460q-21 0-35.5 14.5T340-410q0 21 14.5 35.5T390-360ZM160-120v-480l320-240 320 240v480H160Zm80-80h480v-360L480-740 240-560v360Zm240-270Z"/></svg>
        </div>
        <div className='mt-[5%]'>
        <Link href = './Listing' className='border-[1px] border-white rounded-[20px] p-[15px] text-[18px] text-white font-semibold cursor-pointer ml-[2%] hover:bg-[white] hover:text-black'>BECOME A HOST</Link>
        </div>
     </div>
     <hr className='text-white'></hr>
    </>
  )
}

export default Page5