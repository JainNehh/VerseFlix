import React from 'react'

function Header() {
  return (
    <div className='flex justify-between  bg-[#83818122] p-3.5 items-center'>
      <div>
        <h1 className='text-white font-extrabold font-sans text-3xl'>VerseFlix</h1>
      </div>
      <div>
        <ul className='text-white flex gap-9 '>
            <li>Home</li>
            <li>About</li>
            <li>ContactUs</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
