import React from 'react'

const Footer = () => {
  return (
    <>
     <div className='min-h-[40vh] pt-[6%] bg-white overflow-hidden p-[5%]'>
      <h3 className='font-[gilroy] text-[35px] font-extrabold text-gray-900 w-[40%] ml-[2%]'>Inspiration for Future gateways</h3>
      <hr></hr>
      <div className='flex items-center justify-between mt-[1%]'>
        <div className='w-[17%] h-[12%] p-[2%] text-black border-[1px] border-black text-center font-[gilroy] font-extrabold text-[35px] ml-[-1%] '><h1 className='mt-[1%] ml-[-15%]'>TRIPNEST<svg className='mt-[-25%] ml-[11.5vw]' xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="40px" fill="#000000ff"><path d="m354-334 356-94q15-4 22.5-18.5T736-476q-4-15-17.5-22.5T690-502l-98 26-160-150-56 14 96 168-96 24-50-38-38 10 66 114Zm446 174H160q-33 0-56.5-23.5T80-240v-160q33 0 56.5-23.5T160-480q0-33-23.5-56.5T80-560v-160q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160Zm0-80v-480H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102h640ZM480-480Z"/></svg></h1></div>

        <div className='text-black font-[15px] font-medium cursor-pointer'>
          <p className='mt-[6%] hover:underline'>TRIPNEST YOUR HOME</p>
          <p className='mt-[6%] hover:underline'>ABOUT TRIPNEST</p>
          <p className='mt-[6%] hover:underline'>TRIPNEST YOUR REVIEWS</p>
          <p className='mt-[6%] hover:underline'>TRIPNEST YOUR PACKAGES</p>
          <p className='mt-[6%] hover:underline'>TRIPNEST YOUR EXPERIENCES</p>
          <p className='mt-[6%] hover:underline'>TRIPNEST COMMUNITY</p>
          <p className='mt-[6%] hover:underline'>CONTACT US</p>
        </div>
        <div className='text-black font-[15px] font-medium cursor-pointer hover:text-underline'>
          <h4>TRIPNEST</h4>
          <p className='mt-[6%] hover:underline'>Tripnest.careers</p>
          <p className='mt-[6%] hover:underline'>Tripnest.explore</p>
          <p className='mt-[6%] hover:underline'>Tripnest.offers</p>
          <p className='mt-[6%] hover:underline'>FAQ's/Support</p>
          <p className='mt-[6%] hover:underline'>Terms & Conditions</p>
        </div>
      </div>
      <hr className='text-black mt-[2%]'></hr>
      <div className='flex items-center justify-between text-black font-[15px] font-medium cursor-pointer w-[40%] mt-[1%]'>
        <p>©️2025 TRIPNEST Inc.</p>
        <p>Privacy •</p>
        <p>Terms •</p>
        <p>Settings •</p>
        <p>Company Details</p>
      </div>
      <p className='text-[15px] font-[gilroy] text-muted mt-[2%]'>By using TripNest, you agree to our Terms & Conditions and Privacy Policy. All listings, bookings, and user data are handled securely in accordance with our safety and transparency standards. TripNest ensures a trusted platform for travelers and hosts worldwide.</p>
      <p className='text-[15px] font-[gilroy] text-muted mt-[1%]'>TripNest operates under strict privacy and safety policies to protect both travelers and hosts. By accessing our services, you agree to our Terms & Conditions and acknowledge our Privacy Policy.</p>
      <p className='text-[15px] font-[gilroy] text-black'>Use of this website constitutes acceptance of TripNest’s Terms & Conditions and Privacy Policy. © 2025 TripNest. All rights reserved.</p>
     </div>
    </>
  )
}

export default Footer