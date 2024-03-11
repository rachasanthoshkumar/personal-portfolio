import { useRef, useEffect } from "react";
import imgSrc from "../images/awesome.jpg";
import prisma from "../images/prisma.png";
import tailwindcss from "../images/tailwindcss.png";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import gsap from "gsap";
import { FaArrowDownLong } from "react-icons/fa6";

const Hero = () => {
  const openResume = ({openLinkedIn,openGithub}) => {
    window.open(
      "https://drive.google.com/file/d/1_RDHvf2ymloPbUhuJdX1qCy2bAhSBWU0/view?usp=sharing",
      "_blank"
    );
  };
  const heroImageRef = useRef(null);
  const heroDescRef = useRef(null);
  useEffect(() => {
    console.log("rendering");

    // Animation for heroImageRef
    gsap.fromTo(
      heroImageRef.current,
      { y: 0, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, delay: 0.5 }
    );

    // Animation for heroDescRef

    if (window.innerWidth <= 480) {
      gsap.fromTo(
        heroDescRef.current,
        { y: 0, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, delay: 1 }
      );
    } else {
      gsap.fromTo(
        heroDescRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, delay: 1 }
      );
    }
  }, []);

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/santhosh-racha/");
  };
  const openGithub = () => {
    window.open("https://github.com/rachasanthoshkumar");
  };

  return (
    <div className="container mx-auto mt-7 md:mt-3 gap-4 px-4 flex flex-col w-full  md:h-[520px] md:flex md:flex-row  md:justify-between md:mt-2 md:gap-4">
      {/*Left section */}
      <div
        ref={heroDescRef}
        className="flex flex-col py-4 px-4 gap-4  md:w-[704px]  md:py-[76px] md:px-[42px] justify-between rounded-3xl  bg-[#ebece4] md:h-[520px]   font-poppins "
      >
        <div className="mb-3 mt-3 md:mt-0 md:mb-0 ">
          <p className="text-xl md:text-4xl md:h-[141px] font-poppins font-semibold ">
            Hello, I'm Santhosh, passionate Web Developer
          </p>
          <p className="text-md text-gray-700">
          Recent graduate with expertise in full stack development,  eager to contribute my skills in creating impactful and efficient digital solutions for future projects. 
          </p>
        </div>
        {/*Tech skills */}
        <div className="mt-3 mb-3 px-5 md:px-0 flex justify-between md:justify-normal  md:gap-4 items-center ">
          <p className="hidden md:mr-4 md:block text-xl font-semibold">
            Tech Stack :
          </p>
          <div className="flex gap-2 items-center">

          <div className="transition ease-in-out delay-150 duration-300 hover:translate-y-[-1rem] ">
            <img src="https://skillicons.dev/icons?i=js,ts" alt="" />
          </div>
          <div className="transition ease-in-out delay-150 duration-300 hover:translate-y-[-1rem] ">
            <img className="" src="https://skillicons.dev/icons?i=react,next" alt="" />
          </div>
          
          <div className="transition ease-in-out delay-150 duration-300 hover:translate-y-[-1rem] ">
            <img className="w-12 h-12" src={prisma} alt="" />
          </div>
          <div className="transition ease-in-out delay-150 duration-300 hover:translate-y-[-1rem] ">
            <img className="object-fit             w-8 h-8" src={tailwindcss} alt="" />
          </div>
        </div>
          </div>
        <div className=" flex flex-col  items-center gap-4  md:px-0 md:flex md:flex-row md:items-center md:gap-6">
          <div className="group flex gap-2" >

          <button
            onClick={openResume}
            className="flex items-center justify-center gap-2 w-[250px] group-hover:bg-black/80 rounded-full  bg-[#1D1D1D]   h-[50px] md:px-[6px] py-[1px] text-[15px] md:w-[175px] md:bg-black text-white"
            >
            Resume{" "}
            <div className="group-hover:rotate-180 transform-transition ease-in-out delay-0.5 duration-500">
              <FaArrowDownLong />
            </div>
          </button>
            </div>
          <div className="gap-2 flex items-center justify-center">
            <div
              onClick={openLinkedIn}
              className="flex bg-white p-3 rounded-full md:p-4 md:bg-white hover:bg-[#026cfd] hover:cursor-pointer hover:text-white"
            >
              <FaLinkedin className="text-md  " size={20} />
            </div>
            <div
              onClick={openGithub}
              className="flex bg-white p-3 rounded-full md:p-4 md:bg-white hover:bg-black hover:cursor-pointer hover:text-white"
            >
              <IoLogoGithub className="text-md  " size={20} />
            </div>
          </div>
        </div>
      </div>
      {/* Right section */}
      <div
        ref={heroImageRef}
        className="order-first md:order-last h-[300px] rounded-3xl md:w-[354px] md:h-full"
      >
        <img
          src={"https://static.vecteezy.com/system/resources/previews/034/339/905/non_2x/3d-kid-character-waving-hand-with-cute-happy-face-free-png.png"}
          alt=""
          className=" rounded-3xl object-contain w-full h-full sm:object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
