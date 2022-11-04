import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
const userSettingsPage = () => {
    
  return (
    <div className="w-full h-screen bg-white text-zinc-400">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
                <h3 className="text-sm font-medium leading-6 text-gray-700">User Account</h3>
                <p className="mt-1 text-lg text-gray-500">
                Add below any addtional information for your personal settings.
                </p>
            </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
                <div className=" rounded-xl shadow overflow-hidden sm:rounded-xl">
                <div className="px-4 py-5 bg-zinc-50 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <label for="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
                        <input type="text" name="first_name" id="first_name" autocomplete="given-name" className="mt-1 focus:ring-green-700 focus:border-green-700 block w-full shadow-sm sm:text-sm border-green-700 rounded-md" />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label for="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input type="text" name="last_name" id="last_name" autocomplete="family-name" className="mt-1 focus:ring-green-700 focus:border-green-700 block w-full shadow-sm sm:text-sm border-green-700 rounded-md" />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                        <label for="favorite_plant" className="block text-sm font-medium text-gray-700">Favorite plant</label>
                        <input type="text" name="email_address" id="email_address" autocomplete="email" className="mt-1 focus:ring-green-700 focus:border-green-700 block w-full shadow-sm sm:text-sm border-green-700 rounded-md" />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label for="country" className="block text-sm font-medium text-gray-700">Country</label>
                        <select id="country" name="country" autocomplete="country" className="rounded-xl mt-1 block w-full py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-green-700 focus:border-green-700 sm:text-sm">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Brazil</option>
                        <option>Japan</option>
                        <option>Iran</option>
                        <option>Germany</option>
                        <option>Israel</option>
                        <option>Mexico</option>
                        <option>Finland</option>
                        </select>
                    </div>
                    <div className="col-span-6">
                        <label for="email_address" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="text" name="street_address" id="street_address" autocomplete="street-address" className="mt-1 focus:ring-border-green-700 focus:border-green-700 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label for="city" className="block text-sm font-medium text-gray-700">User Display Name</label>
                        <input type="text" name="city" id="city" className="mt-1 focus:ring-border-green-700 focus:border-green-700 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="submit" method="POST"
                    className="flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-xl text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-border-green-700">
                    Save
                    </button>
                </div>
                </div>
            </form>
            </div>
            <h5 className='mx-auto p-10 justify-center'>Made with <FaRegHeart className='inline-block'/> <a href="https://github.com/BillyFletcher99/a-new-leaf-application">A new leaf</a> </h5>
        </div>
    </div>
  )
}


export default userSettingsPage
