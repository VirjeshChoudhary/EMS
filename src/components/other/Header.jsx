/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Header = (props) => {
  // const [username,setUsername]=useState('');
  // if(!props.data){
  //   setUsername("Admin");
  // }else{
  //   setUsername(props.data.firstName);
  // }
  const logOut=()=>{
    localStorage.setItem('loggedInUser','');
    props.changeUser('');
    // window.location.reload();
  }
  return (
    <div className=' flex justify-between items-end'>
        <h1 className=' text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username👋</span> </h1>
        <button onClick={logOut} className='bg-red-500 text-white px-5 py-2 rounded-sm text-lg'>Log Out</button>
    </div>
  )
}

export default Header