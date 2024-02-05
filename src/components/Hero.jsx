import React from 'react'
import imgSrc from '../images/img.png';
import { FaLinkedin } from "react-icons/fa";
const Hero = () => {
  return (
    <div className='mt-3 gap-4 px-4 flex flex-col w-full md:w-[1104px] md:h-[520px] md:flex md:flex-row  md:justify-between md:mt-2 md:gap-2'>
    
    <div className='flex flex-col py-4 px-4 gap-4  md:w-[704px]  md:py-[56px] md:px-[42px] justify-between rounded-3xl  bg-[#ebece4] md:h-[520px]   font-poppins '>
        <div className=' ' >
            <p className='text-xl md:text-4xl md:h-[141px] font-poppins font-semibold '>Hello, I'm Santhosh, passionate Web Developer</p>
        </div>
        <div className='flex flex-col gap-4  md:px-0 md:flex md:flex-row md:items-center md:gap-6'>
          <button className='hover:bg-black/80 rounded-full w-full bg-[#1D1D1D]   h-[50px] px-[6px] py-[1px] text-[14px] md:w-[175px] md:bg-black text-white'>Contact me</button>
          <div className='flex items-center justify-center'>

          <div className='flex  p-3 rounded-full md:p-4 md:bg-white hover:bg-[#026cfd] hover:cursor-pointer hover:text-white'>
          <FaLinkedin className="text-md  " size={20} />
          </div>
          
          </div>
        </div>
    </div>
    <div className=' h-[300px] rounded-3xl md:w-[354px] md:h-full'>
      <img src={imgSrc} alt="" className='rounded-3xl w-full h-full object-cover'/>
    </div>
    </div>
      
  )
}

export default Hero