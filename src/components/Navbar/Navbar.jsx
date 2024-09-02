import React, { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import './Navbar.css';
import images from '../../constants/images'
import { useRef } from 'react';

const Navbar = () => {
  const [toggleMenue,setTuggleMenue]=useState(false )
  const navRef=useRef();
  const showNavbar=()=>{
    navRef.current.classList.toggle("responsive_nav")
  }

  return(
    <nav className="app__navbar">
      <div className='app__navbar-logo '>
        <img src={images.bg1} alt="Logo" />

      </div>

      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#about">About</a></li>
        <li className='p__opensans'><a href="#menu">Menu</a></li>
        <li className='p__opensans'><a href="#awards">Awards</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
        
      </ul>
      <div className='app__navbar-login'>
        <a href="#login" className='p__opensans'>Log In / Register</a>
        <div/>
        <a href="/" className='p__opensans'>Book Table</a>
      </div>
      
      <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>setTuggleMenue(true)}  ></GiHamburgerMenu>

      {/* heare is logic if tuggle menue true then only it work */}
      {toggleMenue &&(

          <div className='app__navbar-smallscreen_overlay flex_center side-bottom' >
          <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={()=>setTuggleMenue(false)}/>
        
          <ul className='app__navbar-smallscreen-links '>
            <li className='p__opensans'><a href="#home">Home</a></li>
            <li className='p__opensans'><a href="#about">About</a></li>
            <li className='p__opensans'><a href="#menu">Menu</a></li>
            <li className='p__opensans'><a href="#awards">Awards</a></li>
            <li className='p__opensans'><a href="#contact">Contact</a></li>
          </ul> 
        </div>


      )}

      </div> 




      

      


    </nav>
  )
};

export default Navbar;




