
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"


function App() {
 
  return (
    
    <div className="mt-2 py-4 px-2 w-full  md:py-2 mx-auto md:max-w-[1200px] h-full md:mx-[160px] md:px-[48px]">
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
