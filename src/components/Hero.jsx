import React,{useState} from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { listings } from './Icons';
import Ai_tools from './Ai_tools';
import { apis } from './Api';
import AI_API from './AI_API';

const Hero = () => {
  const [search,setSearch]=useState('')

  // console.log(listings.filter(text=>text.description.toLowerCase().includes("CHAT")))
  const searchHandler = (data) =>{
    return data.filter((item)=>item.description.toLowerCase().includes(search)),
    data.filter((item)=>item.title.toLowerCase().includes(search));
  }
  

  return (
    <>
    <div className='w-full h-screen relative bg-gradient-to-tr from-black to-gray-700'>
      <img className='w-full h-full mix-blend-overlay' src="/assets/images/ai1.jpg" alt="background" />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center'>
        <h1 className='text-white text-4xl'>ALL AI TOOLS</h1>
            <form
             onChange={(e)=>setSearch(e.target.value)}
             className='mt-[2rem] flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-transparent ' >
               <div>
                <input className='bg-transparent focus:outline-none w-[300px] text-white' id='searchInput' type="text" placeholder="search Anything" />
               </div>
               <div>
                <button onClick={(e)=>e.preventDefault()} className='items-center text-white py-[0.2rem]'><AiOutlineSearch size={20} className="icon"/></button>
               </div>
            </form>
        <p className='text-center text-white mt-[1rem] text-xl'>Artificial intelligence is the simulation of human intelligence <br/> processes by machines.</p>
        <div className='text-gray-950 mt-[2rem] focus:outline-none'>
        <button type="button" className=' rounded-md bg-white py-[0.6rem] px-[2.6rem] hover:bg-gray-600 hover:scale-110 hover:text-white'>AI TOOLS</button>
        <button type="button" className='ml-[2rem]  rounded-md bg-white py-[0.6rem] px-[3rem] hover:bg-gray-700 hover:scale-110 hover:text-white'>AI API</button>
      </div>
      </div>
    </div>
   <Ai_tools data={searchHandler(listings)}/>
   <AI_API data={searchHandler(apis)}/>
   </>
  )

}

export default Hero
