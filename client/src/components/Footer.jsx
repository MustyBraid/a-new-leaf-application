import React from 'react'
import gear from '../assets/gear.png';
import pottedPlant from '../assets/potted-plant-icon.png';
import windowPane from '../assets/windowPane.png';

import { Icon } from '@iconify/react';

const Footer = () => {
  return (
<footer className="flex-row justify-center p-4 rounded-lg shadow-black shadow-2xl  bg-white rounded-tr-sm ">

<div className='flex justify-center items-center'>
    <div className='flex space-x-52'>
    
    <Icon icon='tabler:plant' width='2.5rem' height='2.5rem' color='D1D5DB' alt="potted plant foote" />
    <Icon icon='tabler:window' width='2.5rem' height='2.5rem' color='D1D5DB' alt="window pane footer" />
    <Icon icon='tabler:settings' width='2.5rem' height='2.5rem' color='D1D5DB' alt="gear Icon footer" />

    </div>
</div>
</footer>
  )
}

export default Footer