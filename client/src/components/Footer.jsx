import React from 'react'
import gear from '../assets/gear.png';
import pottedPlant from '../assets/potted-plant-icon.png';
import windowPane from '../assets/windowPane.png';

const Footer = () => {
  return (
<footer className="flex-row justify-center p-4 rounded-lg shadow-black shadow-2xl  bg-white rounded-tr-sm ">

<div className='flex justify-center items-center'>
    <div className='flex space-x-52'>
        
    <img className='h-10 w-10 opacity-25' src={pottedPlant} alt="Potted plant footer" />

    <img className='h-10 w-10 opacity-25' src={windowPane} alt="window pane footer" />

        <img className='h-10 w-10 opacity-25' src={gear} alt="Gear Icon footer" />

    </div>
</div>
</footer>
  )
}

export default Footer