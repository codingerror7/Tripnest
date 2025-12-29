"use client"
import Footer from '@/Components/Footer'
import { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';

function App() {

  let router = useRouter();
  const [show,setShow] = useState(false);


  const onSubmit = async (data)=>{
    // console.log(data.username);
    // console.log(data.email);
    // console.log(data.password);
    try {
      let res = await axios.post("https://tripnest-travel-app.onrender.com/api/auth/login",data);
      localStorage.setItem("token",res.data.token);
      alert("login successfull");
      router.push("/");
      console.log(res.data)
    } catch (error) {
      console.log(error.response.data);
    }
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
   <>
   <div className='min-h-[100vh] border-[#f8eded] border-[10px] bg-stone-900 overflow-hidden'>
     <div className='absolute w-[17%] h-[12%] bg-[#f8eded] p-[2%] rounded-[50px] text-black text-center font-[gilroy] font-extrabold text-[22px] mt-[-1%] ml-[-2%] '><h1 className='mt-[1%] ml-[-15%]'>TRIPNEST<svg className='mt-[-18%] ml-[10.5vw]' xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="40px" fill="#000000ff"><path d="m354-334 356-94q15-4 22.5-18.5T736-476q-4-15-17.5-22.5T690-502l-98 26-160-150-56 14 96 168-96 24-50-38-38 10 66 114Zm446 174H160q-33 0-56.5-23.5T80-240v-160q33 0 56.5-23.5T160-480q0-33-23.5-56.5T80-560v-160q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160Zm0-80v-480H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102h640ZM480-480Z"/></svg></h1></div>
     <div className='absolute w-[10vw] h-[20vh] rounded-[50%] ml-[60%] mt-[4%] bg-stone-900'></div>
          <form onSubmit={handleSubmit(onSubmit)} className='border-[1px] border-black rounded-[20px] p-[20px] w-[35%] min-h-[30vh] ml-[32.5%] mt-[10%] bg-[#f8eded]'>
            <div className='mt-[7%] ml-[15%]'>
              <label className='font-semibold text-[18px]'>Email:</label>
              <input type='email' {...register('email',{required:true})} className='border-[1px] border-black p-[5px] ml-[2%] rounded-[10px] w-[70%] font-[gilroy]' placeholder='Enter your email:'></input>
              {errors.email && <p className='text-red-700'>email is required</p>}
            </div>
            <div className='mt-[7%] ml-[8%]'>
              <label className='font-semibold text-[18px]'>Password:</label>
              <input type={show?"text":"password"} {...register('password',{required:true})} className='border-[1px] border-black p-[5px] ml-[2%] rounded-[10px] w-[64%] font-[gilroy]' placeholder='Enter password:'
              ></input>
              {!show && <IoMdEye className = "absolute ml-[23.5%] mt-[-1.6%] text-[18px] cursor-pointer" onClick={()=>setShow(prev=>!prev)}/>}
              {show && <IoIosEyeOff className = "absolute ml-[23.5%] mt-[-1.6%] text-[18px] cursor-pointer" onClick={()=>setShow(prev=>!prev)}/>}
              {errors.password && <p className='text-red-700'>password is required</p>}
            </div>
            <div className='mt-[7%]'>
              <button className='rounded-[20px] p-[5px] text-[12px] text-white bg-stone-900 font-semibold cursor-pointer ml-[35%] w-[30%]'>LOGIN</button>
            </div>
            <p className='text-[14px] text-black font-medium font-[gilroy] ml-[8%] mt-[4%]'>Back to<Link href='./Signup' className='p-[5px] text-[15px] text-black font-semibold cursor-pointer w-[30%] underline'>Signup?</Link></p>
          </form>
          
        </div>
    <Footer/>
   </>
  )
}

export default App