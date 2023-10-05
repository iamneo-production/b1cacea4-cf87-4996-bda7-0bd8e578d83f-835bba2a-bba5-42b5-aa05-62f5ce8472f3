import React, { useState } from 'react'
import{Link,useNavigate}from 'react-router-dom';
import { login } from '../../../Redux/userSlice';
import { useDispatch } from 'react-redux';
import "./Login.css";
import Sidebar from '../Loginform/Sidebar';
import axios from 'axios';
export default function Login() 
{
    const[userName,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const details={userName,password}
    const navigate=useNavigate();
    const dispatch =useDispatch();
    const formHolder=(e)=>
    {
      e.preventDefault();
     
      if(userName.length==0 && password.length==0)
      {
        alert("Enter emailid and password")
      }
      else if(userName.length===0)
      {
        alert("Enter Emailid")
      }
      else if(password.length===0)
      {
        alert("Enter Password");
      }
      else if (userName && password) 
      {
        dispatch(login(userName));
        axios.post("http://localhost:8080/postUser",details)
        navigate("/");
      }
         
    }
    
  return(

  
   
    <div className="containerlogin">
    <Sidebar/>
    <div className="banner">
      
    </div>
    <form onSubmit={formHolder}>
    <div className="form">
      <img src="https://i.pinimg.com/236x/4d/a8/bb/4da8bb993057c69a85b9b6f2775c9df2.jpg" alt="profile" />
      <small>Need an Account? <Link to="/signup" className='aa'>Sign Up</Link></small>
     
      <input type="text" value={userName} autoComplete placeholder="UserName" onChange={(e)=>setUsername(e.target.value)}/>
      <input type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
     
      <button>Sign In</button><br>
      </br>
      <aa></aa>
      </div>
      </form>
      </div>

);
  }


