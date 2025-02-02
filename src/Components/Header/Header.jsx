import React from 'react'
import Signin from '../Authentication/Signin'
import { NavLink, useNavigate } from 'react-router-dom'

function Header() {
  const navigate= useNavigate()
  return (
    <div className='flex justify-between  bg-[#83818122] p-3.5 items-center'>
      <div>
        <h1 className='text-white font-extrabold font-sans text-3xl'>VerseFlix</h1>
      </div>
      <div className='flex gap-5 items-center'>
        <ul className='text-white flex gap-9 '>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">ContactUs</NavLink>
            
        </ul>
        <NavLink to="/signin" className='hover:bg-[#ffffff23] p-1.5 rounded-2xl'>SignIn</NavLink>
      </div>
    </div>
  )
}

export default Header
