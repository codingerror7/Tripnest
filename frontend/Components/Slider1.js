"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
  function handleClick(){
    alert("Please signup first!");
  }
  return (
    <Swiper className='p-[10px]'
      spaceBetween={7}
      slidesPerView={6}
      grabCursor={true}
      freeMode={true}
      touchRatio={1}
      simulateTouch={true}
      mousewheel={false}
     // breakpoints={{
       // 640: { slidesPerView: 1 },
       // 768: { slidesPerView: 2 },
       // 1024: { slidesPerView: 3 },
      //}}
    >
      <SwiperSlide>
        <div className="h-[260px] border-white rounded-[10%] text-white font-[gilroy] p-[12px]">
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/Villas/villa1.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Villa in Delhi</p>
          <p className='ml-[5%] font-[8px]'>₹2500 for 2 nights.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
       <div className="h-[260px] border-white rounded-[10%] text-white font-[gilroy] p-[12px]">
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/Villas/villa2.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Villa in Bhopal</p>
          <p className='ml-[5%] font-[8px]'>₹1500 for 3 nights.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[260px] border-white rounded-[10%] text-white font-[gilroy] p-[12px]">
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/Villas/villa3.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Family Villa</p>
          <p className='ml-[5%] font-[8px]'>₹3500 for 2 nights.</p>
        </div>
      </SwiperSlide>
        <SwiperSlide>
        <div className="h-[260px] border-white rounded-[10%] text-white font-[gilroy] p-[12px]">
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/Villas/villa4.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Villa in Dehradun</p>
          <p className='ml-[5%] font-[8px]'>₹5500 for 2 nights.</p>
        </div>
      </SwiperSlide>
        <SwiperSlide>
        <div className="h-[260px] border-white rounded-[10%] text-white font-[gilroy] p-[12px]">
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/Villas/villa5.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Villa in Mumbai</p>
          <p className='ml-[5%] font-[8px]'>₹5000 for 7 days.</p>
        </div>
      </SwiperSlide>
             <SwiperSlide>
       <div className="h-[260px] border-white rounded-[10%] text-white font-[gilroy] p-[12px]">
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/Villas/villa6.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Villa in Ahmedabad</p>
          <p className='ml-[5%] font-[8px]'>₹5500 for 2 nights.</p>
        </div>
      </SwiperSlide>
             <SwiperSlide>
        <div className="h-[260px] border-white rounded-[10%] text-white font-[gilroy] p-[10px]">
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/Villas/villa1.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Villa in Bengaluru</p>
          <p className='ml-[5%] font-[8px]'>₹6500 for 2 nights.</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
