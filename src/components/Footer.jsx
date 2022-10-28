import React from 'react'
import gear from '../assets/gear.png';
import pottedPlant from '../assets/potted-plant-icon.png';
import windowPane from '../assets/windowPane.png';

const Footer = () => {
  return (
<footer className="flex-row justify-center p-4 rounded-lg shadow-black shadow-2xl md:flex md:items-center md:justify-between md:p-6 bg-white rounded-tr-sm ">

<div className='flex flex-row'>
          <img className='' src={gear} alt="" />
</div>

    <img className='' src={pottedPlant} alt="" />

    <img className='' src={windowPane} alt="" />
    <br></br>

</footer>
  )
}

export default Footer