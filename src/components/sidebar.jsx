import React from 'react'
import {FiHash, FiLogOut, FiShoppingCart} from 'react-icons/fi'
import {PiPaintBucket, PiPants, PiShirtFoldedBold, PiSpiral, PiUserBold} from 'react-icons/pi'
import {MdOutlineDashboard, MdOutlineNightlight} from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'


export default function Sidebar() {

    const location = useLocation();

    const currentLocation = location.pathname;
    
    const currentcolor = (route) => {
        if (currentLocation === route) {
            return 'bg-white text-[#11aaff] rounded-l-sm shadow-md';
        }
    }

  return (
        <div className='absolute top-0 bg-[#11aaffaa] text-white w-[20%] h-[100vh] pl-2 py-2 flex flex-col gap-[5px]'>
            <p className='text-white text-center text-[20px] font-bold'>Hello User</p>
            <Link to='/cart' className={` ${currentcolor('/cart')} p-[1em] w-full flex items-center  hover:bg-white hover:text-[#0077b6]`}>
                <FiShoppingCart className='w-[24px] h-[24px]' />
                <p className='pl-2'>Cart</p>
            </Link>
            <Link to='/home' className={` ${currentcolor('/home')} p-[1em] w-full flex items-center  hover:bg-white hover:text-[#0077b6]`}>
                <MdOutlineDashboard className='w-[24px] h-[24px]' />
                <p className='pl-2'>All Items</p>
            </Link>
            <Link to='/shirts' className={` ${currentcolor('/shirts')} p-[1em] w-full flex items-center  hover:bg-white hover:text-[#0077b6]`}>
                <PiShirtFoldedBold className='w-[24px] h-[24px]' />
                <p className='pl-2'>Shirts</p>
            </Link>
            <Link to='/splashes' className={` ${currentcolor('/splashes')} p-[1em] w-full flex items-center  hover:bg-white hover:text-[#0077b6]`}>
                <PiPaintBucket className='w-[24px] h-[24px]' />
                <p className='pl-2'>Splashes</p>
            </Link>
            <Link to='/sprays' className={` ${currentcolor('/sprays')} p-[1em] w-full flex items-center  hover:bg-white hover:text-[#0077b6]`}>
                <PiSpiral className='w-[24px] h-[24px]' />
                <p className='pl-2'>Sprays</p>
            </Link>
            <Link to='/shorts' className={` ${currentcolor('/shorts')} p-[1em] w-full flex items-center  hover:bg-white hover:text-[#0077b6]`}>
                <PiPants className='w-[24px] h-[24px]' />
                <p className='pl-2'>Shorts</p>
            </Link>
            <Link to='/ups&downs' className={` ${currentcolor('/ups&downs')} p-[1em] w-full flex items-center  hover:bg-white hover:text-[#0077b6]`}>
                <FiHash className='w-[24px] h-[24px]' />
                <p className='pl-2'>Ups and Downs</p>
            </Link>
            <Link to='/nightwears' className={` ${currentcolor('/nightwears')} p-[1em] w-full flex items-center  hover:bg-white hover:text-[#0077b6]`}>
                <MdOutlineNightlight className='w-[24px] h-[24px]' />
                <p className='pl-2'>Nightwears</p>
            </Link>
            <Link to='/profile' className={` ${currentcolor('/profile')} p-[1em] w-full flex items-center  hover:bg-white hover:text-[#0077b6]`}>
                <PiUserBold className='w-[24px] h-[24px]' />
                <p className='pl-2'>My Profile</p>
            </Link>
            <Link to="/" className={` ${currentcolor("/")} ml-[10%] p-[4px] w-full flex items-center bottom-10  hover:bg-white hover:text-[#0077b6]`}>
                <FiLogOut className="w-[24px] h-[24px]" />
                <p className="pl-2">Logout</p>
            </Link>
        </div>
  )
}
