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
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/santhosh-racha/");
  };
  const openGithub = () => {
    window.open("https://github.com/rachasanthoshkumar");
  };
  return (
    
    <div className="container max-w-screen-lg mt-2 py-4 px-2   md:py-2 mx-auto  h-full ">
      <div>

      <Navbar isMenuClicked={isMenuClicked} setIsMenuClicked={setIsMenuClicked} toggleMenu={toggleMenu}/>
      <Hero openLinkedIn={openLinkedIn} openGithub={openGithub}/>
      <Projects />
      <Footer openLinkedIn={openLinkedIn} openGithub={openGithub}/>
      </div>
    </div>
  )
}

export default App
