import {React,useState} from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { listings } from './Icons';
import Ai_tools from './Ai_tools';
import { apis } from './Api';
import AI_API from './AI_API';

export function handleScroll(){
  const element =document.getElementById('aitools') 
  element.style.scrollMarginTop='5rem'
  element.scrollIntoView({behavior:'smooth'})
}
export function handleScroll2(){
  const element =document.getElementById('apitools') 
  element.style.scrollMarginTop='5rem'
  element.scrollIntoView({behavior:'smooth'})
}
const Hero = () => {
  const [search,setSearch]=useState('')

  
  const searchHandler = (data) =>{
    if (search == 'title')
    {
      return data.filter((item)=>item.title.toLowerCase().includes(search));
    }
    else (search == 'description')
    {
      return data.filter((item)=>item.description.toLowerCase().includes(search));
    }
   }
  
  return (
    <>
<<<<<<< HEAD
    <div className='w-full h-screen relative bg-cover bg-gradient-to-tr from-black to-gray-700'>
      <img className='w-full h-full mix-blend-overlay bg-cover' src="/assets/images/ai1.jpg" alt="background" />
=======
    <div className='w-full h-screen relative bg-gradient-to-tr  from-black to-gray-700'>
      <img className='w-full h-full mix-blend-overlay' src="/assets/images/ai1.jpg" alt="background" />
>>>>>>> ac6ee1b72c341c36e2dc3ec9e2a4f2a4285f094c
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center'>
        <h1 className='text-white text-4xl'>ALL AI TOOLS</h1>
            <form
             onChange={(e)=>setSearch(e.target.value)}
             className='mt-[2rem] flex justify-between items-center max-w-[250px] sm:max-w-[300px] md:max-w-[500px] lg:max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-transparent ' >
               <div>
                <input className='bg-transparent focus:outline-none w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px]  text-white' id='searchInput' type="text" placeholder="search Anything" />
               </div>
               <div>
                <button onClick={(e)=>e.preventDefault()} className='items-center text-white py-[0.2rem]'><AiOutlineSearch size={20} className="icon"/></button>
               </div>
            </form>
        <p className='text-center text-white mt-[1rem] text-xl'>Artificial intelligence is the simulation of human intelligence <br/> processes by machines.</p>
        <div className='text-gray-950 mt-[2rem] focus:outline-none'>
        <button type="button" onClick={handleScroll} className=' rounded-md bg-white py-[0.6rem] px-[1.5rem] sm:px-[2.6rem] hover:bg-gray-700 hover:scale-110 hover:text-white'>AI TOOLS</button>
        <button type="button" onClick={handleScroll2} className='ml-4 sm:ml-[2rem] mt-4  rounded-md bg-white py-[0.6rem] px-[2.2rem] sm:px-[3rem] hover:bg-gray-700 hover:scale-110 hover:text-white'>AI API</button>
      </div>
      </div>
    </div>
   <Ai_tools data={searchHandler(listings)}/>
   <AI_API data={searchHandler(apis)}/>
   </>
  )

}

export default Hero
