import React from 'react';

import './Laurels.css';
import {SubHeading,MenuItem} from '..//..//components'
import {images,data} from '..//..//constants'

const AwardCard=({award:{imgUrl,title,subtitle}})=>{
    return(
      <div className='app__laurels_awards-card'>
        <img src={imgUrl} alt="image1" />
        <div className='app__laurels_awards-card_content'>
          <p className='p__cormorant' style={{color:'#DCCA87'}}>{title}</p>
          <p className='p__cormorant' style={{color:'#DCCA87'}}>{subtitle}</p>
        </div>
        <p></p>

       

      </div>
    )
  

}

function Laurels() {
  return (
    <div className='app__bg app__wrapper section__padding' id='awards '>
      <div className='app__wrapper_info'>

        <SubHeading title='Awards & recognization'/>
        <h1 className='headtext__cormorant'>Our Laurels</h1>

        <div className='app__laurels_awards'>
           {data.awards.map((awards)=><AwardCard award={awards} title={awards.title} />)}
        </div>

      </div>
      <div className='app__wrapper_img'>
        <img src={images.laurels} alt="laurel" />
      </div>
      
    </div>
  )
}




export default Laurels;
