/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler=(e)=>{
        e.preventDefault();
        // console.log("zeee");

        handleLogin(email,password);
        setEmail("");
        setPassword(""); 
        // console.log("yes submitted!");
    }
  return(
    <div className=' h-screen w-screen flex justify-center items-center '>
        <div className=' border-2 border-emerald-500 p-20 py-28 flex justify-center items-center flex-col rounded-lg '>
            <h1 className='mb-4 text-2xl font-bold'>LOGIN</h1>
            <form onSubmit={submitHandler} className='flex flex-col space-y-4' >
                <input value={email} onChange={(e)=>setEmail(e.target.value)} required className='text-white rounded-xl p-2 bg-transparent border-red-400 border-2 placeholder:text-white ' type="email" placeholder='Email' />
                <input value={password} onChange={(e)=>setPassword(e.target.value)} required className='text-white rounded-xl p-2 bg-transparent border-red-400 border-2 placeholder:text-white ' type="password" name="" id="" placeholder='Password' />
                <button type='submit' className='text-white rounded-xl p-2 bg-blue-400 border-red-400 hover:bg-blue-700  '>LogIn</button>
            </form>
        </div>
    </div>
  )
}

export default Login