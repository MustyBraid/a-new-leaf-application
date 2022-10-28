import React from 'react'


const NavBar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-green-300 text-gray-300 rounded-b-3xl'>
     {/* navbar */}
     <h1 className='md:p-2 lg:px-4 font-semibold block text-green-50 text-3xl py-1 absolute right-0'>A New leaf</h1>
    </div>
  )
}

export default NavBar