import React, {useState}from 'react';
import {PlantImages} from './PlantImages'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
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
        <h1 class="font-bold text-zinc-400 text-sm pb-2">1.2 yrs,</h1>
        <p className='text-zinc-400 text-lg'>Hercules</p>
        <FaArrowAltCircleLeft className='left-arrow float-left' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow float-right' onClick={nextSlide} />
        <div className="border-t border-solid mt-6 md:mt-12 pt-6"></div>
        <p class="text-gray-400">Jade Plant "crassula ovata"</p>
        <div class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
    <div class="bg-cyan-400 w-3/4 h-full rounded-lg shadow-md"></div>
   </div>
   <div class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
    <div class="bg-green-400 w-3/4 h-full rounded-lg shadow-md"></div>
   </div>
   <div className="box-border p-5 pb-4 border-2 rounded-lg bg-white m4 mt-4">
    <h3 className='text-sm text-left pb-2'>Watering</h3>
   </div>
   <div class="p-10">

<div class="dropdown inline-block relative">
  <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
    <span class="mr-1">Dropdown</span>
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
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