 "use client"
 import Footer from '@/Components/Footer'
 import { useState } from 'react';
 import { useForm, SubmitHandler } from "react-hook-form"
 import axios from 'axios';
 import Link from 'next/link';
 import { useRouter } from 'next/navigation';

 function App() {

   let router = useRouter();
   const {
     register,
     handleSubmit,
     reset,
     formState: { errors },
   } = useForm();

   let submit = () => {
    try {
      alert("Listing under review!");
      reset();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
   }
   return (
    <>
    <div className='h-[110vh] border-[#f8eded] border-[10px] bg-stone-900 overflow-hidden'>
      <div className='absolute w-[17%] h-[12%] bg-[#f8eded] p-[2%] rounded-[50px] text-black text-center font-[gilroy] font-extrabold text-[22px] mt-[-1%] ml-[-2%] '><h1 className='mt-[1%] ml-[-15%]'>TRIPNEST<svg className='mt-[-18%] ml-[10.5vw]' xmlns="http:www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="40px" fill="#000000ff"><path d="m354-334 356-94q15-4 22.5-18.5T736-476q-4-15-17.5-22.5T690-502l-98 26-160-150-56 14 96 168-96 24-50-38-38 10 66 114Zm446 174H160q-33 0-56.5-23.5T80-240v-160q33 0 56.5-23.5T160-480q0-33-23.5-56.5T80-560v-160q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160Zm0-80v-480H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102h640ZM480-480Z"/></svg></h1></div>
      <div className='absolute w-[10vw] h-[20vh] rounded-[50%] ml-[60%] mt-[1%] bg-stone-900'></div>
           <form onSubmit={handleSubmit(submit)} className='border-[1px] border-black rounded-[20px] p-[15px] w-[35%] min-h-[70vh] ml-[32.5%] mt-[6%] bg-[#f8eded]'>
             <div className='mt-[10%] ml-[8%]'>
               <label className='font-semibold text-[18px]'>Title:</label>
               <input type='text' name='name' {...register('title',{required:true})} 
               className='border-[1px] border-black p-[5px] ml-[2%] rounded-[10px] w-[64%] font-[gilroy]' placeholder='Enter your title:'></input>
               {errors.title && <p className='text-red-700'>title is required.</p>}
             </div>
             <div className='mt-[5%] ml-[5%]'>
               <label className='font-semibold text-[18px]'>Destination:</label>
               <textarea type='text' name='destination' {...register('destination',{required:true})} className='border-[1px] border-black p-[10px] rounded-[10px] ml-[2%] w-[70%] font-[gilroy]' placeholder='Enter your destination'></textarea>
               {errors.destination && <p className='text-red-700'>destination is required</p>}
             </div>
              <div className='mt-[5%] ml-[8%]'>
               <label className='font-semibold text-[18px]'>image:</label>
               <input type='file'{...register('image1',{required:true})} name='image1' className='border-[1px] border-black p-[15px] ml-[2%] rounded-[10px] w-[64%] font-[gilroy]' imageholder='upload image1:'
               ></input>
               {errors.password && <p className='text-red-700'>image is required</p>}
             </div>
             <div className='mt-[5%] ml-[8%]'>
               <label className='font-semibold text-[18px]'>Price:</label>
               <input type='number'{...register('price',{required:true})} name='price' className='border-[1px] border-black p-[5px] ml-[2%] rounded-[10px] w-[64%] font-[gilroy]' placeholder='Enter price:'
               ></input>
               {errors.password && <p className='text-red-700'>password is required</p>}
             </div><br></br>
              <div className='mt-[5%] ml-[8%]'>
               <label className='font-semibold text-[18px]'>Place:</label>
               <input type='text'{...register('place',{required:true})} name='place' className='border-[1px] border-black p-[5px] ml-[2%] rounded-[10px] w-[64%] font-[gilroy]' placeholder='Enter place:'
               ></input>
               {errors.password && <p className='text-red-700'>Place is required</p>}
             </div>
             <div className='mt-[6%]'>
               <button type='submit' className='rounded-[20px] p-[5px] text-[12px] text-white bg-stone-900 font-semibold cursor-pointer ml-[35%] w-[30%]'>List Now!</button>
             </div>
           </form>
          
         </div>
     <Footer/>
    </>
   )
 }

 export default App