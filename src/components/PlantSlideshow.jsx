import React, {useState}from 'react';
import {PlantImages} from './PlantImages'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import sunIcon from '../assets/sunIcon.png';
import tempGauge from '../assets/tempGauge.png';
import { Icon } from '@iconify/react';
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
        <div className="bg-gray-300 flex justify-center items-center h-fit" >
        <section className='slider bg-white p-10 rounded-lg rounded-t-3xl shadow-md bg-gradient-to-b from-stone-50 to-white'>
          {PlantImages.map((plant, index) => {
            return (              
              <div className={index === current ? 'plant active' : 'plant'} key={index} >
                {index === current && (
                  <img src={plant.image} alt='travel image' className='image' />                  
                )}
              </div>              
            );
          })}

          {/* prev / next arrows */}
          <div id="prev-arrow" className='left-arrow float-left'>
            <Icon icon="tabler:arrow-narrow-left" height="2.5rem" width="2.5rem" inline={true} onClick={prevSlide}/>
          </div>
          <div id="prev-arrow" className='right-arrow float-right'>
            <Icon icon="tabler:arrow-narrow-right" height="2.5rem" width="2.5rem" inline={true} onClick={nextSlide}/>
          </div>
          <h1 class="font-bold text-zinc-400 text-sm pb-2">1.2 yrs,</h1>
          <p className='text-zinc-400 text-lg'>Hercules</p>
          
          
          <div className="border-t border-solid mt-6 md:mt-12 pt-6"></div>
          <p class="text-gray-400">Jade Plant "crassula ovata"</p>
          <div class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
            <div class="bg-cyan-400 w-3/4 h-full rounded-lg shadow-md"></div>
          </div>
          <div class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
            <div class="bg-green-400 w-3/4 h-full rounded-lg shadow-md"></div>
          </div>
          <div className="box-border p-5 pb-6 border-2 rounded-lg bg-white m4 mt-4">
          <h3 className='text-sm text-left pb-2 text-zinc-300'>Watering 
          <br className='text-lg text-zinc-300' />Let soil dry, mist until moist</h3>

            {/* edit light */}
            <div className='box-border p-5 pb-6 border-2 rounded-lg bg-white m4 mt-4'>
              <h4 className='text-sm'>Light level</h4>
              <Icon icon="tabler:plant" height="1.5rem" width="1.5rem" />
              <div className="border-t border-solid mt-6 md:mt-12 pt-2"></div>
              <h5 className='text-sm' >TEMP</h5>
              <Icon icon="tabler:temperature" height="1.5rem" width="1.5rem" />
          </div>
          </div>
          <div class="p-10">

          <div class="dropdown inline-block relative">
            <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
              <span class="mr-1">Dropdown</span>
            </button>
            <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
              <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
              <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
              <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three</a></li>
            </ul>
          </div>

          </div>
        </section>
      </div>
    );
  };
  
  export default ImageSlider;