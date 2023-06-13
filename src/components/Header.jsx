import React from 'react';
import Hero from './Hero';
import {useRef} from 'react';



const Header = () => {
  const AitoolsRef = useRef(null);
  const AiapiRef = useRef(null);

  function handleScrollToAitools() {
    AitoolsRef.current.scrollIntoView({
      behavior: 'smooth'
    });
  }
  function handleScrollToAiapi() {
    AiapiRef.current.scrollIntoView({
      behavior: 'smooth'
    });
  }
  
  return (
    <>
    <div className='fixed top-0 flex justify-between w-full items-center h-20 px-4 z-10 text-white bg-slate-900'>
        <div>
            <img className='h-16' src="/assets/images/logo.jpg" alt=""/>
        </div> 
        
        <ul className='flex'>
           <li className='cursor-pointer'  onClick={handleScrollToAitools}>AI TOOLS</li>
            <li className='cursor-pointer' onClick={handleScrollToAiapi}>AI API</li>
        </ul>
    </div>
    <Hero/>
   
    
    </>
  )
}

export default Header
