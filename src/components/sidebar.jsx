import React, { useEffect, useState } from 'react'
import {FiHash, FiLogOut, FiShoppingCart} from 'react-icons/fi'
import {PiPaintBucket, PiPants, PiShirtFoldedBold, PiSpiral, PiUserBold} from 'react-icons/pi'
import {MdOutlineDashboard, MdOutlineNightlight} from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'
import ReactModal from "react-modal"
import {BiMenuAltRight} from "react-icons/bi"
import {AiOutlineClose} from "react-icons/ai"

export default function Sidebar() {

    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({width:0, height:0});
    const name = JSON.parse(localStorage.getItem('user')).details.name;
    const cart = JSON.parse(localStorage.getItem('cart'));
    const currentLocation = location.pathname;
    
    const currentcolor = (route) => {
        if (currentLocation === route) {
            return 'bg-white text-[#ffda73] rounded-l-sm shadow-md';
        }
    }

    const customStyles = {
        overlay: {
           backgroundColor: 'rgba(0, 0, 0, 0)'
        },
     }

    useEffect(()=>{
        const handleResize = () =>{
            setSize({width: window.innerWidth, height: window.innerHeight});
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(()=>{
        if(size.width>768 && menuOpen){
            setMenuOpen(false);
        }
    },[size.width, menuOpen, cart]);



    const menuHandler = () =>{
        setMenuOpen((p)=> !p);
    };

  return (
    <>
    <div className='invisible sm:visible absolute top-0 bg-[#ffda73] text-black w-[20%] h-[100vh] pl-2 py-2 flex flex-col gap-[5px]'>
            <p className='text-[#ffda73] bg-black text-center text-[20px] font-bold'>Hello <i>{name}</i></p>
            <Link to='/cart' className={`relative ${currentcolor('/cart')} p-[1em] w-full flex items-center  hover:bg-white hover:text-[#0077b6]`}>
                <FiShoppingCart className='w-[24px] h-[24px]' />
                <div className='absolute right-[10px]  bg-red-600 w-[20px] h-[20px] text-white items-center justify-center flex font-bold rounded-full p-[5px]'>{cart.length<1?0:cart.length}</div>
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
        {menuOpen && (
            <div className="flex flex-row mr-0  w-full"><ReactModal
                style={customStyles}
                onClose={menuHandler} isOpen={true} className="bg-black text-white w-[40%] ml-[60%]  p-2 flex flex-col items-end overflow-auto no-scrollbar">
                    <AiOutlineClose onClick={menuHandler}/>
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
                    </ReactModal>
                    </div>)}                    
            <div className="flex fixed top-0 w-full h-[40px] bg-black sm:invisible visible header__content_toogle justify-between  items-center p-[10px] ">
                {!menuOpen?(<BiMenuAltRight size={25} color='#ffda73'  onClick={menuHandler}/>):""}
                <p className='w-full text-[#ffda73] flex justify-center text-center text-[20px] font-bold'><i>{name}</i></p>
                <Link to='/cart' className={`relative ${currentcolor('/cart')} p-[1em] flex items-center   hover:bg-white hover:text-[#0077b6]`}>
                    <FiShoppingCart  color='#ffda73' className='w-[24px] h-[24px]' /> 
                    <div className='absolute right-0 top-[10px] bg-red-600 w-[20px] h-[20px] text-white items-center justify-center flex font-bold rounded-full p-[5px]'>{cart.length<1?0:cart.length}</div>
                </Link>
            </div>
    </>
        
  )
}
