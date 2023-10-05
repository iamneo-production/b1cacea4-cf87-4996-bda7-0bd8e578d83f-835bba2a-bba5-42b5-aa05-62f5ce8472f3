import React from 'react'
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";

import * as AiIcons from "react-icons/ai";

import './Sidebar.css';

export default function className () {
  return (
    <div>
      <div className='full22'>
          
           <div class="navbar">
              <div class="menu">
               <ul>

                  <li><Link to='/'>HOME</Link></li>
                  <li><Link to='/about'>ABOUT</Link></li>
                  <li><Link to='/contact'>CONTACTUS</Link></li>
                  <li><Link to='/login'>LOGIN</Link></li>
                  <li><Link to='/signup'>REGISTER</Link></li>
                </ul>
             </div>
          </div>
        
          
          <input type='checkbox' id="check"/>
          <label for="check">
          <div id='menubar'><FaIcons.FaBars/></div>
          <div id='close'><AiIcons.AiOutlineClose/></div>
          </label>
      
      
          <div className="sidebar">
            <h2>My App</h2>
            <ul>
              <li><Link to='/place'>Place</Link></li>
              <li><Link to="/animal">Animals</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/video">Video</Link></li>
              <li><Link to="/login">Logout</Link></li>
              <li><Link to="/feedback">Feedback</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

      </div>

    
    
    </div>
   
    
  )
}