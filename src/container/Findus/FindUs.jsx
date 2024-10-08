import React from 'react';
import {SubHeading} from '../../components'
import {images} from '../../constants'

function FindUs() {
  return (
    <div className='app__bg app__wrapper section__padding' id='contact'>

      <div className='app__wrappe_info'>

        <SubHeading title="Contact"/>

        <h1 className='headtext__cormorant' >Find Us</h1>
        <div className='app__wrapper-content'>
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className='p__cormorant' style={{color:'#DCCA87', margin:'2rem ,0'}}>Opening Hours</p>
          <p className='p__cormorant' style={{color:'#DCCA87', margin:' 2rem ,0'}}>Mon-Fri: 10:00 am - 02:00 am</p>
          <p className='p__cormorant' style={{color:'#DCCA87', margin:'2rem ,0'}}>Sat-Sun: 10:00 am- 03:00 am</p>
        </div>
        <button className='custom__button' style={{margin:'2rem , 0'}}>Visit Us</button>
      </div>
      <div className='app__wrapper_img'>
          <img src={images.findus} alt="findus"/>
      </div>
      
    </div>
  )
}

export default FindUs


