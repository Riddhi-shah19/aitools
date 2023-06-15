import {React,useState} from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { listings } from './Icons';
import Ai_tools from './Ai_tools';
import { apis } from './Api';
import AI_API from './AI_API';
import Header from './Header';

const Hero = () => {
  const [search,setSearch]=useState('')

  const keys =["title","description"]
  
  const searchHandler = (data) =>{ 
      return data.filter((item)=>
        keys.some((keys)=>item[keys].toLowerCase().includes(search)))
   }
  
   function handleScroll(){
    const element =document.getElementById('aitools') 
    element.style.scrollMarginTop='5rem'
    element.scrollIntoView({behavior:'smooth'})
  }
   function handleScroll2(){
    const element =document.getElementById('apitools') 
    element.style.scrollMarginTop='5rem'
    element.scrollIntoView({behavior:'smooth'})
  }

  return (
    <>
    <div className='w-full h-screen relative bg-cover bg-gradient-to-tr from-black to-gray-700'>
      <img className='w-full h-full mix-blend-overlay bg-cover' src="/assets/images/ai1.jpg" alt="background" />
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
        <button type="button" onClick={handleScroll} className=' rounded-md bg-white py-[0.6rem] px-[2.6rem] hover:bg-gray-600 hover:scale-110 hover:text-white'>AI TOOLS</button>
        <button type="button" onClick={handleScroll2} className='ml-[2rem]  rounded-md bg-white py-[0.6rem] px-[3rem] hover:bg-gray-700 hover:scale-110 hover:text-white'>AI API</button>
      </div>
      </div>
    </div>
   <Ai_tools data={searchHandler(listings)}/>
   <AI_API data={searchHandler(apis)}/>
   <Header/>
   </>
  )

}

export default Hero
