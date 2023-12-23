import React from 'react'
import MyTextbox from '../components/textbox'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
    const navigate = useNavigate();

    const handleLogin =()=>{
        navigate('/home')
    }

  return (
    <>
        <head>
            <title>Login to Fortune</title>
        </head>
        <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
            <form className='sm:w-[50%] w-full flex flex-col gap-[2em] p-[2em] bg-[#11aaffaa]'>
                <label className='text-center text-white font-bold text-[24px] uppercase'>Login to Fortune</label>
                <MyTextbox width='w-[100%]' type='text' label='Enter Username'/>
                <MyTextbox width='w-[100%]' type='password' label='Enter Password'/>
                <button onClick={handleLogin} className='uppercase p-[2em] bg-[#000000aa] rounded-sm text-white'>Login</button>
            </form>
        </div>
    </>
  )
}
