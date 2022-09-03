import React from 'react'

const Hero = ({heading, message}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]' />
        <div className='p-5 text-white z-[2] mt-[-10rem]'>
            <h1 className='text-7xl font-bold'>Arenal Manoa</h1>
            <h2 className='text-4xl font-bold'>Hot Springs Resort and Spa</h2>
            <p className='py-8 text-xl'>{message}</p>
            <button className='px-8 py-2 border hover:bg-black/80 hover:text-[#BCD75F] hover:font-bold ease-in duration-150'>Check availability</button>
        </div>
    </div>
  )
}

export default Hero