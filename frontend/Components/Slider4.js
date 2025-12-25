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
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/Resorts/img1.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Fantasy Resort</p>
          <p className='ml-[5%] font-[8px]'>₹ 2500 for 4 nights.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
       <div className="h-[260px] border-white rounded-[10%] text-white font-[gilroy] p-[12px]">
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/Resorts/img2.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Dream Resort</p>
          <p className='ml-[5%] font-[8px]'>₹ 1500 for 2 nights.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[260px] border-white rounded-[10%] text-white font-[gilroy] p-[12px]">
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/Resorts/img4.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Happyhour Resorts</p>
          <p className='ml-[5%] font-[8px]'>₹ 3000 for 2 nights.</p>
        </div>
      </SwiperSlide>
        <SwiperSlide>
        <div className="h-[260px] border-white rounded-[10%] text-white font-[gilroy] p-[12px]">
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/Resorts/img6.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Kapoor Resorts</p>
          <p className='ml-[5%] font-[8px]'>₹ 2000 for 1 night.</p>
        </div>
      </SwiperSlide>
        <SwiperSlide>
        <div className="h-[260px] border-white rounded-[10%] text-white font-[gilroy] p-[12px]">
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/Resorts/img9.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Srimala Resorts</p>
          <p className='ml-[5%] font-[8px]'>₹ 5000 for 4 nights.</p>
        </div>
      </SwiperSlide>
             <SwiperSlide>
       <div className="h-[260px] border-white rounded-[10%] text-white font-[gilroy] p-[12px]">
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/Resorts/img10.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Panama Resorts</p>
          <p className='ml-[5%] font-[8px]'>₹ 1500 for 3 nights.</p>
        </div>
      </SwiperSlide>
             <SwiperSlide>
        <div className="h-[260px] border-white rounded-[10%] text-white font-[gilroy] p-[10px]">
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/Resorts/img17.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Bombay Resort</p>
          <p className='ml-[5%] font-[8px]'>₹ 5500 for 5 nights.</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
