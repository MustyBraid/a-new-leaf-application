import React, {useState} from 'react'
import { useMutation } from "@apollo/client";
import { Navigate } from "react-router-dom";
import Auth from "../utils/auth";

import {ADD_USER} from '../utils/mutations'

const SignUp = () => {
  const [email, setEmail] = useState('')  
  const [password, setPassword] = useState('')  
  const [name, setName] = useState('')
  const [redirect, setRedirect ] = useState(false)
  const [signup_user, {error, data}] = useMutation(ADD_USER)
  
  async function handleSignup(){
    console.log("signing up")
    try{
      if (email !== '' && password !== '' && name !== ''){
        let {data} =  await signup_user ({
          variables:{
            email,
            password,
            name
          }
        })
        const {token, user} = data.addUser
        Auth.login(token)
        setRedirect(true)
        console.log(data)
        return <Navigate to = "/main"/>
      }
    }
    catch(e){
      console.error(e);
    }
    
  }
  
  return (
<div className="signup-1 flex items-center relative h-screen">
  
  <div className="overlay absolute inset-0 z-0 bg-black opacity-75"></div>
  <div className="container px-4 mx-auto relative z-10">
    <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mx-auto">
      <div className="box bg-white p-6 md:px-12 md:pt-12 border-t-10 border-solid border-indigo-600 rounded-2xl">
        <h2 className="text-3xl text-gray-800 text-center">Create Your Account</h2>

        <div className="signup-form mt-6 md:mt-12">

          <div className="border-2 border-solid rounded flex items-center mb-4">
            <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
              <span className="far fa-user text-gray-500"></span>
            </div>
            <div className="flex-1">
              <input type="text" placeholder="Username" className="h-10 py-1 pr-3 w-full"  onChange={(e)=>setName(e.target.value)} value={name}/>
            </div>
          </div>

          <div className="border-2 border-solid rounded flex items-center mb-4">
            <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
              <span className="far fa-envelope text-gray-500"></span>
            </div>
            <div className="flex-1">
              <input type="text" placeholder="Email" className="h-10 py-1 pr-3 w-full"  onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </div>
          </div>

          <div className="border-2 border-solid rounded flex items-center mb-4">
            <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
              <span className="fas fa-asterisk text-gray-500"></span>
            </div>
            <div className="flex-1">
              <input type="password" placeholder="Password" className="h-10 py-1 pr-3 w-full"  onChange={(e)=>setPassword(e.target.value)} value={password}/>
            </div>
          </div>


          <div className="text-center mt-6 md:mt-12">
            <button className="bg-green-500 hover:bg-green-700
            text-white text-xl py-2 px-4 md:px-6 rounded-xl 
            transition-colors duration-300" onClick={handleSignup}>Sign Up 
            <span className="far fa-paper-plane ml-2"></span></button>
          </div>

        </div>

        <div className="border-t border-solid mt-6 md:mt-12 pt-4">
          <p className="text-gray-500 text-center">Already have an account?
           <a href="/" className=" text-green-700 hover:underline"> Sign In</a></p>
        </div>

      </div>
    </div>
  </div>
</div>
  )
}

export default SignUp