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
      <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
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
      </section>
    );
  };
  
  export default ImageSlider;



