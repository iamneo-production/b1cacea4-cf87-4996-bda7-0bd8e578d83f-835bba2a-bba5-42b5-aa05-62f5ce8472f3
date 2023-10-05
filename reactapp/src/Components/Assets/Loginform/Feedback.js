import React from 'react'
import "./Feedback.css";
import Sidebar from '../Loginform/Sidebar';
import { Link, useNavigate } from 'react-router-dom';
export default function Feedback() {
  
  return (
    <div>
    
       <div class="bgimg">
       <Sidebar/>
       <img src="https://wallpapers.com/images/hd/wild-animals-background-8nzaktwqhkpx93qb.jpg"  height="860px" width="1536px"></img>
       </div>

       <div class="rectangle666"></div>
       <div class="head666">
       <p><b>FEED BACK</b></p>
       </div>
       <div class="yn">
         <p>Yes<br/>
            No</p>
       </div>
       <div class="ot">
        <p>1<br/>
        2<br/>
        3<br/>
        4<br/>
        5<br/></p>
       </div>

       <div class="form666">
        
              <lable for="name">1.Where did you hear about us?</lable>
              <br/>
              <br/>
              <input type="text6666" name="name"/>
              <br/>
              <br/>
              <label for="sas">2.Are you satisfied with this app?</label>
              <br/>
              <input type="radio" name="sas" value="yes"/>
              <input type="radio" name="sas" value="no" />
              <br/>
              <br/>
              <lable for="better">3.How can we make this better?</lable>
              <br/>
              <br/>
              <input type="text6666" name="better"/>
              <br/>
              <br/>
              <label for="rate">4.How much you are satisfied with our app</label>
              <br/>
              <input type="radio" name="rate" value="1"/>
              <input type="radio" name="rate" value="2" />
              <input type="radio" name="rate" value="3" />
              <input type="radio" name="rate" value="4" />
              <input type="radio" name="rate" value="5" />
              <br/>
              <br/>
              <div class="but666">
              <button class="abi666" type="submit"><b><Link to='/'>SUBMIT</Link></b></button>
              </div>

              
       </div>

    </div>
  )
}
   
