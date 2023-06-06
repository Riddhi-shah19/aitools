import React from 'react';
import Hero from './Hero';
import Ai_tools from './Ai_tools';
import AI_API from './AI_API';

const Header = () => {
  return (
    <>
    <div className='fixed top-0 flex justify-between w-full items-center h-20 px-4 z-10 text-white bg-slate-900'>
        <div>
            <img className='h-16' src="/assets/images/logo.jpg" alt=""/>
        </div> 
        
        <ul className='flex'>
            <li >AI TOOLS</li>
            <li>AI API</li>
        </ul>
    </div>
    <Hero/>
    <Ai_tools/>
    <AI_API/> 
    </>
  )
}

export default Header
