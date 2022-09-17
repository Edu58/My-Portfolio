import React from 'react'
import Skills from './Skills'

const HeroSection = () => {
  return (
    <div className='container px-2 flex justify-center items-center mx-auto h-96 mt-20 md:mt-0'>
      <div className='text-center pt-20'>
        <p className="text-white text-2xl font-semibold mb-4">come <span className='text-rose-600'>create</span>.</p>
        <h2 className='text-4xl md:text-5xl font-bold text-white mx-auto' style={{maxWidth: "60rem"}}>
          A 
          <span className='text-rose-600 md:text-6xl'> Fullstack Developer</span>
           <br /> who creates cool & interactive web apps
        </h2>
      </div>
      <span id='skills'></span>
    </div>
  )
}

export default HeroSection