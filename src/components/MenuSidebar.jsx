import React from 'react'
import {Link} from 'react-scroll'
const MenuSidebar = ({toggleMenu}) => {
  return (
    <div className='cursor-pointer z-20 px-6 bg-white text-black w-screen rounded-md h-screen font-poppins py-10'>
        
        <div className='flex flex-col items-center gap-4 text-md '>
            <Link onClick={toggleMenu} to='home' smooth duration={500}>Home</Link>
            <Link onClick={toggleMenu} to='projects' smooth duration={500}>Projects</Link>
        </div>
    </div>
  )
}

export default MenuSidebar