import React from 'react'
import { FiMenu } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-[1104px] py-[5px] h-[30px] font-poppins px-5'>
        <div className='flex items-center gap-1'>
            <div className='bg-[#ecbf53] rounded-full w-[16px] h-[16px]'>
                
            </div>
            <div className='text-[16px] font-semibold'>
                SANTHOSH
            </div>

        </div>
        <div className='hidden md:flex md:gap-10'>
            <p className='text-[14px] font-semibold'>Home</p>
            <p className='text-[14px] font-semibold text-[#727272]'>Projects</p>
            <p className='text-[14px] font-semibold text-[#727272]'>Contact</p>
        </div>
        <div className=' md:hidden text-black'>
        <FiMenu  />
        </div>
    </div>
  )
}

export default Navbar