import React from 'react'
import { FiPlusCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Category(props) {
    const handleAdd =(item) =>{
        const cart = JSON.parse(localStorage.getItem('cart'));
        cart.push(item)
        localStorage.setItem('cart', JSON.stringify(cart));
    }
  return (
    <div className='px-2 w-full sm:h-[30vh] h-[28vh] flex flex-col gap-[5px]'>
        <div className='flex justify-between'>
            <p className='text-[#0077b6] uppercase font-bold text-[18px]'>{props.title}</p>
            <Link to={props.to}>View All</Link>
        </div>
        <div className='text-white grid sm:grid-cols-5 grid-cols-2 w-full h-full overflow-hidden gap-[10px]'>
                {props.items.map((item)=>(
                    <div className='relative p-1 h-[25vh] rounded-md shadow-md flex justify-center '>
                        <img src={item.imageUrl} alt="Item Pic" className='w-full h-[80%] mt-[20px] rounded-[10px]' />
                        <p className='absolute top-0 flex flex-row bg-black p-2 w-[100%] rounded-t-md items-center justify-between rounded-sm'>
                            <p className='font-bold'>{item.name}</p>
                            <p className='font-bold'><i>GHs {item.price}</i></p>
                        </p>
                        <button onClick={()=>handleAdd(item)} className='absolute flex gap-[5px] bottom-0 text-black px-[25px] uppercase font-bold bg-[#ffda73] hover:bg-[#11aaff] hover:text-white justify-center items-center p-2 w-fit mb-2  items-center rounded-sm'><FiPlusCircle/> Cart</button>
                    </div>
                ))}
            </div>
    </div>
  )
}
