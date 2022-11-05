import React from 'react'
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

const NavBar = () => {
  return (
    
<nav className="z-50 fixed w-full h-[80px] flex items-center px-4 bg-green-300 text-gray-300 rounded-b-3xl ">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex justify-between">
      <div className="flex space-x-7">
        <div>
          <Link  to="/" className="flex items-center py-4 px-2">
            <Icon icon='tabler:plant-2' className='mx-4' width='2.5rem' height='2.5rem' color='white'/>
            <span className="md:p-2 lg:px-4 font-semibold block text-green-50 text-5xl py-1 text-center"> A New Leaf </span>
            </Link>
        </div>
        <div className="hidden md:flex items-center space-x-1">
          <Link to="/signup" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"> Sign-Up </Link>
          <Icon icon="tabler:user-circle" className='mx-4' width='2.5rem' height='2.5rem'  color='white'/>
        </div>
      </div>
    </div>
  </div>
</nav>
  )
}

export default NavBar