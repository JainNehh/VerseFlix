import React from 'react'
import { Search } from 'lucide-react';
import Actorname from '../Actorimg/Actorname';

function Home() {
  return (
    <div>

<div className='flex '>
     <div className='h-[250px] w-[500px] bg-white m-5 flex-row items-center justify-center'>
      <img src="src/assets/Corousel/skyforce.jpg" alt="loading..." />
     </div>
 
     <div className='h-[250px] w-[500px] bg-white m-5 flex-row items-center justify-center '>
      <img className='' src="src/assets/Corousel/mr-mrs-mahi.jpg" alt="loading..." />
     </div>

     <div className='h-[310px] w-[500px] bg-white m-5 flex-row items-center justify-center '>
      <img className='h-[310px]' src="src/assets/Corousel/mam.jpg" alt="loading..." />
     </div>

     </div>
      <div className='flex p-20 items-center justify-center '>
        <div className='flex bg-[#ffffff46] rounded-4xl justify-between overflow-hidden w-[75%]'>
        <input type="text"  placeholder='Search Anything :) ...'className='bg-transparent p-3 w-full rounded-3xl font-serif text-white outline-none '></input>
        <button className='bg-fuchsia-200 text-black p-3 rounded-3xl  font-bold font-serif '><Search /></button>
        </div>
        
      </div>


   <div>
    <h1 className=' text-4xl font-serif text-center font-bold'>Most Popular Actor</h1>

   <Actorname/>
   


   </div>





    </div>
  )
}

export default Home
