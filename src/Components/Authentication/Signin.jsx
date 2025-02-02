import React from 'react'

function Signin() {
  return (
    <div>
      <h1>Not Logged In? Create an Account</h1>
      <div>
        <label> Name: </label>
        <input type="text" placeholder=' Enter Name'></input>
      </div>
      <div>
        <label>Email</label>
        <input type="text" placeholder='Enter Email'></input>
      </div>
      <div>
        <label> Mobile NO: </label>
        <input type="number" placeholder='Enter Number'></input>
      </div>
      <div>
        <label> DOB: </label>
        <input type="date" placeholder='Enter DOB'></input>
      </div>
      <div>
        <label> Password: </label>
        <input type="password" placeholder='Enter Password'></input>
      </div>
      
    </div>
  )
}

export default Signin
