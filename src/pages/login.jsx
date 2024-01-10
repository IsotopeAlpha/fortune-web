import React, { useState } from 'react'
import MyTextbox from '../components/textbox'
import { Link, useNavigate } from 'react-router-dom'
import {HiEye, HiEyeOff} from 'react-icons/hi'
import Swal from 'sweetalert2';
import axios from 'axios';

export default function LoginPage() {
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [passwordType, setPasswordType] = useState("password");

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post(`${process.env.REACT_APP_BASE_URL}auth/login`, { email, password }).then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data));
                localStorage.setItem('cart', JSON.stringify([]));

                if (res.data.status === "ok") {
                    setLoading(false);
                    Swal.fire(
                        'Login',
                        "Logged In Successfully",
                        'success'
                    )
                    return navigate('/home');
                    
                } else {
                    setLoading(false);
                    Swal.fire("Error", res.data.msg);
                }

            })
        } catch (error) {
            throw error;
        }
    }

  return (
    <>
        <head>
            <title>Login to Fortune</title>
        </head>
        <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
            <form className='sm:w-[70%] w-full flex flex-col gap-[2em] p-[20px] bg-[##ffda73aa] items-center'>
                <label className='text-center text-[#ffda73] font-bold sm:text-[24px] uppercase bg-white p-[10px]'>Login to Fortune</label>
                <div className='w-full bg-white flex flex-col gap-[10px] p-[20px] '>
                    <MyTextbox width='w-[100%]' type='text' label='Enter Username' onChange={(e)=>setEmail(e.target.value)}/>
                    <div>
                        <div className='font-bold'>Password</div>
                        <div className='relative'>
                            <input type={passwordType} className={`bg-[#f8f5f0] placeholder-black w-[100%] h-[40px] px-2 rounded-[4px]`} onChange={(e)=>setPassword(e.target.value)}/>
                            {passwordType === "password" ? <HiEye className='absolute text-black right-[10px] top-[12px] bottom-[10px]' onClick={togglePassword} /> : <HiEyeOff className='absolute text-black right-[10px] top-[15px] bottom-[10px]' onClick={togglePassword} />}
                        </div>
                    </div>
                </div>
                <button disabled={loading} onClick={handleLogin} className='hover:bg-[#ffda73aa] hover:text-black bg-[#ffda73] text-white font-bold py-[20px] px-[30px] uppercase w-fit rounded-[7px]'>{loading?'Loading...':'Login'}</button>
                <Link to='/register' className='bg-white p-[10px] text-[#ffda73] font-bold'>Register an account?</Link>
            </form>
        </div>
    </>
  )
}
