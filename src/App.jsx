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
    
    <div className="container max-w-screen-lg mt-2 py-4 px-2   md:py-2 mx-auto  h-full ">
      <div>

      <Navbar isMenuClicked={isMenuClicked} setIsMenuClicked={setIsMenuClicked} toggleMenu={toggleMenu}/>
      <Hero/>
      <Projects />
      <Footer/>
      </div>
    </div>
  )
}

export default App
