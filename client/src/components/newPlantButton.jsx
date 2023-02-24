import React from 'react'
import { useMutation } from "@apollo/client";
import { Navigate } from "react-router-dom";
import { ADD_PLANT } from '../utils/mutations'

const Button = () => {

    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-40 rounded" onClick={() => {
                console.log('clicked')
            }}>Button
            </button>

            <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-40 rounded" onClick={() => {
                console.log('clicked')
            }}>Button
            </button>
            <span>Testing something
                really really
                really
                really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really
                quick              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                really              really really
                reallyquick
            </span>
        </div>

    )
};

export default Button