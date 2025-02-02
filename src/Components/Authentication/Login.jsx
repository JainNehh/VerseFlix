import React from 'react'

function Login() {
  return (
    <div className='flex-col gap-5 p-5 text-center '>
        <h1 className='text-amber-100 text-2xl'>Already Have an Account ? LogIn</h1>
        <div className='flex gap-5 items-center justify-center my-5'>
        <label>Email</label>
        <input type="text" placeholder='Enter Email'className='bg-[#ffffff1f] p-3 rounded-2xl w-[60%]'></input>
      </div>

      <div className='flex gap-5 items-center justify-center my-5'>
        <label> Password: </label>
        <input type="password" placeholder='Enter Password'className='bg-[#ffffff1f] p-3 rounded-2xl w-[60%]'></input>
      </div>

      <button className='bg-indigo-300 p-2 text-black rounded-2xl font-bold w-[10%]'>LogIn</button>
      
    </div>
  )
}

export default Login
