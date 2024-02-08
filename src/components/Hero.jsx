import {useRef, useEffect} from 'react'
import imgSrc from '../images/img.png';
import { FaLinkedin } from "react-icons/fa";
import gsap from 'gsap';
import { FaArrowDownLong } from "react-icons/fa6";

const Hero = () => {
  const openResume = ()=>{
    window.open('https://drive.google.com/file/d/1LN95ZwcLY6ZQaEwR6ztInSckR_JdxFPY/view?usp=sharing','_blank')
  }
  const heroImageRef = useRef(null)
  const heroDescRef = useRef(null)
  useEffect(() => {
    console.log("rendering");

    // Animation for heroImageRef
    gsap.fromTo(heroImageRef.current,  
      { y: 0, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, delay: 0.5 });

    // Animation for heroDescRef
    

      if(window.innerWidth<=480){
        gsap.fromTo(
          heroDescRef.current,
          { y: 0, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, delay: 1 }
        );
      }
      else{
        gsap.fromTo(heroDescRef.current,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, delay: 1 } );
      }
  }, []);

  return (
    <div className='mt-7 md:mt-3 gap-4 px-4 flex flex-col w-full md:w-[1104px] md:h-[520px] md:flex md:flex-row  md:justify-between md:mt-2 md:gap-2'>
    {/*Left section */}
    <div ref={heroDescRef} className='flex flex-col py-4 px-4 gap-4  md:w-[704px]  md:py-[56px] md:px-[42px] justify-between rounded-3xl  bg-[#ebece4] md:h-[520px]   font-poppins '>
        <div className='mb-3 mt-3 md:mt-0 md:mb-0 ' >
            <p className='text-xl md:text-4xl md:h-[141px] font-poppins font-semibold '>Hello, I'm Santhosh, passionate Web Developer</p>
        </div>
        {/*Tech skills */}
        <div className='mt-3 mb-3 px-5 md:px-0 flex justify-between md:justify-normal  md:gap-4 items-center '>
            <p className='hidden md:mr-4 md:block text-xl font-semibold'>Tech Stack :</p>
            <div className='transition ease-in-out delay-150 duration-300 hover:translate-y-[-1rem] '>
              <img src="https://skillicons.dev/icons?i=html,css" alt="" />
            </div>
            <div  className='transition ease-in-out delay-150 duration-300 hover:translate-y-[-1rem] '>
              <img src="https://skillicons.dev/icons?i=js,ts" alt="" />
            </div>
            <div className='transition ease-in-out delay-150 duration-300 hover:translate-y-[-1rem] '>
              <img src="https://skillicons.dev/icons?i=react,next" alt="" />
            </div>
        </div>
        <div className='group flex flex-col  items-center gap-4  md:px-0 md:flex md:flex-row md:items-center md:gap-6'>
          <button onClick={openResume} className='flex items-center justify-center gap-2 w-[250px] group-hover:bg-black/80 rounded-full  bg-[#1D1D1D]   h-[50px] md:px-[6px] py-[1px] text-[15px] md:w-[175px] md:bg-black text-white'>Resume <span className='group-hover:rotate-180 transform-transition ease-in-out delay-0.5 duration-500'><FaArrowDownLong /></span></button>
          <div className='flex items-center justify-center'>

          <div className='flex bg-white p-3 rounded-full md:p-4 md:bg-white hover:bg-[#026cfd] hover:cursor-pointer hover:text-white'>
          <FaLinkedin className="text-md  " size={20} />
          </div>
          
          </div>
        </div>
    </div>
    {/* Right section */}
    <div ref={heroImageRef} className='order-first md:order-last h-[300px] rounded-3xl md:w-[354px] md:h-full'>
      <img src={imgSrc} alt="" className='rounded-3xl w-full h-full object-cover'/>
    </div>
    </div>
      
  )
}

export default Hero