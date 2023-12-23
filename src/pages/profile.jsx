import React from 'react'
import MyTextbox from '../components/textbox'
import Sidebar from '../components/sidebar'
import Swal from 'sweetalert2'

export default function Profile() {

    const handleUpdate =()=>{
        Swal.fire('Profile', 'User Details Updated Successfully', 'success')
      }

  return (
    <>
        <head>
            <title>Fortune-My Profile</title>
        </head>
        <form className='bg-[#ffffffaa] w-[100vw] h-[100vh] pl-[21%] p-[1em] flex flex-col gap-[30px] overflow-auto'>  
            <MyTextbox width='w-full' label='Full Name'/>
            <MyTextbox width='w-full' label='Username'/>
            <MyTextbox width='w-full' label='Gender'/>
            <MyTextbox type='email' width='w-full' label='Email'/>
            <MyTextbox width='w-full' label='Contact'/>
            <MyTextbox width='w-full' label='Delivery Address'/>
            <p className='w-full flex justify-center'>
                <button className='px-6 bg-[#0077b6] uppercase font-bold text-white hover:bg-[#11aaff] hover:text-white justify-center items-center p-2 w-fit mb-2  items-center rounded-sm' onClick={handleUpdate}>Update</button>
            </p>
        </form>
        <Sidebar/>
    </>
  )
}
