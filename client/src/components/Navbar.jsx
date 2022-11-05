import React from 'react'
import lotusFlowerLogo from '../assets/lotus-flower-logo.png';
import UserIcon from '../assets/UserIcon.png';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    
<nav className="fixed w-full h-[80px] flex items-center px-4 bg-green-300 text-gray-300 rounded-b-3xl ">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex justify-between">
      <div className="flex space-x-7">
        <div>
          <Link  to="/" className="flex items-center py-4 px-2">
            <img src={lotusFlowerLogo} alt="Logo" className="h-10 w-10 opacity-25 float-right block" />
            <span className="md:p-2 lg:px-4 font-semibold block text-green-50 text-5xl py-1 text-center"> A New Leaf </span>
            </Link>
        </div>
        <div className="hidden md:flex items-center space-x-1">
          <Link to="/signup" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"> Sign-Up </Link>
          <img className="h-10 w-10 opacity-25 block" src={UserIcon} alt="" />
        </div>
      </div>
    </div>
  </div>
</nav>
  )
}

export default NavBar