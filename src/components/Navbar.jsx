import {  useRef, useLayoutEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuSidebar from "./MenuSidebar";

import gsap from "gsap";
import {Link} from 'react-scroll'
const Navbar = ({isMenuClicked,toggleMenu}) => {
 
  const navbarRef = useRef(null);
  useLayoutEffect(() => {
    console.log("rendering");
    gsap.fromTo(
      navbarRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0 }
    );
  }, []);
  return (
    <div ref={navbarRef} className="relative w-full container mx-auto cursor-pointer  z-10">
      <div className=" flex px-4 items-center justify-between md:py-[5px] h-[30px] font-poppins md:px-5">
        <div className="flex items-center gap-1">
          <div className="bg-[#ecbf53] rounded-full w-[16px] h-[16px]"></div>
          <div className="text-[16px] font-semibold">SANTHOSH</div>
        </div>
        <div className="hidden md:flex md:gap-10">
          <Link to="home" smooth duration={1000} className="hover:text-black cursor-pointer text-[14px] font-semibold">Home</Link>
          <Link to="projects" smooth duration={1000}
           className="hover:text-black cursor-pointer text-[14px] font-semibold text-[#727272]">Projects</Link>
          <Link to="contact" smooth duration={1000} 
          className="hover:text-black cursor-pointer text-[14px] font-semibold text-[#727272]">Contact</Link>
        </div>
        <div className="flex text-2xl text-black md:hidden">
          {isMenuClicked ?"" : (
            <AiOutlineMenu onClick={toggleMenu} />
          )}
        </div>
      </div>
      <div className="absolute top-0  bg-white z-100 w-fit h-screen">{isMenuClicked && <MenuSidebar  toggleMenu={toggleMenu} />}</div>
    </div>
  );
};

export default Navbar;
