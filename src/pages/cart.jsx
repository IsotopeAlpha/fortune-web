import React, { useEffect, useState } from 'react'
import Sidebar from '../components/sidebar'
import { FiArrowRight, FiMinusCircle } from 'react-icons/fi'
import Swal from 'sweetalert2';
import { PiXCircle } from 'react-icons/pi';

export default function Cart() {

  const items = JSON.parse(localStorage.getItem('cart'))
  
  useEffect(()=>{},[items])
   
    var total = 0;
    const [checkout, setCheckout] = useState(false) 

    const calculateTotal = ()=>{
      for(let i=0; i<items.length; i++){
        total += items[i].price
      }
    }
  
    calculateTotal();


    const handleCheckout =()=>{
      if(items.length<0){
        Swal.fire('Cart', 'Cart Is Empty, Add product to checkout!!', 'warning')
      }else{
        setCheckout(true)
      }
    }

    const handleDelete =(item)=>{
      for(let i=0; i<items.length; i++){
        if(items[i]._id === item._id){
          const newItems = items.pop(items[i])
          localStorage.setItem('cart', JSON.stringify(newItems));
        }
      }
      Swal.fire('Cart', 'Item Remove From Cart!!', 'success')
    }

    const handleOrder =()=>{
      Swal.fire('Checkout', 'Order Placed Successfully', 'success')
      setCheckout(false)
    }

    return (
    <>
        <head>
            <title>Fortune-Cart</title>
        </head>
        <div className='bg-[#ffffffaa] w-[100vw] h-[100vh] sm:pl-[21%] sm:mt-0 mt-[40px] p-[1em] flex flex-col gap-[30px] overflow-auto'>  
          {checkout===false?
          <div className='w-full sm:p-[20px] items-center text-white flex flex-col w-full h-full gap-[10px]'>
                {items.length<1?<div className='text-[24px] font-bold '>Nothing to display</div>:items.map((item)=>(
                    <div className='w-full p-1 h-[30vh] bg-white rounded-md flex items-center justify-evenly bg-white shadow-md'>
                        <img src={item.imageUrl} alt="Item Pic" className='w-[20%] h-full' />
                        <p className='flex flex-col p-2 w-[100%] text-black'>
                            <p className='font-bold'>{item.name}</p>
                            <p className='font-bold'><i>GHs {item.price}</i></p>
                        </p>
                        <button className='flex gap-[5px] bottom-0 text-[#0077b6] uppercase font-bold bg-[#ffffffee] hover:bg-[#11aaff] hover:text-white justify-center items-center p-2 w-fit mb-2  items-center rounded-sm' onClick={()=>handleDelete(item)}><FiMinusCircle/> Remove</button>
                    </div>
                ))}
                <p className='text-black flex flex-row-reverse w-full font-bold text-[24px]'><i>{total}</i>Total: </p>    
                <button onClick={handleCheckout} className='px-6 mb-[30px] bg-[#0077b6] uppercase font-bold text-[#ffffff] hover:bg-[#11aaff] hover:text-white justify-center items-center p-2 w-fit mb-2  items-center rounded-sm'> Continue</button>
                </div>
                :<div className='flex flex-col gap-[20px]'>
                  <button onClick={()=>setCheckout(false)}><PiXCircle size={25} color='#0077b6'/></button>
                  <div>
                    <p>Enter Delivery Address</p>
                    <textarea className='w-full bg-[#ececec] p-2' rows="10"></textarea>
                  </div>
                  <div className='flex items-center gap-[5px]'>
                    <input type="radio" checked />
                    <p>Pay On Delivery</p>
                  </div>
                  <button onClick={handleOrder} className='flex gap-[5px] mb-[30px] bg-[#0077b6] uppercase font-bold text-[#ffffff] hover:bg-[#11aaff] hover:text-white justify-center items-center p-2 w-fit mb-2  items-center rounded-sm'><FiArrowRight/> Proceed To Checkout</button>
                </div>
                }
        </div>
        <Sidebar/>
    </>
  )
}
