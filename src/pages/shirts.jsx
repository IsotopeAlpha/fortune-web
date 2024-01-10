import React, { useState } from 'react'
import Sidebar from '../components/sidebar'
import { FiPlusCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function Shirts() {
    const item = JSON.parse(localStorage.getItem('shirts'));
    const navigate = useNavigate()

    const handleDetails = (item) =>{
        navigate('/details', {state:item})
    }

    return (
    <>
        <head>
            <title>Fortune-Shirts</title>
        </head>
        <div className='bg-[#ffffffaa] w-[100vw] h-[100vh] sm:pl-[21%] sm:mt-0 mt-[40px] p-[1em] flex flex-col items-center justify-center gap-[30px] overflow-auto'>  
            <div className='text-white grid sm:grid-cols-5 grid-cols-2 w-full h-full  gap-[10px]'>
                {item.map((item)=>(
                    <div className='relative p-1 h-[40vh] rounded-md shadow-md flex justify-center '>
                        <img src={item.imageUrl} alt="Item Pic" className='w-full h-[80%] mt-[20px] rounded-[10px]' />
                        <p className='absolute top-0 flex flex-row bg-black p-2 w-[100%] rounded-t-md items-center justify-between rounded-sm'>
                            <p className='font-bold'>{item.name}</p>
                            <p className='font-bold'><i>GHs {item.price}</i></p>
                        </p>
                        <button onClick={()=>handleDetails(item)} className='absolute flex gap-[5px] bottom-0 text-black px-[25px] uppercase font-bold bg-[#ffda73] hover:bg-[#11aaff] hover:text-white justify-center items-center p-2 w-fit mb-2  items-center rounded-sm'>View Details</button>
                    </div>
                ))}
            </div>
        </div>
        <Sidebar/>
    </>
  )
}
