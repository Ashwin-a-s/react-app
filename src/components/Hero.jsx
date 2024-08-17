import React from 'react'
import banner from '../assets/banner.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='p-6 gap-2 flex flex-col justify-center items-center lg:-mt-20'>
            <p className='text-red-600 font-bold text-2xl font-mono lg:text-3xl'>Fitness Club</p>
            <p className='font-bold text-xl font-mono lg:text-3xl'>Sweat,Smile And Repeat</p>
            <p className='text-center font-mono font-bold text-gray-600'>Check out the most effective exercises personalized to you</p>
            <Link to="explore" className='px-6 py-2 bg-red-500 text-white font-mono rounded-sm mt-4'>Explore Exercises</Link>
        </div>
        <div className='hidden md:block'>
            <img src={banner} alt="banner" className='lg:max-w-lg'/>
        </div>
    </div>
  )
}

export default Hero