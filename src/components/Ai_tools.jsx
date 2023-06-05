import React from 'react'
import {listings} from './Icons'

const Ai_tools = () => {
    const listingComponents=listings.map((listing)=>(
<<<<<<< HEAD
        <div className='flex flex-col gap-1' key={listing.id}>
        <img className='h-36 m-auto pt-5' src={listing.image}/>
        <h3 className='hover:scale-105 cursor-pointer text-center mt-2 text-xl'>{listing.title}</h3>
        <p className='text-center'>{listing.description}</p>
=======
        <div key={listing.id}>
        <img  src={listing.image}/>
        <h3 className='hover:scale-105 cursor-pointer text-center mt-2'>{listing.title}</h3>
>>>>>>> 7390b182fd1ef9a8955697ba0879e175ac838550
        </div>
    ))
  return (
    <>
    <h1 className='text-center text-3xl font-bold mt-6'>AI TOOLS</h1>
    <div className='grid grid-cols-5 justify-center mb-4'>
        {listingComponents}
    </div>
    </>
    // <div className="relative">
    
    //   <div className='flex flex-wrap items-center justify-center m-[10px] pl-[4rem] '>
    //          <div className=' flex basis-1/3 min-w-[250px] my-[10px]'>
    //             <a href="https://chat.openai.com/">
    //                 <img className='h-[8rem] w-[10rem] hover:scale-105 cursor-pointer drop-shadow-2xl' src='/assets/images/chatgpt.png'/></a>
    //             <a href="https://chat.openai.com/">
    //                 <h3 className="hover:scale-105 cursor-pointer">CHATGPT</h3></a>
    //             <p >AN ASK-IT-ALL AI CHATBOT</p>
    //         </div>
    //         <div>
    //             <a href="https://labs.openai.com/">
    //                 <img className="h-[8rem] w-[10rem] hover:scale-105 cursor-pointer drop-shadow-2xl" src="/assets/images/dall-e.png"/></a>
    //             <a href="https://labs.openai.com/">
    //                 <h3 className="hover:scale-105 cursor-pointer">DALL-E</h3></a>
    //             <p >AI IMAGE GENERATOR</p>
    //         </div>
    //         <div >
    //             <a href="https://huggingface.co/spaces/Xintao/GFPGAN">
    //                 <img className="h-[8rem] w-[10rem] hover:scale-105 cursor-pointer drop-shadow-2xl" src="/assets/images/gfpgan.png"/></a>
    //             <a href="https://huggingface.co/spaces/Xintao/GFPGAN">
    //                 <h3 className="hover:scale-105 cursor-pointer">GFPGAN</h3></a>
    //             <p >IMAGE RESTORATION TOOL</p>
    //         </div>
    //         <div>
    //             <a href="https://brandmark.io/">
    //                 <img className="h-[8rem] w-[10rem] hover:scale-105 cursor-pointer drop-shadow-2xl" src="/assets/images/brandmark.png"/></a>
    //             <a href="https://brandmark.io/">
    //                 <h3 className="hover:scale-105 cursor-pointer">BRANDMARK</h3></a>
    //             <p >GENERATE BRANDNAMES USING AI</p>
    //         </div>
    //         <div >
    //             <a href="https://lumen5.com/blog-to-video">
    //                 <img className="h-[8rem] w-[10rem] hover:scale-105 cursor-pointer drop-shadow-2xl" src="/assets/images/lumen5.png"/></a>
    //             <a href="https://lumen5.com/blog-to-video">
    //                 <h3 className="hover:scale-105 cursor-pointer">LUMEN5</h3></a>
    //             <p >AI VIDEO GENERATOR</p>
    //         </div>
    //         <div >
    //             <a href="https://books.google.com/talktobooks/">
    //                 <img className="h-[8rem] w-[10rem] hover:scale-105 cursor-pointer drop-shadow-2xl" src="/assets/images/talk-to-books.png"/></a>
    //             <a href="https://books.google.com/talktobooks/">
    //                 <h3 className="hover:scale-105 cursor-pointer">TALK-TO-BOOK</h3></a>
    //             <p >AI TOOL TO INTERACT WITH BOOKS</p>
    //         </div>
    //         <div >
    //             <a href="https://deepbeat.org/">
    //                 <img className="h-[8rem] w-[10rem] hover:scale-105 cursor-pointer drop-shadow-2xl" src="/assets/images/deepbeat.png"/></a>
    //             <a href="https://deepbeat.org/">
    //                 <h3 className="hover:scale-105 cursor-pointer">DEEPBEAT</h3></a>
    //             <p >AI RAP LYRICS GENERATOR</p>
    //         </div>
    //         <div >
    //             <a href="https://fireflies.ai/">
    //                 <img className="h-[8rem] w-[10rem] hover:scale-105 cursor-pointer drop-shadow-2xl" src="/assets/images/fireflies.png"/></a>
    //             <a href="https://fireflies.ai/">
    //                 <h3 className="hover:scale-105 cursor-pointer">FIREFLIES</h3></a>
    //             <p > AI TOOL TO GENERATE NOTES FROM YOUR MEETINGS</p>
    //         </div>
    //         <div>
    //             <a href="https://magicstudio.com/magiceraser">
    //                 <img className="h-[8rem] w-[10rem] hover:scale-105 cursor-pointer drop-shadow-2xl" src="/assets/images/magic-eraser.png"/></a>
    //             <a href="https://magicstudio.com/magiceraser">
    //                 <h3 className="hover:scale-105 cursor-pointer">MAGIC-ERASER</h3></a>
    //             <p >AI OBJECT REMOVER</p>
    //         </div>
    //         <div >
    //             <a href="https://fontjoy.com/">
    //                 <img className="h-[8rem] w-[10rem] hover:scale-105 cursor-pointer drop-shadow-2xl" src="/assets/images/fontjoy.png"/></a>
    //             <a href="https://fontjoy.com/">
    //                 <h3 className="hover:scale-105 cursor-pointer">FONTJOY</h3></a>
    //             <p > AI TOOL TO CREATE FONT COMBINATIONS</p>
    //         </div>
    //         <div >
    //             <a href="https://forms.app/en/ai-form-generator">
    //                 <img className="h-[8rem] w-[10rem] hover:scale-105 cursor-pointer drop-shadow-2xl" src="/assets/images/forms-app.png"/></a>
    //             <a href="https://forms.app/en/ai-form-generator">
    //                 <h3 className="hover:scale-105 cursor-pointer">FORMS.APP</h3></a>
    //             <p > AI TOOL TO CREATE FORMS,SURVEYS AND QUIZZES</p>
    //         </div>
    //         <div >
    //             <a href="https://www.notion.so/">
    //                 <img className="h-[8rem] w-[10rem] hover:scale-105 cursor-pointer drop-shadow-2xl" src="/assets/images/notion.png"/></a>
    //             <a href="https://www.notion.so/">
    //                 <h3 className="hover:scale-105 cursor-pointer">NOTION</h3></a>
    //             <p >create to-do lists, add notes, and record daily tasks in this note-taking application</p>
    //         </div>
    //         <div >
    //             <a href="https://www.flickr.com/">
    //                 <img className="h-[8rem] w-[10rem] hover:scale-105 cursor-pointer drop-shadow-2xl" src="/assets/images/flickr.png"/></a>
    //             <a href="https://www.flickr.com/">
    //                 <h3 className="hover:scale-105 cursor-pointer">FLICKR</h3></a>
    //             <p >WRITING CONTENT AND FINDING CAPITON FOR SOCIAL MEDIA.</p>
    //         </div>
    //         <div >
    //             <a href="https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F">
    //                 <img className="h-[8rem] w-[10rem] hover:scale-105 cursor-pointer drop-shadow-2xl" src="/assets/images/midjourney.png"/></a>
    //             <a href="https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F">
    //                 <h3 className="hover:scale-105 cursor-pointer">MIDJOURNEY</h3></a>
    //             <p > AI TOOL TO CREATE FASCINATING ART</p>
    //         </div>
    //         <div >
    //             <a href="https://www.riffusion.com/">
    //                 <img className="" src="/assets/images/riffusion.png"/></a>
    //             <a href="https://www.riffusion.com/">
    //                 <h3 className="hover:scale-105 cursor-pointer">RIFFUSION</h3></a>
    //             <p >AI BEAT GENERATOR</p>
    //         </div>
    //     </div>

    //   </div>
   
  )
}

export default Ai_tools
