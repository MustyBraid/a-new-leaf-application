import React, {useState}from 'react';
import {PlantImages} from './PlantImages'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { showNotification, setupTimer,stopNotification,timeOptions } from './Notification';
import sunIcon from '../assets/sunIcon.png';
import tempGauge from '../assets/tempGauge.png';
import SearchBar from './SearchBar';
import wateringcanIcon from '../assets/watering-can-gray.svg';
import { Icon } from '@iconify/react';
import { Navigate } from "react-router-dom";
//Import Plant card





const ImageSlider = () => {
    const [current, setCurrent] = useState(0);
    const length = PlantImages.length;
    const [redirect, setRedirect ] = useState(false)
    
    //Add plant to main page
    function addPlant (){
      console.log(addPlant);
      //route to main page and push + over 
      setRedirect(true)
    }
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    if (!Array.isArray(PlantImages) || PlantImages.length <= 0) {
      return null;
    }
  
    return (
        <div className="bg-gray-300 flex justify-center items-center h-fit" >
          
      <section className='slider bg-white p-10 rounded-lg rounded-t-3xl shadow-md bg-gradient-to-b from-stone-50 to-white'>
        {PlantImages.map((plant, index) => {
          return (
            
            <div
              className={index === current ? 'plant active' : 'plant'}
              key={index}
            >
              {index === current && (
                <img src={plant.image} alt='travel image' className='image' />
                
              )}
            </div>
            
          );
        })}
            {/* current age */}
            <div className="whitespace-no-wrap">
            <label htmlFor="plantAge">
              <h1 className="font-bold text-zinc-400 text-sm pb-2 whitespace-no-wrap"><Icon icon="tabler:cake" inline={true} color="#9ca3af" />1.2 yrs</h1>            
              <input className="placeholder:italic text-zinc-400 text-lg block bg-white w-30 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 invalid:border-red-500 focus:ring-1 " type="date" name="bday" required pattern="\d{4}-\d{2}-\d{2}">
              </input>
            </label>
            </div>
        <p className='text-zinc-400 text-lg'>Hercules</p>
        <FaArrowAltCircleLeft className='left-arrow float-left' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow float-right' onClick={nextSlide} />
        <div className="border-t border-solid mt-6 md:mt-12 pt-6"></div>
        <SearchBar placeholder={'Search for a plant!'}/>
        <div class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
    <div class="bg-cyan-400 w-3/4 h-full rounded-lg shadow-md"></div>
   </div>
   <div class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
    <div class="bg-green-400 w-3/4 h-full rounded-lg shadow-md"></div>
   </div>
   <div className="box-border p-5 pb-6 border-2 rounded-lg bg-white m4 mt-4">

    <h3 className='text-sm text-left pb-2 text-zinc-300'>Watering <br className='text-lg text-zinc-300' />Let soil dry, mist until moist</h3>
    <div className='box-border p-5 pb-6 border-2 rounded-lg bg-white m4 mt-4'>
    <h4 className='text-sm'>Light level</h4>
    <img className='flex items-center justify-center' src={sunIcon} alt="" />
    <div className="border-t border-solid mt-6 md:mt-12 pt-2"></div>
    <h5 className='text-sm'>TEMP</h5>
    <img className='w-10 h-10' src={tempGauge} alt="" />
   </div>
   </div>
   <div class="p-10">

   <div class="dropdown inline-block relative">

  <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
    <span class="mr-1">Water Timer</span>
  </button>
  <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
    <li ><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#" onClick={() => selectionHandler(timeOptions.Min)}>1 Minute</a></li>
    <li><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#" onClick={()=>selectionHandler(timeOptions.Everyday)}>EveryDay</a></li>
    <li><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#" onClick={()=>selectionHandler(timeOptions.Week)}>Every Week</a></li>
  </ul>
  
</div>
<div>
    <button class="bg-gray-300 mt-4 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center" onClick={()=>addPlant()}>+Add</button>
  </div>
  {redirect ?<Navigate to = "/main"/>:null}
</div>
      </section>
      </div>
    );
  };
  
  //Connecting Dropdown options to Notification 
function selectionHandler (e){
  console.log(e)
  setupTimer(e)
}




export default ImageSlider;