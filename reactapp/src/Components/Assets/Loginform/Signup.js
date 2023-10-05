

import React, { useState } from 'react'
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function()
{
const[firstName,setFirstname]=useState(''); 
const[lastName,setLastname]=useState(''); 
const[email,setEmail]=useState(''); 
const[password,setPassword]=useState(''); 
const[confirmPassword,setConfirmpassword]=useState(''); 
const[mobileNo,setPhoneno]=useState(''); 
const details={firstName,lastName,email,password,confirmPassword,mobileNo}
const navigate=useNavigate();
 const formHolder=(event)=>
 {
    axios.post("http://localhost:8080/postRegister",details)
    navigate("/")
 }
return (
<div>
<div className='ima'>

<div className='rectangle22'></div>
<div className='head22'>
<p>SIGNUP</p>
</div>
<div className='form22'>

<form onSubmit={formHolder}>
<label for="firstname">
<input type="text200" value={firstName} placeholder="FirstName	"onChange={(e)=>setFirstname(e.target.value)}/></label><br/><br/>

<label for="lastname">
<input type="text200" value={lastName} placeholder="LastName	"onChange={(e)=>setLastname(e.target.value)}/></label><br/><br/>

<label for="email">
<input type="text200" value={email} placeholder="Email"onChange={(e)=>setEmail(e.target.value)} /></label><br/><br/>


<label for="password">
<input type="text200" value={password} placeholder="Password"onChange={(e)=>setPassword(e.target.value)}/></label><br/><br/>

<label for="confirmpassword">
<input type="text200" value={confirmPassword} placeholder="Confirm Password	"onChange={(e)=>setConfirmpassword(e.target.value)}/></label><br/><br/><br/>

<label for="phoneno">
<input type="text200" value={mobileNo} placeholder="PhoneNo"onChange={(e)=>setPhoneno(e.target.value)}/></label><br/><br/>

<button type="submit" class="but22"><Link to='/'>Create Account</Link></button>
</form>
</div>
</div>
</div>
)
}