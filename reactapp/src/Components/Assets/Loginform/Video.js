import React from 'react'
import"./Video.css";
import Sidebar from '../Loginform/Sidebar';
import ReactPlayer from 'react-player/lazy'
export default function Viedo() {
  return (
    <div>
    <Sidebar/>
    <div className='player-wrapper'>
       <ReactPlayer className='react-player'
        controls={true}
         url='https://www.youtube.com/watch?v=AhP5Tg_BLIk'
         width='90%'
         height='700px'
       />
     </div> 
    </div>
  )
}
