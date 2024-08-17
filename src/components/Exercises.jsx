import React from 'react'
import { FetchData } from '../utils/FetchData'
import { useState,useEffect } from 'react';
import FirstLook from './FirstLook';
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';


const Exercises = () => {
  const {category} = useParams();
  const [list,setList] = useState([]);
  const [exerciseList,setExerciseList] = useState([]);
  const [loader1,setLoader1] = useState(false);
  const [loader2,setLoader2] = useState(false);

  //FETCH LIST FUNCTION
  useEffect (() =>{ 
    const fetchList = async() =>{
      setLoader1(true);
      try{
      const data = await FetchData({url : `https://exercisedb.p.rapidapi.com/exercises/${category}List`});
      setList(data);
      }
      catch(error){
        console.log("error while fetching list" + error)
      }
      finally{
        setLoader1(false);
      }
    }
    fetchList();
  },[]);

  //FETCH THE EXERCISE LIST FUNCTION

 const fetchEx = async(item)=>{
     setLoader2(true);
     try{
        const data =  await FetchData({url:`https://exercisedb.p.rapidapi.com/exercises/${category}/${item}`});
        setExerciseList(data);
     }
     catch(error){
      console.log("error while fetching the exercises" + error);
     }
     finally{
      setLoader2(false);
    }

 }

  return (
    <>
        <h1 className='p-4 text-center text-3xl font-bold'>Explore By {category[0].toUpperCase()+category.slice(1)}</h1>
        <Spinner loading={loader1}/>
        <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 p-4'>
            {
                list.map((item,index) =>(
                  <button className="px-4 py-2 rounded-md bg-gray-200 m-2 text-red-500 font-mono hover:bg-gray-300 hover:text-red-700" key={index} onClick={()=>fetchEx(item)}>{item}</button>
              ))
            }
          </div>   

          <Spinner loading={loader2}/>
            {
              exerciseList.length > 0 ?(
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 m-auto'>{
                  exerciseList.map((item,index) =>(
                    <FirstLook key={index} item={item}/>
                  ))
                  }
                </div>) : (<p className='text-center text-2xl font-bold text-red-500 font-mono'>Select a Option</p>) 
            }    
          
    </>
  )
}
export default Exercises



