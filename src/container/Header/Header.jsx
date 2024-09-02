import React from 'react';
import {SubHeading} from '../../components' 
import './Header.css';
import images  from '../../constants/images';


const Header = () => (
  <div className='app__header app__wrapper section__padding ' id='home'>
    <div className='app__wrapper_info'>

      <SubHeading title="Chase the new flavour"/>
      <h1 className='app__header-h1'>The Key to find Dining</h1>
      <p className=' p__opensans '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere itaque voluptate recusandae eaque optio quisquam totam consequatur officia eos dignissimos.</p>
      <button type="button" className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img' >
      <img src={images.welcome} alt="welcome" />

    </div>
   
  </div>
);

export default Header;
