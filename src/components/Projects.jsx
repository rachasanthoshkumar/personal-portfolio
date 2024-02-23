import { useEffect, useRef } from "react";
import dice from "../images/another1.png";
import voice from "../images/todo.jpg";
import payments from "../images/pay.png";
import gsap from "gsap";
const Projects = () => {
  const pref = useRef(null);

  useEffect(() => {
    console.log("rendering");

    // Animation for heroImageRef
    gsap.fromTo(
      pref.current,
      { y: 0, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, delay: 1.5 }
    );

    // Animation for heroDescRef
  }, []);

  const openDiceGame = () => {
    window.open("https://dice-game-1-phi.vercel.app/", "_blank");
  };
  const openVoiceApp = () => {
    window.open("https://speech-recognition-todo.vercel.app/", "_blank");
  }; 
  const openPaymentsApp = () => {
    window.open("https://github.com/rachasanthoshkumar/paytm-clone/", "_blank");
  };
  return (
    <div
      name="projects"
      ref={pref}
      className="overflow:hidden group container mx-auto cursor-pointer mt-4 px-4 grid gap-4 grid-cols-1  items-center md:grid-cols-2 font-poppins"
    >
      <div
        className="bg-[#313443] relative h-[260px] overflow-hidden md:h-[450px] rounded-xl "
        onClick={openPaymentsApp}
      ><div className="group hover:scale-105 transform transition-transform duration-300 ease-in-out">

        <p className="absolute top-12 left-6 z-20 text-2xl text-white font-semibold">
          Payments App
        </p>
        <p className="hidden sm:block absolute top-20 left-6 z-20 text-sm text-white">
          Let's users send money
        </p>
        <div className="flex items-center justify-center"> 

        <img src={payments} alt="" className="mt-4 w-64 h-64 sm:h-full sm:w-full" />
        </div>
      </div>
      </div>

      <div
        className="bg-[#6a5ce5] relative h-[260px]  overflow-hidden md:h-[450px] rounded-xl "
        onClick={openDiceGame}
      >
        <div className="  group hover:scale-105 transform transition-transform duration-300 ease-in-out">

        <p className="absolute text-white top-12 left-6 z-20 text-2xl sm:text-white font-semibold">
          Roll Dice
        </p>
        <p className="hidden sm:block  absolute top-20 left-6 z-20 text-sm text-white">
          Gaming App
        </p>
        <div className="flex items-center justify-center ">

        <img
          src={dice}
          alt=""
          className="w-72 h-72 sm:block sm:w-full sm:h-full object-cover "
          />
          </div>
          </div>
      </div>
      <div
        className=" relative h-[260px] overflow-hidden md:h-[450px]  rounded-xl "
        onClick={openVoiceApp}
      >
        <div className="w-full h-full group hover:scale-105 transform transition-transform duration-300 ease-in-out">

        <p className="absolute top-12 left-6 z-20 text-2xl text-black font-semibold">
          Productivity App
        </p>
        <p className="hidden sm:block absolute top-20 left-6 z-20 text-sm text-black">
          Voice Recognition To-Do App{" "}
        </p>
        <img
          src={voice}
          alt=""
          className=" w-full h-full object-cover  "
          />
          </div>
      </div>
    </div>
  );
};

export default Projects;
