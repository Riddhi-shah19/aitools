import React from 'react'

const Ai_tools = ({data}) => {
 
    const listingComponents=data.map((listing)=>(
        <div className='flex flex-col gap-1' key={listing.id}>
        <img className='h-36 m-auto pt-5' src={listing.image}/>
        <a className='hover:scale-105 hover:underline cursor-pointer text-center mt-2 text-xl' href={listing.link} target='_blank'>{listing.title}</a>
        <p className='text-center'>{listing.description}</p>
        </div>
    ))
  return (
    <>
    <h1 className='text-center text-3xl font-bold mt-6'>AI TOOLS</h1>
    <div className='grid grid-cols-5 justify-center mb-4'>
        {listingComponents}
    </div>
  
    </>
  )
}

export default Ai_tools
