import React from 'react'

function Signin() {
  return (
    <div className='flex-col gap-5 p-5 text-center '>
      <h1 className='my-5 text-indigo-300 text-2xl'>Not Logged In? Create an Account</h1>
      <div className='flex gap-5 items-center justify-center my-5'>
        <label> Name: </label>
        <input type="text" placeholder=' Enter Name' className='bg-[#ffffff1f] p-3 rounded-2xl w-[60%]'></input>
      </div>
      <div className='flex gap-5 items-center justify-center my-5'>
        <label>Email</label>
        <input type="text" placeholder='Enter Email'className='bg-[#ffffff1f] p-3 rounded-2xl w-[60%]'></input>
      </div>
      <div className='flex gap-5 items-center justify-center my-5'>
        <label> Mobile:</label>
        <input type="number" placeholder='Enter Number'className='bg-[#ffffff1f] p-3 rounded-2xl w-[60%]'></input>
      </div>
      <div className='flex gap-5 items-center justify-center my-5'>
        <label> DOB: </label>
        <input type="date" placeholder='Enter DOB'className='bg-[#ffffff1f] p-3 rounded-2xl w-[60%]'></input>
      </div>
      <div className='flex gap-5 items-center justify-center my-5'>
        <label> Password: </label>
        <input type="password" placeholder='Enter Password'className='bg-[#ffffff1f] p-3 rounded-2xl w-[60%]'></input>
      </div>
      <div className='flex gap-5 items-center justify-center my-5'>
        <label> Confirm Password: </label>
        <input type="password" placeholder='Enter Password'className='bg-[#ffffff1f] p-3 rounded-2xl w-[60%]'></input>
      </div>

      <button  className='bg-indigo-300 p-2 text-black rounded-2xl font-bold w-[10%]'>SignUp</button>
    </div>
  )
}

export default Signin
