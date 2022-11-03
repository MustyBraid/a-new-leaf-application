import React, {useState}from 'react';
import {PlantImages} from './PlantImages'
import wateringcanIcon from '../assets/watering-can-gray.svg';
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
        <div className="z-10 bg-gray-300 flex place-content-center content-center	 justify-center items-center " >
        <section className='slider items-center bg-white p-2 rounded-lg rounded-t-3xl shadow-md bg-gradient-to-b from-stone-50 to-white'>
          {PlantImages.map((plant, index) => {
            return (              
              <div className={index === current ? 'plant active' : 'plant' + 'w-full justify-self-center image select-none -z-50'} key={index} >
                {index === current && (
                  <img src={plant.image} alt='plant image' className='-m-810 mt-6 flex w-full justify-self-center image' />                  
                )}
              </div>              
            );
          })}

          {/* prev / next arrows */}
          <div id='prev-next-arrows' class=' z-100'>
            <div id="prev-arrow" className='m-8 left-arrow float-left'>
              <Icon icon="tabler:arrow-narrow-left" height="2.5rem" width="2.5rem" color='#D1D5DB' inline={true} onClick={prevSlide}/>
            </div>
            <div id="prev-arrow" className='m-8 right-arrow float-right'>
              <Icon icon="tabler:arrow-narrow-right" height="2.5rem" width="2.5rem" color='#D1D5DB' inline={true} onClick={nextSlide}/>
            </div>
          </div>

          {/* edit plant form */}
          <div id="editForm" className='p-4 '>          
          {/* current age */}
            <div class="whitespace-no-wrap">
            <label for="plantAge">
              <h1 class="font-bold text-zinc-400 text-sm pb-2">1.2 yrs,</h1>
              <iconify-icon icon="tabler:cake" height="2.5rem" width="2.5rem" color='#D1D5DB' inline={true}></iconify-icon>
              <input class="placeholder:italic text-zinc-400 text-lg block bg-white w-30 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 invalid:border-red-500 focus:ring-1 " type="date" name="bday" required pattern="\d{4}-\d{2}-\d{2}">
              </input>
            </label>
            </div>
            
            {/* current name */}
            <label for="plantNSame">
              <p className='text-zinc-400 text-lg'>Hercules</p>
              <input class="placeholder:italic placeholder:text-zinc-400 text-lg block bg-white w-30 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 invalid:border-red-500 focus:ring-1 " placeholder="Hercules" type="text" name="search"/>
            </label>
    

            {/* selected species */}
            <div className="border-t border-solid mt-6 md:mt-12 pt-6"></div>
            <label for="plantSpecies">
              <p class="text-gray-400">Jade Plant "crassula ovata"</p>
            </label>
            <div class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
              <div class="bg-cyan-400 w-3/4 h-full rounded-lg shadow-md"></div>
            </div>
            <div class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
              <div class="bg-green-400 w-3/4 h-full rounded-lg shadow-md"></div>
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
            <div class="p-10">
              <div class="dropdown inline-block relative">
                <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                  <span class="mr-1">Water Schedule</span>
                </button>
                <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                  <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block text-center whitespace-no-wrap" href="#">
                    <input type="checkbox" class="default:ring-2 mx-2  whitespace-no-wrap" />Daily</a>
                  </li>
                  <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Every Other Day</a></li>
                  <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Weekly</a></li>
                </ul>
              </div>
            </div>
          </div>

        </section>
      </div>
    );
  };
  
  export default ImageSlider;