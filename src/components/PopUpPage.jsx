import React from 'react'
import Plant1 from '../assets/Plant1.png';
import SearchBar from './SearchBar';

const popUpPage = () => {
  return (
<div className="bg-gray-300 flex justify-center items-center h-screen">
 <div className="bg-white p-10 rounded-lg rounded-t-3xl shadow-md bg-gradient-to-b from-stone-50 to-white">
  <img className="w-60 mx-auto" src={Plant1} alt="" />
  <h1 class="font-bold text-zinc-400 text-sm pb-2">1.2 yrs,</h1>
  <p className='text-zinc-400 text-lg'>Hercules</p>
  <div class="mt-4 mb-10"></div>
  <SearchBar placeholder={'Search for a plant!'}/>
  <div className="border-t border-solid mt-6 md:mt-12 pt-6"></div>
  <p class="text-gray-400">Jade Plant "crassula ovata"</p>
  <div className="box-border p-2 pb-4 border-2 rounded-lg bg-white m4">
   <div class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
    <div class="bg-cyan-400 w-3/4 h-full rounded-lg shadow-md"></div>
   </div>
   <div class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
    <div class="bg-green-400 w-3/4 h-full rounded-lg shadow-md"></div>
   </div>
   <div className="box-border p-5 pb-4 border-2 rounded-lg bg-white m4 mt-4">
    <h3 className='text-sm text-left pb-2'>Watering</h3>
   </div>
  </div>
 </div>
</div>
  )
}

export default popUpPage