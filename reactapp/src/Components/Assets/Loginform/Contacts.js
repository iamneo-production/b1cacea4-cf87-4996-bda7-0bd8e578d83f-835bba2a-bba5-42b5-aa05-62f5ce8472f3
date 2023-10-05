import React from 'react'
import "./Contacts.css";
import Sidebar from '../Loginform/Sidebar';
import { Link, useNavigate } from 'react-router-dom';
export default function Contacts() {
  
  return (
    <div>
    <Sidebar/>
    <div className='panda'>
   
          <div className="hea">GET IN TOUCH
     
          <div className="inn">
          
            <div className="sect">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="E-mail" />
              <textarea placeholder="Write your message..." defaultValue={""} />
              <button type='submit'class="but1"><Link to='/'>send</Link></button>
            </div>
           
          </div>
        </div>
        </div>
      </div>
   
   
  )
}
