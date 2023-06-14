import {React} from 'react';
import Hero from './Hero';

import { handleScroll,handleScroll2 } from './Hero';






const Header = () => {
 
  

  return (
    <>
    <div className='fixed top-0 flex justify-between w-[100%]  items-center h-20 px-4 z-10 text-white bg-slate-900'>
        <div>
            <img className='h-16' src="/assets/images/logo.jpg" alt=""/>
        </div> 
        
        <ul className='flex'>

           <li className='px-4'>
           <button onClick={handleScroll} className='cursor-pointer'>AI TOOLS</button>
           </li>
            <li className='px-4'>
              <button onClick={handleScroll2} className='cursor-pointer'>AI API</button>
            </li>
        </ul>
    </div>
    <Hero />

        
   
    

    </>
  )
}

export default Header
