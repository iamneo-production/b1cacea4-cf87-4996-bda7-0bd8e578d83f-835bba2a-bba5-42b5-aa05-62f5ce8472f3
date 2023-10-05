import React from 'react'
import"./Terms.css";
import Sidebar from '../Loginform/Sidebar';
import * as BsIcons from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
export default function Terms() {
  
  return (
    <div>
    <Sidebar/>

    <div className='tc_full'>
    <div className='wrapper flex_align_justify'>
        <div className='terms_condition'>
            <div className='tc_item tc_head flex_align_justify'>
                <div className='tc_icon'>
                <span className='tc_icon1'><BsIcons.BsTerminal/></span>
                </div>
                <div className='tc_text'>
                   <h2>TERMS OF SERVICE</h2>
                   <p>Last update on August 11 2023</p>
                </div>
            </div>
            <div className='tc_item tc_body'>
                <ol>
                   <li>
                      <h3>1.Terms of use</h3>
                      <p>By accessing and using this website, you agree to comply with and be bound by these terms and conditions.</p>
                   </li>
                   <li>
                      <h3>2.Services Offered</h3>
                      <p>We provide online wildlife watching tour booking services. By booking a tour through this website, you acknowledge that you have read and understood the specific tour details and requirements.</p>
                   </li>
                   <li>
                      <h3>3.Privacy Policy</h3>
                      <p>We collect and use personal information in accordance with our Privacy Policy. By using our website and services, you consent to the collection and use of your data as described therein.</p>
                   </li>
                   <li>
                      <h3>4.Intellectual Property</h3>
                      <p>All content on this website, including text, images, logos, and trademarks, is the property of our website. You may not reproduce, distribute, or use any content without our written permission.</p>
                   </li>
                   <li>
                      <h3>5.Changes to Terms and Conditions</h3>
                      <p>We reserve the right to modify these terms and conditions at any time without prior notice. Updated terms will be effective immediately upon posting on our website.</p>
                   </li>
                   <li>
                      <h3>6.Governing Laws</h3>
                      <p>These terms and conditions are governed by and construed in accordance with the laws of High Court. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts </p>
                   </li>
                </ol>
                <div className='tc_accept'>
             <input type='radio' id='tc_accept'/>
             <label>I accept the <a href="#">terms and conditions</a></label>
        </div>
            </div>

            <div className='tc_item tc_foot flex_align'>
                 <button className='tc_decline_btn'><Link to='/login'>Decline</Link></button>
                 <button className='tc_accept_btn'><Link to='/'>Accept</Link></button>
            </div>
        </div>
    </div>
    </div>
    
    </div> 
  )
}
