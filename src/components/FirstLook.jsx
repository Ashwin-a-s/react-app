import React from 'react'
import { Link } from 'react-router-dom'


const FirstLook = ({item}) => {
  
  return (
    <div className='bg-gray-100 p-4 m-2 flex flex-col'>
      <img src={item.gifUrl}/>
      <div className='bg-white mt-2 rounded-md p-2'>
          <div className='flex gap-2 md:p-6 md:m-2'>
            <p className='text-sm md:text-md px-3 py-1 bg-red-500 rounded-2xl text-white font-mono'>{item.bodyPart}</p> 
            <p className='text-sm md:text-md px-3 py-1 bg-yellow-500 rounded-2xl text-white font-mono'>{item.target}</p>
          </div>  
          <p className='text-center font-mono font-bold text-md md:text-xl my-2'>{item.name[0].toUpperCase()+item.name.slice(1)}</p>
          <div className='flex justify-center'>
            <Link className="font-bold px-4 py-2 bg-gray-100 text-gray-800 my-2 rounded-sm hover:bg-gray-300 hover:text-gray-900" to={`/info/${item.id}`} >View More</Link> 
          </div>
      </div>              
    </div>
  )
}
export default FirstLook