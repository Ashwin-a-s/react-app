import React from 'react'
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='my-6 m-auto bg-gray-50 max-w-3xl py-2 m-4 rounded-sm flex items-center justify-between'>
            <div className='mx-4'>
                <Link to="/"><img src={Logo} alt="logo"/></Link>
            </div>
            <div className='flex gap-4 font-bold font-mono text-red-400  mx-4'>
                <Link to="/" className='hover:text-red-500 hover:underline hover:decoration-double'> Home </Link>
                <Link to="/explore" className='hover:text-red-500 hover:underline hover:decoration-double'>Explore</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar