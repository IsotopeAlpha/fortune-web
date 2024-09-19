import React from 'react'
import Sidebar from '../components/sidebar'
import { FiPlusCircle } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';

export default function Details() {
    const location = useLocation();

    const item = location.state;

    const handleAdd =(item) =>{
        const cart = JSON.parse(localStorage.getItem('cart'));
        cart.push(item)
        localStorage.setItem('cart', JSON.stringify(cart));
    }
  return (
    <>
        <head>
            <title>Fortune- {item.name} Details</title>
        </head>
        <div className='bg-[#ffffffaa] w-[100vw] h-[100vh] sm:pl-[21%] sm:mt-0 mt-[40px] p-[1em] flex flex-col items-center justify-center gap-[30px] overflow-auto'>  
            <img src={item.imageUrl} alt="Itme Pic" className='h-[60%]'/>
            <p className='w-full'>
                <p className='font-bold'>Name</p>
                <p>{item.name}</p>
            </p>
            <p className='w-full'>
                <p className='font-bold'>Price</p>
                <p>Ghs {item.price}</p>
            </p>
            <p className='w-full'>
                <p className='font-bold'>Description</p>
                <p>{item.description}</p>
            </p>
            <button onClick={()=>handleAdd(item)} className='flex gap-[5px] bg-blue-800 text-white uppercase font-bold hover:bg-[#11aaff] justify-center items-center p-2 w-fit mb-2  items-center rounded-sm'><FiPlusCircle /> Add to Cart</button>
        </div>
        <Sidebar/>
    </>
  )
}
