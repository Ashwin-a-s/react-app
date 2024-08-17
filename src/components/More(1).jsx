import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FetchData } from '../utils/FetchData';
import bodypart from '../assets/bodypart.png'
import equipment from '../assets/equipment.png'
import target from '../assets/target.png'
import Spinner from './Spinner';

const More = () => {
    const {id} = useParams();
    const [items,setItems] = useState({});
    const [instructions,setInstructions] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect ( () =>{
        const fetchData = async() =>{
            setLoading(true);
        try{
            const data = await FetchData({url :`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`})
            setItems(data)
            setInstructions(data.instructions);
        }
        catch(error){
            console.error("error" + error)
        }
        finally{
            setLoading(false);
        }
    }
    fetchData();
    },[])

  return (
    <>    
            <Spinner loading={loading}/>
            <div className='mt-10 bg-gray-50 grid grid-cols-1 md:grid-cols-2 p-6 gap-2'>
                <div className='flex justify-center'>
                    <img className="" src={items.gifUrl}/>
                </div>
                <div className='bg-white p-10'>
                      <h1 className='font-bold text-xl md:text-3xl font-mono text-center mb-2'>{items.name}</h1>
                      <p className='font-bold text-lg'>Instructions : </p>
                      {
                        instructions.length > 0 ?(instructions.map((item,index) =>(
                            <p key={index} className='text-sm p-1'>{index+1}.{item}</p>
                        ))) : <p>Nothing Found</p>
                      }
                      
                      <div className='flex items-center gap-3 p-4'>
                            <div className='bg-gray-100 p-3 rounded-3xl hover:bg-gray-200'><img className="w-6 md:w-8" src={bodypart}/></div>
                            <p className='text-lg md:text-xl font-bold font-mono'>{items.bodyPart}</p>
                      </div>
                      <div className='flex items-center gap-3 p-4'>
                            <div className='bg-gray-100 p-3 rounded-3xl hover:bg-gray-200'><img className="w-6 md:w-8" src={equipment}/></div>
                            <p className='text-lg md:text-xl font-bold font-mono'>{items.equipment}</p>
                      </div>
                      <div className='flex items-center gap-3 p-4'>
                            <div className='bg-gray-100 p-3 rounded-3xl hover:bg-gray-200'><img className="w-6 md:w-8" src={target}/></div>
                            <p className='text-lg md:text-xl font-bold font-mono'>{items.target}</p>
                      </div>
                      
                </div>
            </div>
        
    </>
  )
}

//item.name[0].toUpperCase+item.name.slice(1)
export default More