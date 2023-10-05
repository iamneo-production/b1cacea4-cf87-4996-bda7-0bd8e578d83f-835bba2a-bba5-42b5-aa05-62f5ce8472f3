import React from 'react'
import Sidebar from '../Loginform/Sidebar';
import { Link } from 'react-router-dom';

import "./Home.css";
import { useSelector } from 'react-redux';
import { selectUser } from '../../../Redux/userSlice';


export default function Home() {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username : 'Guest';
  const facebookURL = "https://www.facebook.com/";
  const twitterURL = "https://twitter.com/home";
  const instagramURL = "https://www.instagram.com/";
  const linkedinURL="https://www.linkedin.com/login";
  return (
    <div className='pho'>
     
    <Sidebar/>
    <div className='head'>
    {username}
    </div>
    <div className='quotes'>
     Wilderness without wildlife is just scenery..
     
    <div className='footfull'>
       <footer>
       <div class="container">
       
       <div class="footer-content">
         <h3>ContactUs</h3>
         <p>Email:Info@example.com</p>
         <p>Phone:+121 56556 565556</p>
         <p>Address:Your Address 123 street</p>
      </div>
     
      <div class="footer-content">
        <h3>QuickLinks</h3>
         <ul class="list">
            <li><Link to='/'>Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">ContactUs</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Register</Link></li>
            <li><Link to ="/terms">Terms</Link></li>
            <li><Link to="/policy">Policy</Link></li>
         </ul>
     </div>
    
      <div class="footer-content">
        <h3>FollowUs</h3>
        <ul class="social-icons">
         <li><a href={facebookURL}><i class="fab fa-facebook"></i></a></li>
         <li><a href={twitterURL}><i class="fab fa-twitter"></i></a></li>
         <li><a href={instagramURL}><i class="fab fa-instagram"></i></a></li>
         <li><a href={linkedinURL}><i class="fab fa-linkedin"></i></a></li>
        </ul>
      </div>

      </div>
   
   <div class="bottom-bar">
    <p>&copy; 2023 your company . All rights reserved</p>
   </div>

   </footer>
 </div>
</div>
 </div>



    
   
  )
}
