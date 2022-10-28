import React from 'react'
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-neutral-900 text-gray-300'>
     {/* navbar */}
     <ul className='hidden md:flex'>
         <li className='tracking-widest px-4 cursor-pointer text-slate-400 hover:text-zinc-300'>
            <Link to='home' smooth={true} duration={500}> Home </Link>
         </li>
         <li className='tracking-widest px-4 cursor-pointer text-slate-400 hover:text-zinc-300'>
            <Link to='about' smooth={true} duration={500}> About </Link>
         </li>
         <li className='tracking-widest px-4 cursor-pointer text-slate-400 hover:text-zinc-300'>
            <Link to='skills' smooth={true} duration={500}> Skills </Link>
         </li>
         <li className='tracking-widest px-4 cursor-pointer text-slate-400 hover:text-zinc-300'>
            <Link to='work' smooth={true} duration={500}> Work </Link>
         </li>
         <li className='tracking-widest px-4 cursor-pointer text-slate-400 hover:text-zinc-300'>
            <Link to='contact' smooth={true} duration={500}> Contact </Link>
         </li>
      </ul>
    </div>
  )
}

export default NavBar