import React from 'react';
import Link from 'next/link';

const page3 = () => {
  return (
    <>
    <div id='Page3' className='min-h-[145vh] bg-stone-900 pt-[2%] overflow-hidden'>
        <h1 className='font-[gilroy] text-[52px] font-extrabold uppercase text-sky-300 w-[65%] ml-[2%]'>🌟 Hear from Our Happy Travelers</h1>
        <p className='font-[gilroy] text-[30px] text-white font-medium ml-[7.5%]'>Real stories from explorers who found their perfect stay with TripNest.</p>
       <div className='flex items-center justify-around h-[45vh] p-[2%] pt-[2%] text-white font-[gilroy]'>
        <div id='rev' className='rounded-[10px] h-[80%] w-[30%] bg-[#ffffff25]'>
            <h3 className='text-[gilroy] text-white text-[16px] font-semibold mx-[3%] my-[3%]'>@JOHN ANDREWS</h3>
            <h2 className='mx-[3%] text-[gilroy] text-[16px] font-extrabold'>“A Life Beyond the Screen!”</h2>
            <p className='mx-[3%] text-[gilroy] text-[15px]'>I was lost in my phone day and night. This program gave me structure, discipline, and clarity. Now, I enjoy real conversations and peaceful moments without digital distractions.</p>
        </div>
        <div id='rev' className='rounded-[10px] h-[80%] w-[30%] bg-[#ffffff25]'>
            <h3 className='text-[gilroy] text-white text-[16px] font-semibold mx-[3%] my-[3%]'>@HELEN RODRIGO</h3>
            <h2 className='mx-[3%] text-[gilroy] text-[15px] font-extrabold'>“Regained My Focus!”</h2>
            <p className='mx-[3%] text-[gilroy] text-[15px]'>As a teacher, I struggled with my own phone usage. Thanks to this treatment, I’ve become more present, attentive, and productive — both in class and at home. It’s life-changing!</p>
        </div>
        <div id='rev' className='rounded-[10px] h-[80%] w-[30%] bg-[#ffffff25]'>
            <h3 className='text-[gilroy] text-white text-[16px] font-semibold mx-[3%] my-[3%]'>@JAMES GOSLIN</h3>
            <h2 className='mx-[3%] text-[gilroy] text-[15px] font-extrabold'>“From Scrolling to Soaring!”</h2>
            <p className='mx-[3%] text-[gilroy] text-[15px]'>I wasted hours on social media, feeling anxious and stuck. This recovery journey helped me break free and build healthier habits. I finally feel in control of my time and mind.</p>
        </div>
    </div>
    <div className='flex items-center justify-around h-[45vh] w-[100vw] p-[2%] text-white font-[gilroy]'>
        <div id='rev' className='rounded-[10px] h-[80%] w-[30%] bg-[#ffffff25]'>
            <h3 className='text-[gilroy] text-white text-[16px] font-semibold mx-[3%] my-[3%]'>@JOHN ANDREWS</h3>
            <h2 className='mx-[3%] text-[gilroy] text-[16px] font-extrabold'>“A Life Beyond the Screen!”</h2>
            <p className='mx-[3%] text-[gilroy] text-[15px]'>I was lost in my phone day and night. This program gave me structure, discipline, and clarity. Now, I enjoy real conversations and peaceful moments without digital distractions.</p>
        </div>
        <div id='rev' className='rounded-[10px] h-[80%] w-[30%] bg-[#ffffff25]'>
            <h3 className='text-[gilroy] text-white text-[16px] font-semibold mx-[3%] my-[3%]'>@HELEN RODRIGO</h3>
            <h2 className='mx-[3%] text-[gilroy] text-[15px] font-extrabold'>“Regained My Focus!”</h2>
            <p className='mx-[3%] text-[gilroy] text-[15px]'>As a teacher, I struggled with my own phone usage. Thanks to this treatment, I’ve become more present, attentive, and productive — both in class and at home. It’s life-changing!</p>
        </div>
        <div id='rev' className='rounded-[10px] h-[80%] w-[30%] bg-[#ffffff25]'>
            <h3 className='text-[gilroy] text-white text-[16px] font-semibold mx-[3%] my-[3%]'>@JAMES GOSLIN</h3>
            <h2 className='mx-[3%] text-[gilroy] text-[15px] font-extrabold'>“From Scrolling to Soaring!”</h2>
            <p className='mx-[3%] text-[gilroy] text-[15px]'>I wasted hours on social media, feeling anxious and stuck. This recovery journey helped me break free and build healthier habits. I finally feel in control of my time and mind.</p>
        </div>
    </div>
    <Link href='./Reviews' className='border-[1px] border-white rounded-[20px] p-[10px] text-[15px] text-white font-semibold cursor-pointer ml-[2%] mt-[2%] hover:bg-[white] hover:text-black'>Review Now!</Link>
    </div>
    </>
  )
}

export default page3