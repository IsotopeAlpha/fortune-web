import React from 'react'
import Sidebar from '../components/sidebar'
import { FiPlusCircle } from 'react-icons/fi';

export default function Sprays() {
    const item = {name:'Item No', price:100, desc:'This is item description. This is item description. This is item description. This is item description. This is item description. This is item description. This is item description. This is item description. This is item description. This is item description. This is item description.', img:'/logo192.png'};
  return (
    <>
        <head>
            <title>Fortune-Sprays</title>
        </head>
        <div className='bg-[#ffffffaa] w-[100vw] h-[100vh] pl-[21%] p-[1em] flex flex-col items-center justify-center gap-[30px] overflow-auto'>  
            <img src={item.img} alt="Itme Pic" className='h-[60%]'/>
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
                <p>{item.desc}</p>
            </p>
            <button className='flex gap-[5px] bg-[#0077b6] text-white uppercase font-bold hover:bg-[#11aaff] justify-center items-center p-2 w-fit mb-2  items-center rounded-sm'><FiPlusCircle /> Add to Cart</button>
        </div>
        <Sidebar/>
    </>
  )
}
