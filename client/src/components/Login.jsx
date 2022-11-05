import React, {useState} from 'react'
import { useMutation, useQuery } from "@apollo/client";
import { Navigate } from "react-router-dom";
import Auth from "../utils/auth";

import {LOGIN_USER} from '../utils/mutations'

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect ] = useState(false)
  const [login_user, {error, data}] = useMutation(LOGIN_USER)

  async function handleLogin(email, password,e) {
    console.log(email,password)
    e.preventDefault()
    
  
    try{
      if (email != "" && password != ""){
        let {data} = await login_user({
          variables:{
            email, password
          }
        })
        const {token, user} = data.login
        Auth.login(token)
        setRedirect(true)
      }
    }
    catch(e){
      console.error(e);
    }
  }

  return (
<body className="antialiased bg-gray-200 text-gray-900 font-sans">
  {redirect?<Navigate to = "/main" replace={false}/>:null}
    <div className="flex items-center h-screen w-full">
      <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto rounded-3xl">
      <span className="block w-full text-xl uppercase font-bold mb-4">Login</span>      
        <form className="mb-4" action="/" method="post">
        <div className="border-2 border-solid rounded flex items-center mb-4">
            <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
              <span className="far fa-envelope text-gray-500"></span>
            </div>
            <div className="flex-1">
              <input type="text" placeholder="Email" className="h-10 py-1 pr-3 w-full" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </div>
          </div>
          <div className="border-2 border-solid rounded flex items-center mb-4">
            <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
              <span className="fas fa-asterisk text-gray-500"></span>
            </div>
            <div className="flex-1">
              <input type="password" placeholder="Password" className="h-10 py-1 pr-3 w-full" onChange={(e)=>setPassword(e.target.value)} value={password}/>
            </div>
          </div>
          <button className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded-lg" onClick={(e)=>{handleLogin(email,password, e)}}>Login</button>
        </form>
    </div>
  </div>
</body>
  )
}





export default SignUp