import React from 'react'

const page4 = () => {
  return (
    <>
    <div id='Page4' className='min-h-[158vh] border-stone-900 border-[10px] bg-[linear-gradient(150deg,#FFF8E7_0%,#C7E9FF_50%,#E6E8FF_100%)] overflow-hidden'>
       <div className='pt-[4%]'>
        <h1 className='font-[gilroy] text-[65px] font-extrabold text-gray-900 w-[70%] uppercase ml-[2%] pt-[3%]'>Curated Travel Packages for Every Explorer🌍</h1>
        <p className='font-[gilroy] text-[30px] text-blue-950 font-medium ml-[2%] w-[60%]'>Discover thoughtfully crafted travel experiences — including stays, activities, and local adventures — tailored just for you.</p>
      </div>
      <div className='flex items-center justify-around w-[90%] h-[50%] ml-[5%]'>
        <div className='w-[22%] h-[95%] mt-[5%] bg-white rounded-[20px]'>
          <img className='h-[43.5vh] w-[80%] bg-center ml-[10%] mt-[5%] rounded-[10%]' src='/Packages/package1.jpeg'></img>
          <h1 className='text-gray-900 font-semibold text-[20px] ml-[4%]'>✈️ Weekend Getaways</h1>
          <p className='ml-[5%] text-[15px]'>₹2500 per person for 7 days!</p>
        </div>
        <div className='w-[22%] h-[95%] mt-[5%] bg-white rounded-[20px]'>
           <img className='h-[43.5vh] w-[80%] bg-center ml-[10%] mt-[5%] rounded-[10%]' src='/Packages/package3.jpeg'></img>
          <h1 className='text-gray-900 font-semibold text-[20px] ml-[4%]'>🏖️ Beach Escapes</h1>
          <p className='ml-[5%] text-[15px]'>₹5000 per person for 4 days!.</p>
        </div>
        <div className='w-[22%] h-[95%] mt-[5%] bg-white rounded-[20px]'>
           <img className='h-[43.5vh] w-[80%] bg-center ml-[10%] mt-[5%] rounded-[10%]' src='/Packages/package5.jpeg'></img>
          <h1 className='text-gray-900 font-semibold text-[20px] ml-[4%]'>🏕️ Adventure Trips</h1> 
          <p className='ml-[5%] text-[15px]'>₹3500/person for 3 days!</p>
        </div>
        <div className='w-[22%] h-[95%] mt-[5%] bg-white rounded-[20px]'>
           <img className='h-[43.5vh] w-[80%] bg-center ml-[10%] mt-[5%] rounded-[10%]' src='/Packages/package6.jpeg'></img>
          <h1 className='text-gray-900 font-semibold text-[20px] ml-[4%]'>🏔️ Hill Stations</h1>
          <p className='ml-[5%] text-[15px]'>₹8000 for 9 days!</p>
        </div>
      </div>
          <div className='absolute w-[17%] h-[12%] bg-stone-900 p-[2%] rounded-[50px] text-white text-center font-[gilroy] font-extrabold text-[22px] mt-[11.5%] ml-[-2%] '><h1 className='ml-[-15%] text-[26px]'>TRIPNEST<svg className='mt-[-19%] ml-[11vw]' xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="m354-334 356-94q15-4 22.5-18.5T736-476q-4-15-17.5-22.5T690-502l-98 26-160-150-56 14 96 168-96 24-50-38-38 10 66 114Zm446 174H160q-33 0-56.5-23.5T80-240v-160q33 0 56.5-23.5T160-480q0-33-23.5-56.5T80-560v-160q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160Zm0-80v-480H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102h640ZM480-480Z"/></svg></h1></div>
    </div>
    </>
  )
}

export default page4