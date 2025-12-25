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
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/PG/pg1.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Cottage in Bhopal</p>
          <p className='ml-[5%] font-[8px]'>₹500 for 4 nights.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
       <div className="h-[260px] border-white rounded-[10%] text-white font-[gilroy] p-[12px]">
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/PG/pg2.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Shortstay in banaras</p>
          <p className='ml-[5%] font-[8px]'>₹ 1500 for 8 nights.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[260px] border-white rounded-[10%] text-white font-[gilroy] p-[12px]">
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/PG/pg3.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Family cottage</p>
          <p className='ml-[5%] font-[8px]'>₹300 per night.</p>
        </div>
      </SwiperSlide>
        <SwiperSlide>
        <div className="h-[260px] border-white rounded-[10%] text-white font-[gilroy] p-[12px]">
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/PG/pg4.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Couple cottage</p>
          <p className='ml-[5%] font-[8px]'>₹2000 for 7 nights.</p>
        </div>
      </SwiperSlide>
        <SwiperSlide>
        <div className="h-[260px] border-white rounded-[10%] text-white font-[gilroy] p-[12px]">
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/PG/pg5.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Paying Guest</p>
          <p className='ml-[5%] font-[8px]'>₹500 for 4 nights.</p>
        </div>
      </SwiperSlide>
             <SwiperSlide>
       <div className="h-[260px] border-white rounded-[10%] text-white font-[gilroy] p-[12px]">
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/PG/pg6.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Sweethome cottage</p>
          <p className='ml-[5%] font-[8px]'>₹1500 for 1 week.</p>
        </div>
      </SwiperSlide>
             <SwiperSlide>
        <div className="h-[260px] border-white rounded-[10%] text-white font-[gilroy] p-[10px]">
          <img className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]' src='/PG/pg7.jpeg'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>Shortstay in gurgaon</p>
          <p className='ml-[5%] font-[8px]'>₹100 per night.</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
