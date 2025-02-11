import React from 'react'

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
      <div className='flex p-20 items-center justify-center'>
        <input type="text"  placeholder='Search Anything :) ...'className='bg-white text-black p-3 w-[75%] rounded-3xl font-serif '></input>
        <button className='bg-fuchsia-200 text-black p-3 rounded-3xl w-30 font-bold font-serif '>Search</button>
      </div>


   <div>
    <h1 className=' text-4xl font-serif text-center font-bold'>Most Popular Actor</h1>

   <div className='flex gap-10 items-center justify-center p-[50px]'>
     
     <div>
      <img className='h-[150px] w-[150px] rounded-full aspect-square' src="src/assets/Actors/genelia.jpg" alt="loading.." />
     </div>

     <div>
      <img className='h-[150px] w-[150px] rounded-full aspect-square' src="src/assets/Actors/shahruk.jpg" alt="loading.." />
     </div>
     <div>
      <img className='h-[150px] w-[150px] rounded-full aspect-square' src="src/assets/Actors/hritik.jpg" alt="loading.." />
     </div>
     <div>
      <img className='h-[150px] w-[150px] rounded-full aspect-square' src="src/assets/Actors/yash.png" alt="loading.." />
     </div>
     <div>
      <img className='h-[150px] w-[150px] rounded-full aspect-square' src="src/assets/Actors/ranbir.jpg" alt="loading.." />
     </div>
     <div>
      <img className='h-[150px] w-[150px] rounded-full aspect-square' src="src/assets/Actors/rash.jpg" alt="loading.." />
     </div>





   </div>


   </div>





    </div>
  )
}

export default Home
