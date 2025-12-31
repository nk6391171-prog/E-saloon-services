import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const navigate=useNavigate();

  function handlEmailChange(event){
    setEmail(event.target.value)
  }
  function handlPasswordChange(event){
    setPassword(event.target.value)

    }
function logibtn(event){
  event.preventDefault();

  navigate     ('/home');
  alert("login succesfull")
}

  
  return (
    <div>
      <form>
        <h1>Login</h1>
        <label>Email</label>
        <input type='email' placeholder='Enter your Email' value={email} onChange={handlEmailChange}/>

        <label>password</label>
        <input type='password' placeholder='Enter your password' value={password}onChange={handlPasswordChange}/>

        <button onClick={logibtn}>Login</button>
      </form>
      
    </div>
  )
}

export default Login
