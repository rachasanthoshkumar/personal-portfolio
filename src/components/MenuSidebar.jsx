import React from "react";
import { Link } from "react-scroll";
import { RxCross2 } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
const MenuSidebar = ({ toggleMenu }) => {
  const menuSlide = {
    initial: { x: "calc(100% + 100px)" },

    enter: { x: "0", transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },

    exit: {
      x: "calc(100% + 100px)",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
  };


  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className=" fixed cursor-pointer z-200 px-6 bg-white text-black w-screen rounded-md h-screen font-poppins "
      >
        <div className="flex justify-end mb-6">
          <RxCross2 onClick={toggleMenu} size={25} className="mr-6" />
        </div>
        <div className="  w-full h-screen flex flex-col items-center gap-6 text-lg ">
          <Link onClick={toggleMenu} to="home" smooth duration={500}>
            Home
          </Link>
          <Link onClick={toggleMenu} to="projects" smooth duration={500}>
            Projects
          </Link>
          <Link onClick={toggleMenu} to="contact" smooth duration={500}>
            Contact
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MenuSidebar;
