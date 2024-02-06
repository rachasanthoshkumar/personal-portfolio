import {useEffect,useRef} from 'react'
import dice from '../images/rd.png'
import voice from '../images/vcc.png'
import gsap from 'gsap'
const Projects = () => {
    const projectRef = useRef(null)
    
    useEffect(() => {
      console.log("rendering");
  
      // Animation for heroImageRef
      gsap.fromTo(projectRef.current,  
        { y: 0, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5, delay: 1.5 });
  
      // Animation for heroDescRef
         }, []);







    const openDiceGame = () =>{
        window.open('https://dice-game-1-phi.vercel.app/','_blank')
    }
    const openVoiceApp = () =>{
        window.open('https://speech-recognition-todo.vercel.app/','_blank')
    }
  return (
    <div ref={projectRef} className='cursor-pointer mt-6 px-4 grid gap-10 grid-cols-1  items-center md:grid-cols-2 md:max-w-[1104px]'>
        <div className='z-100 overflow-hidden md:h-[511px] rounded-xl ' onClick={openDiceGame}>
            
            <img src={dice} alt="" className='hover:scale-110 delay-150 duration-300 w-full h-full '/>
        </div>
        <div className='overflow-hidden md:h-[511px] rounded-xl ' onClick={openVoiceApp}>
            <img src={voice} alt=""  className='hover:scale-110 delay-150 duration-300  w-full h-full object-cover  md:object-cover'/>
        </div>

    </div>
  )
}

export default Projects