import React, { useState } from 'react'
import { FetchData } from '../utils/FetchData';
import FirstLook from './FirstLook';
import Spinner from './Spinner';

const Search = () => {
    const [input,setInput] = useState("");
    const [exerciseList,setExerciseList] = useState([])
    const [loading,setLoading] = useState(false);

        const Fetchdata = async(e)=>{
            setLoading(true)
            e.preventDefault();
            try{
                const data = await FetchData({url :`https://exercisedb.p.rapidapi.com/exercises/name/${input}`})
                setExerciseList(data)
            }
            catch(error){
                console.log("error" + error)
            }
            finally{
                setLoading(false)
            }
        } 
  return (
    <div>
        <form className='flex flex-row items-center gap-0 m-4' onSubmit={Fetchdata}>
            <input className="w-full py-3 border-2 m-6 px-2" type='text' placeholder='search by name' value={input} onChange={(e)=>{setInput((e.target.value).toLowerCase())}}></input>
            <button type="submit" className='bg-red-600 text-white py-3 -ml-6 px-6 text-lg font-mono'>search</button>
        </form>
        <Spinner loading={loading}/>
        {
              exerciseList.length > 0 ?(
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 m-auto'>{
                  exerciseList.map((item,index) =>(
                    <FirstLook key={index} item={item}/>
                  ))
                  }
                </div>) : (<p className='mb-2 text-center text-2xl font-bold text-red-500 font-mono'>Enter a Exercise Name</p>) 
        }    
    </div>
  )
}

export default Search