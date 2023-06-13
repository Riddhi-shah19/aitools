import React from 'react'

const Ai_tools = ({data}) => {
 
    const listingComponents=data.map((listing)=>(
        <div   className='flex flex-col gap-3' key={listing.id}>
        <img className=' m-auto w-[9rem] border-[1px] border-solid border-black rounded-[50%] ' src={listing.image}/>
        <a className='hover:scale-105 hover:underline cursor-pointer text-center mt-2 text-xl' href={listing.link} target='_blank'>{listing.title}</a>
        <p className='text-center'>{listing.description}</p>
        </div>
    ))
  return (
    <>
<<<<<<< HEAD
    <div >
    <h1 className='text-center text-3xl font-bold mt-6 mb-6'>AI TOOLS</h1>
    <div className='grid grid-cols-5 justify-center mb-4 gap-y-[3rem]'>
=======
    <h1 className='text-center text-3xl font-bold mt-6'>AI TOOLS</h1>
    <div className='grid grid-cols-5 justify-center mb-4'>
>>>>>>> a8dc86dbf593f0642232f169dbdc13398cf24f01
        {listingComponents}
    </div>
    </div>
    </>
  )
}

export default Ai_tools
