import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

const Explore = () => {
  return (
        <section>
            <h1 className='font-bold text-xl text-center max-w-xl m-auto p-6 text-gray-600'>Explore our exercises by categories which gives you over 1300 exercises </h1>
            <div className='max-w-4xl m-auto mb-10'>
               <Search />
                <div className='flex flex-col md:flex-row justify-around p-6 md:p-10 gap-2 text-md font-bold bg-gray-100 rounded-sm flex-row'>
                    <Link className='exBtn' to={'/Exercises/bodyPart'}>By Body Parts</Link>
                    <Link className='exBtn' to={'/Exercises/equipment'}>By Equipment</Link>
                    <Link className='exBtn' to={'/Exercises/target'}>By Target</Link>
                </div>   
            </div>
        </section>
  )
}

export default Explore