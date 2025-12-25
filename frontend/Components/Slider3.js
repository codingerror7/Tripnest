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
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/Hotels/img3.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Hotel Staywell</p>
          <p className='ml-[5%] font-[8px]'>₹ 1500 for 2 nights.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
       <div className="h-[260px] border-white rounded-[10%] text-white font-[gilroy] p-[12px]">
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/Hotels/img5.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Bombay Hotel</p>
          <p className='ml-[5%] font-[8px]'>₹ 3500 for 2 nights.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[260px] border-white rounded-[10%] text-white font-[gilroy] p-[12px]">
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/Hotels/img8.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Vilas Hotels</p>
          <p className='ml-[5%] font-[8px]'>₹ 4500 for 4 nights.</p>
        </div>
      </SwiperSlide>
        <SwiperSlide>
        <div className="h-[260px] border-white rounded-[10%] text-white font-[gilroy] p-[12px]">
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/Hotels/img11.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Raj Hotles Co.</p>
          <p className='ml-[5%] font-[8px]'>₹ 3300 for 3 nights.</p>
        </div>
      </SwiperSlide>
        <SwiperSlide>
        <div className="h-[260px] border-white rounded-[10%] text-white font-[gilroy] p-[12px]">
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/Hotels/img12.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Srilila Hotels</p>
          <p className='ml-[5%] font-[8px]'>₹ 4000 for 5 nights.</p>
        </div>
      </SwiperSlide>
             <SwiperSlide>
       <div className="h-[260px] border-white rounded-[10%] text-white font-[gilroy] p-[12px]">
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/Hotels/img14.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Indian Hotel</p>
          <p className='ml-[5%] font-[8px]'>₹ 6550 for 7 nights.</p>
        </div>
      </SwiperSlide>

    </Swiper>
  );
}

export default Slider;
