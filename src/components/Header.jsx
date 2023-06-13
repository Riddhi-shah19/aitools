import React from 'react';
import Hero from './Hero';
import {useRef} from 'react';



const Header = () => {

  const Ai_tools = useRef(null);
  const AI_API = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };



  return (
    <>
    <div className='fixed top-0 flex justify-between w-full items-center h-20 px-4 z-10 text-white bg-slate-900'>
        <div>
            <img className='h-16' src="/assets/images/logo.jpg" alt=""/>
        </div> 
        
        <ul className='flex'>
           <li className='cursor-pointer'  onClick={handleClick}>AI TOOLS</li>
            <li className='cursor-pointer' onClick={handleClick}>AI API</li>
        </ul>
    </div>
    <Hero/>
    
    </>
  )
}

export default Header
