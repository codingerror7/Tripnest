"use client"
export const dynamic = "force-dynamic";
import React from 'react'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'


const page = () => {
        let searchParams = useSearchParams();
        let query = (searchParams.get("query") || "").trim().toLowerCase();

        const hotels = [
            {
                id : 1, 
                image : "/Hotels/img3.jpeg", 
                name : "Hotel staywell", 
                price : "₹ 1500 for 2 nights."
            },{
                id : 2, 
                image : "/Hotels/img5.jpeg", 
                name : "Bombay Hotel", 
                price : "₹ 3500 for 2 nights."
            },{
                id : 3, 
                image : "/Hotels/img8.jpeg", 
                name : "Vilas Hotels", 
                price : "₹ 4500 for 4 nights."
            },{
                id : 4,
                image : "/Hotels/img11.jpeg",
                name : "Raj Hotles Co.",
                price : "₹ 3300 for 3 nights."
            },{
                id : 5,
                image : "/Hotels/img12.jpeg",
                name : "Srilila Hotels",
                price : "₹ 4000 for 5 nights."
            },
            {
                id : 6,
                image : "/Hotels/img14.jpeg",
                name : "Indian Hotels",
                price : "₹ 6550 for 7 nights."
            },
            {
                id : 7,
                image : "/Villas/villa1.jpeg",
                name : "Villa in delhi",
                price : "₹2500 for 2 nights."
            },
            {
                id : 8,
                image : "/Hotels/img14.jpeg",
                name : "Villa in delhi",
                price : "₹2500 for 2 nights."
            },
            {
                id : 9,
                image : "/Villas/villa2.jpeg",
                name : "Villa in Bhopal",
                price : "₹1500 for 3 nights."
            },
            {
                id : 10,
                image : "/Villas/villa3.jpeg",
                name : "Family Villa",
                price : "₹3500 for 2 nights."
            },
            {
                id : 11,
                image : "/Villas/villa4.jpeg",
                name : "Villa in Dehradun",
                price : "₹5500 for 2 nights."
            },
            {
                id : 12,
                image : "/Villas/villa5.jpeg",
                name : "Villa in Mumbai",
                price : "₹5000 for 7 days."
            },
            {
                id : 13,
                image : "/Villas/villa6.jpeg",
                name : "Villa in Ahmedabad",
                price : "₹5500 for 2 nights."
            },
            {
                id : 14,
                image : "/Villas/villa1.jpeg",
                name : "Villa in Bengaluru",
                price : "₹6500 for 2 nights."
            },
            {
                id : 15,
                image : "/Dormetry/dorm1.jpeg",
                name : "Family Dormetry",
                price : "₹ 500 for 2 nights."
            },
            {
                id : 16,
                image : "/Dormetry/dorm2.jpeg",
                name : "Hostel in bhopal",
                price : "₹ 1500 for 3 nights."
            },
            {
                id : 17,
                image : "/Dormetry/dorm3.jpeg",
                name : "Public Dormetry",
                price : "₹500 per person."
            },
            {
                id : 18,
                image : "/Dormetry/dorm4.jpeg",
                name : "Dormetry in Pune",
                price : "₹2500 for 6 nights."
            },
            {
                id : 19,
                image : "/Dormetry/dorm5.jpeg",
                name : "Boys hostel Indore",
                price : "₹ 300 per person."
            },
            {
                id : 20,
                image : "/Dormetry/dorm6.jpeg",
                name : "Girls Hostel",
                price : "₹500 for 2 nights."
            },
            {
                id : 21,
                image : "/Villas/villa1.jpeg",
                name : "Feelsafe Dorm/Hostel",
                price : "₹200 per person"
            },
            {
                id : 22,
                image : "/Resorts/img1.jpeg",
                name : "Fantasy Resorts",
                price : "₹ 2500 for 4 nights."
            },
            {
                id : 23,
                image : "/Resorts/img2.jpeg",
                name : "Dream Resort",
                price : "₹ 1500 for 2 nights."
            },
            {
                id : 24,
                image : "/Resorts/img4.jpeg",
                name : "Happyhour Resort",
                price : "₹ 3000 for 2 nights."
            },
            {
                id : 25,
                image : "/Resorts/img6.jpeg",
                name : "Kapoor Resorts",
                price : "₹ 2000 for 1 night."
            },
            {
                id : 26,
                image : "/Resorts/img9.jpeg",
                name : "Srimala Resorts",
                price : "₹ 5000 for 4 nights."
            },
            {
                id : 27,
                image : "/Resorts/img10.jpeg",
                name : "Panama Resorts",
                price : "₹ 1500 for 3 nights."
            },
            {
                id : 28,
                image : "/Resorts/img17.jpeg",
                name : "Bombay Resorts",
                price : "₹ 5500 for 5 nights."
            },
            {
                id : 29,
                image : "/PG/pg1.jpeg",
                name : "Cottage in Bhopal",
                price : "₹500 for 4 nights."
            },
            {
                id : 30,
                image : "/PG/pg2.jpeg",
                name : "Shortstay in banaras",
                price : "₹ 1500 for 8 nights."
            },
            {
                id : 31,
                image : "/PG/pg3.jpeg",
                name : "Family Cottage",
                price : "₹300 per night."
            },
            {
                id : 32,
                image : "/PG/pg4.jpeg",
                name : "Couple Cottage",
                price : "₹2000 for 7 nights."
            },
            {
                id : 33,
                image : "/PG/pg7.jpeg",
                name : "Shortstay in gurgaon",
                price : "₹100 per night."
            },
            {
                id : 34,
                image : "/PG/pg5.jpeg",
                name : "Paying Guest",
                price : "₹500 for 4 nights."
            },
            {
                id : 35,
                image : "/PG/pg6.jpeg",
                name : "Sweethome Cottage",
                price : "₹1500 for 1 week."
            }
        ]
        const hotelFilter = hotels.filter((hotel)=>
            hotel.name.toLowerCase().includes(query)
        )

  return (
    <>
    <div className='min-h-[100vh] border-[#f8eded] border-[10px] bg-stone-900 overflow-hidden'>
         <div className='absolute w-[17%] h-[12%] bg-[#f8eded] p-[2%] rounded-[50px] text-black text-center font-[gilroy] font-extrabold text-[22px] mt-[-1%] ml-[-2%]'><h1 className='mt-[1%] ml-[-15%]'>TRIPNEST<svg className='mt-[-18%] ml-[10.5vw]' xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="m354-334 356-94q15-4 22.5-18.5T736-476q-4-15-17.5-22.5T690-502l-98 26-160-150-56 14 96 168-96 24-50-38-38 10 66 114Zm446 174H160q-33 0-56.5-23.5T80-240v-160q33 0 56.5-23.5T160-480q0-33-23.5-56.5T80-560v-160q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160Zm0-80v-480H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102h640ZM480-480Z"/></svg></h1></div>
        <h1 className='font-[gilroy] text-[40px] font-extrabold uppercase text-sky-300 w-[65%] mt-[6%] ml-[35%]'>Your Search Results is:</h1>
       {hotelFilter.length>0 ? (
           <div className='w-[22%] h-[95%] ml-[40%] mt-[2%] bg-[#ffffff21] rounded-[20px] p-[20px]'>
        {hotelFilter.map((hotel) => (
            <div key={hotel.id} className="text-white font-[gilroy]">
          <img src={hotel.image} className='h-[85%] w-[90%] bg-center ml-[5%] mt-[2%] rounded-[10%]'></img>
          <p className='ml-[5%] font-[20px] font-semibold'>{hotel.name}</p>
          <p className='ml-[5%] font-[8px]'>{hotel.price}</p>
        </div>
        )
       )}
       </div> )
       :(
           <h1 className=" text-[50px] text-center text-red-700 col-span-full">No results found 😕</h1>
       )
       }
    </div>
    </>
  )
}

export default page