import {React} from 'react';
import Hero from './Hero';
<<<<<<< HEAD
import { handleScroll,handleScroll2 } from './Hero';
=======
import {useRef} from 'react';


>>>>>>> 881bd00452c5a93cb5d273d00f302fc827a919ed

const Header = () => {

  return (
    <>
    <div className='fixed top-0 flex justify-between w-full items-center h-20 px-4 z-10 text-white bg-slate-900'>
        <div>
            <img className='h-16' src="/assets/images/logo.jpg" alt=""/>
        </div> 
        
        <ul className='flex'>
<<<<<<< HEAD
           <li>
           <button onClick={handleScroll} className='cursor-pointer'>AI TOOLS</button>
           </li>
            <li>
              <button onClick={handleScroll2} className='cursor-pointer'>AI API</button>
            </li>
        </ul>
    </div>
    <Hero />
=======
           <li className='cursor-pointer'  onClick={handleClick}>AI TOOLS</li>
            <li className='cursor-pointer' onClick={handleClick}>AI API</li>
        </ul>
    </div>
    <Hero/>
    
>>>>>>> 881bd00452c5a93cb5d273d00f302fc827a919ed
    </>
  )
}

export default Header
