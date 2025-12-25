"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
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
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/Dormetry/dorm1.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Family Dormetry</p>
          <p className='ml-[5%] font-[8px]'>₹ 500 for 2 nights.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
       <div className="h-[260px] border-white rounded-[10%] text-white font-[gilroy] p-[12px]">
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/Dormetry/dorm2.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Hostel in bhopal</p>
          <p className='ml-[5%] font-[8px]'>₹ 1500 for 3 nights.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[260px] border-white rounded-[10%] text-white font-[gilroy] p-[12px]">
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/Dormetry/dorm3.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Public Dormetry</p>
          <p className='ml-[5%] font-[8px]'>₹500 per person.</p>
        </div>
      </SwiperSlide>
        <SwiperSlide>
        <div className="h-[260px] border-white rounded-[10%] text-white font-[gilroy] p-[12px]">
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/Dormetry/dorm4.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Dormetry in pune</p>
          <p className='ml-[5%] font-[8px]'>₹2500 for 6 nights.</p>
        </div>
      </SwiperSlide>
        <SwiperSlide>
        <div className="h-[260px] border-white rounded-[10%] text-white font-[gilroy] p-[12px]">
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/Dormetry/dorm5.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Boys hostel Indore</p>
          <p className='ml-[5%] font-[8px]'>₹ 300 per person.</p>
        </div>
      </SwiperSlide>
             <SwiperSlide>
       <div className="h-[260px] border-white rounded-[10%] text-white font-[gilroy] p-[12px]">
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/Dormetry/dorm6.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Girls Hostel</p>
          <p className='ml-[5%] font-[8px]'>₹500 for 2 nights.</p>
        </div>
      </SwiperSlide>
             <SwiperSlide>
        <div className="h-[260px] border-white rounded-[10%] text-white font-[gilroy] p-[10px]">
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/Villas/villa1.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Feelsafe Dorm/Hostel</p>
          <p className='ml-[5%] font-[8px]'>₹200 per person</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
