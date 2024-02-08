import { useState, useRef, useLayoutEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuSidebar from "./MenuSidebar";
import { RxCross2 } from "react-icons/rx";
import gsap from "gsap";

const Navbar = () => {
  

  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const toggleMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

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
    <div ref={navbarRef} className="relative z-10">
      <div className=" flex px-4 items-center justify-between md:w-[1104px] md:py-[5px] h-[30px] font-poppins md:px-5">
        <div className="flex items-center gap-1">
          <div className="bg-[#ecbf53] rounded-full w-[16px] h-[16px]"></div>
          <div className="text-[16px] font-semibold">SANTHOSH</div>
        </div>
        <div className="hidden md:flex md:gap-10">
          <p className="hover:text-black cursor-pointer text-[14px] font-semibold">Home</p>
          <p 
           className="hover:text-black cursor-pointer text-[14px] font-semibold text-[#727272]">Projects</p>
          <p 
          className="hover:text-black cursor-pointer text-[14px] font-semibold text-[#727272]">Contact</p>
        </div>
        <div className="flex text-2xl text-black md:hidden">
          {isMenuClicked ? (
            <RxCross2 onClick={toggleMenu} size={25} />
          ) : (
            <AiOutlineMenu onClick={toggleMenu} />
          )}
        </div>
      </div>
      <div className="absolute">{isMenuClicked && <MenuSidebar />}</div>
    </div>
  );
};

export default Navbar;
