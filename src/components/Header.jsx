import React from 'react';
import Hero from './Hero';
import Ai_tools from './Ai_tools';

const Header = () => {
  return (
    <>
    <div className='fixed top-0 flex justify-between w-full items-center h-20 px-4 z-10 text-white'>
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
    </>
  )
}

export default Header
