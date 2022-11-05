import React, {useState}from 'react';
import {PlantImages} from './PlantImages'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { showNotification, setupTimer,stopNotification,timeOptions } from './Notification';
import SearchBar from './SearchBar.jsx';
import { Icon } from '@iconify/react';
import { Navigate } from "react-router-dom";
//Import Plant card





const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = PlantImages.length;

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
      <div className="z-0 bg-gray-300 flex content-center	justify-center items-center p-2 px-8" >
      <section className='mt-32 slider items-center bg-white pt-6 -p-56 rounded-b-xl rounded-t-xxl shadow-md bg-gradient-to-b from-stone-50 to-white'>

        {PlantImages.map((plant, index) => {
          return (              
            <div className={index === current ? 'plant active' : 'plant' } key={index} >
              {index === current && (
                <img src={plant.image} alt='plant image' className='-m-1000 flex w-full justify-self-center select-none image' />                  
              )}
            </div>              
          );
        })}

        {/* prev / next arrows */}
          <div id="prev-arrow" className='z-50 -mt-60 m-8 left-arrow float-left selectEnable ' onClick={prevSlide}>
            <Icon icon="tabler:arrow-narrow-left"  height="2.5rem" width="2.5rem" className='left-arrow float-left' color='#D1D5DB'/>
          </div>
          <div id="prev-arrow" className='z-50 -mt-60 m-8 right-arrow float-right selectEnable ' onClick={nextSlide}>
            <Icon icon="tabler:arrow-narrow-right" height="2.5rem" width="2.5rem" className='right-arrow float-right' color='#D1D5DB'/>
          </div>


        {/* edit plant Form */}
        <form id="editForm" className='px-12 pb-12'>     

          {/* current age */}
          <div className="whitespace-no-wrap">
          <label htmlFor="plantAge">
            <h1 className="font-bold text-zinc-400 text-sm pb-2 whitespace-no-wrap"><Icon icon="tabler:cake" inline={true} color="#9ca3af" />1.2 yrs</h1>            
            <input className="placeholder:italic text-zinc-400 text-lg block bg-white w-30 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 invalid:border-red-500 focus:ring-1 " type="date" name="bday" required pattern="\d{4}-\d{2}-\d{2}">
            </input>
          </label>
          </div>

          {/* current name */}
          <label htmlFor="plantNSame">
            <p className='text-zinc-400 text-lg'>Hercules</p>
            <input className="placeholder:italic placeholder:text-zinc-400 text-lg block bg-white w-30 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 invalid:border-red-500 focus:ring-1 " placeholder="Hercules" type="text" name="search"/>
          </label>    

          {/* selected species */}
          <div className="border-t border-solid mt-6 md:mt-12 pt-6"></div>
          <label htmlFor="plantSpecies">
            <p className="text-gray-400">Jade Plant "crassula ovata"</p>
            <SearchBar placeholder={"Search for a plant!"}/>
          </label>
          <div className="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-300 to-cyan-300 w-3/4 h-full rounded-lg shadow-md"></div>
          </div>
          <div className="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-300 to-green-300  w-3/4 h-full rounded-lg shadow-md"></div>
          </div>
          <div className="box-border p-5 pb-6 border-2 rounded-lg bg-white m4 mt-4">
          <h3 className='text-sm text-left pb-2 text-zinc-300'>Watering 
          <br className='text-lg text-zinc-300' />Let soil dry, mist until moist</h3>






            {/* light - output per plant ID */}
            <div className='box-border p-5 pb-6 border-2 rounded-lg bg-white m4 mt-4 flex-row'>
            <div id='inputLight' className='box-border p-5 pb-6 border-2 rounded-lg flex-row flex justify-center content-center whitespace-no-wrap'>
              <Icon icon='tabler:sun' color='#D1D5DB' height='2rem' width="2rem" />
              <h4 className='text-sm text-zinc-400'  >Light level</h4>              
            </div>
              
              <h5 className='text-sm' >TEMP</h5>
              <Icon icon="tabler:temperature" color="#D1D5DB" height="1.5rem" width="1.5rem" />
          </div>
          </div>
          {/* water schedule button */}
          <div className="p-10">
            <div className="dropdown inline-block relative">
              <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                <span className="mr-1">Water Schedule</span>
              </button>
              <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                <li className="">
                  <a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#" onClick={() => selectionHandler(timeOptions.Min)}>
                  <input type="checkbox" className="default:ring-2 mx-2  whitespace-no-wrap" />1 Minute</a>
                </li>
                <li className="">
                  <a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#" onClick={()=>selectionHandler(timeOptions.Everyday)}>
                  <input type="checkbox" className="default:ring-2 mx-2  whitespace-no-wrap" />Every Day</a>
                </li>
                <li>
                  <a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#" onClick={()=>selectionHandler(timeOptions.Week)}>
                  <input type="checkbox" className="default:ring-2 mx-2  whitespace-no-wrap" />Every Week</a>
                </li>
              </ul>
            </div>
          </div>
        </form>

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