import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
//import back from '../assets/ai1.jpg';

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <img className='w-full h-full' src="/assets/images/ai1.jpg" alt="" />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center '>
        <h1 className='text-white text-4xl'>
            ALL AI TOOLS</h1>
            <form className='mt-[2rem] flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-transparent ' >
               <div>
                <input className='bg-transparent focus:outline-none w-[300px]' type="text" placeholder="search Anything" />
               </div>
               <div>
                <button className='items-center'><AiOutlineSearch size={20} className="icon"/></button>
               </div>
            </form>
        <p className='text-center text-white ml-[23rem] mr-[23rem] mt-[1rem] text-xl'>Artificial intelligence is the simulation of human intelligence processes by machines.</p>
      </div>
    </div>
   
  )
}

export default Hero
