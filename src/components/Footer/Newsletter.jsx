import React from 'react';

import './Newsletter.css';

import SubHeading from '../SubHeading/SubHeading.jsx'

function Newsletter() {
  return (
    <div className='app__newsletter'>
      <div className='app__newsletter-heading'>
        <SubHeading title='Newsletter'/>
        <h1 className='headtext__cormorant'>Subscribe To Our Newsletter</h1>
        <p className='p__opensans'>And Never Miss Latest Updates!</p>
      </div>

      <div className='app__newsletter-input flex__center'>
        <input type="text" placeholder='Enter e-mail Address' />
        <button className='custom__button'>Subscribe Us</button>
      </div>
      
    </div>
  )
}




export default Newsletter;
