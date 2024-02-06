import React from 'react'
import dice from '../images/rd.png'
import voice from '../images/vcc.png'
const Projects = () => {

    const openDiceGame = () =>{
        window.open('https://dice-game-1-phi.vercel.app/','_blank')
    }
    const openVoiceApp = () =>{
        window.open('https://speech-recognition-todo.vercel.app/','_blank')
    }
  return (
    <div className='cursor-pointer mt-6 px-4 grid gap-10 grid-cols-1  items-center md:grid-cols-2 md:max-w-[1104px]'>
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