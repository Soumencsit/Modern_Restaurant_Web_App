import React, { useRef, useState } from 'react';

import './Intro.css';
import {BsFillPlayFill,BsPauseFill} from 'react-icons/bs' 

import {meal} from '..//../constants'

function Intro() {
  const [playVideo,setPlayVideo]=useState(false)
  const vidRef=useRef();

  const handleVideo=()=>{
     setPlayVideo((prevPlayvideo)=>!prevPlayvideo)
      if(playVideo){
        vidRef.current.pause();
      }
      else{
        vidRef.current.play();
      }

    
  }

  return (
    <div className='app__video'>
      <video src={meal}
      ref={vidRef}
      typeof='video.mp4'
      loop
      controls={false}
      muted
      />
      <div className='app__video-overlay flex__center '>
        <div className='app__video-overlay_circle flex__center' 
        onClick={handleVideo}>

          {playVideo? <BsPauseFill color='#fff' fonstSize={30}/> : <BsFillPlayFill/>}
          
        </div>
        
      </div>
      
    </div>
  )
}




export default Intro;
