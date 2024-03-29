import { useLayoutEffect, useRef } from "react";
import { FaLinkedin } from "react-icons/fa";
import gsap from "gsap";
import { IoLogoGithub } from "react-icons/io5";

const Footer = ({openLinkedIn,openGithub}) => {
const footerRef = useRef(null)

const handleEmailClick = ()=>{
  const emailAddress = "rachasanthosh2309@gmail.com"
  const subject="Subject here";
  const body = "Body Text here"

  const mailtolink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.location.href=mailtolink;
}

useLayoutEffect(()=>{
    gsap.fromTo(footerRef.current,
        { y: 0, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5, delay: 2 });
  
},[])
  return (
    <div name="contact" ref={footerRef} className="container mx-auto font-poppins  mt-6 px-4  items-center md:grid-cols-2 ">
      <div className="bg-[#ebece4] p-8 flex flex-col gap-12 rounded-xl">
        <div className="flex flex-col gap-3">
          <p className="text-4xl font-semibold">Want to work together?</p>
          <p className="text-sm">Feel free to reach out </p>
          <p className="text-sm">rachasanthosh2309@gmail.com</p>
        </div>
        <div className=" flex flex-col  items-center gap-4  md:px-0 md:flex md:flex-row md:items-center md:gap-6">
          <button onClick={handleEmailClick} className="flex items-center justify-center gap-2 w-[250px] hover:bg-black/80 rounded-full  bg-[#1D1D1D]   h-[50px] md:px-[6px] py-[1px] text-[15px] md:w-[175px] md:bg-black text-white">
            Contact me
          </button>
          <div className="gap-2 flex items-center justify-center">
            <div onClick={openLinkedIn} className="flex bg-white p-3 rounded-full md:p-4 md:bg-white hover:bg-[#026cfd] hover:cursor-pointer hover:text-white">
              <FaLinkedin className="text-md  " size={20} />
            </div>
            <div onClick={openGithub} className='flex bg-white p-3 rounded-full md:p-4 md:bg-white hover:bg-black hover:cursor-pointer hover:text-white'>
          <IoLogoGithub  className="text-md  " size={20} />
          </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Footer;
