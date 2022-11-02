import React from 'react'
import plusSign from '../assets/plusSign.png';



const Main = () => {
  return (
    
<div name="skills" className="w-full h-screen bg-white text-zinc-400">
 {/* Weather Container & Plants */}

 <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">

  <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
   <div className="shadow-md shadow-[#ccc9c4] hover:scale-110 duration-500 rounded-2xl">
    <img className="w-20 mx-auto opacity-25" src={plusSign} alt="" />
    <p className="my-4">cati</p>
   </div>
   <div className="shadow-md shadow-[#ccc9c4] hover:scale-110 duration-500 rounded-2xl">
    <img className="w-20 mx-auto opacity-25" src={plusSign} alt="" />
    <p className="my-4">Hercules</p>
   </div>
   <div className="shadow-md shadow-[#ccc9c4] hover:scale-110 duration-500 rounded-2xl">
    <img className="w-20 mx-auto opacity-25" src={plusSign} alt="" />
    <p className="my-4">Fluffy</p>
   </div>
   <div className="shadow-md shadow-[#ccc9c4] hover:scale-110 duration-500 rounded-2xl">
    <img className="w-20 mx-auto opacity-25" src={plusSign} alt="" />
    <p className="my-4">Lavender</p>
   </div>
   <div className="shadow-md shadow-[#ccc9c4] hover:scale-110 duration-500 rounded-2xl">
    <img className="w-20 mx-auto opacity-25" src={plusSign} alt="" />
    <p className="my-4">Lilac</p>
   </div>
   <div className="shadow-md shadow-[#ccc9c4] hover:scale-110 duration-500 rounded-2xl">
    <img className="w-20 mx-auto opacity-25" src={plusSign} alt="" />
    <p className="my-4">Apollo</p>
   </div>
   <div className="shadow-md shadow-[#ccc9c4] hover:scale-110 duration-500 rounded-2xl">
    <img className="w-20 mx-auto opacity-25" src={plusSign} alt="" />
    <p className="my-4">Apollo</p>
   </div>
   <div className="shadow-md shadow-[#ccc9c4] hover:scale-110 duration-500 rounded-2xl">
    <a href="/PopUpPage"><img className="w-20 mx-auto opacity-25 " src={plusSign} alt="" /></a>
    <p className="my-4">Apollo</p>
   </div>
  </div>
 </div>
</div>
  )
}

export default Main