import { useState } from "react"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

function App() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const toggleMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };
 
  return (
    
    <div className="mt-2 py-4 px-2 w-full  md:py-2 mx-auto md:max-w-[1200px] h-full md:mx-[160px] md:px-[48px]">
      <Navbar isMenuClicked={isMenuClicked} setIsMenuClicked={setIsMenuClicked} toggleMenu={toggleMenu}/>
      <Hero/>
      <Projects />
      <Footer/>
    </div>
  )
}

export default App
