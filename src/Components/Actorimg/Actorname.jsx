import React from 'react'

function Actorname() {
    const data=[
        {"src":"src/assets/Actors/genelia.jpg"},
        {"src":"src/assets/Actors/shahruk.jpg"},
        {"src":"src/assets/Actors/hritik.jpg"},
        {"src":"src/assets/Actors/yash.png"},
        {"src":"src/assets/Actors/ranbir.jpg"},
        {"src":"src/assets/Actors/rash.jpg"},
    ];
  return (
    <div className='flex gap-10 items-center justify-center p-[50px]'>
    {/* <div>
    <img className='h-[150px] w-[150px] rounded-full aspect-square' src={data.src} alt="loading.." />
   </div> */}

{
    data?.map((item,key)=>{
        return  <div>
        <img className='h-[200px] w-[200px] rounded-full aspect-square' src={item.src} alt="loading.." />
       </div>
    })
}




   </div>
  )
}

export default Actorname
