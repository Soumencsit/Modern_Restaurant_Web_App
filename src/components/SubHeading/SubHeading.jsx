import React from 'react';
import images from '../../constants/images';





function SubHeading({title}) {
 
  return (
    <div className=''>
      <p className='p__cormorant'>{title}</p>
     <img src={images.spoon} alt="spoon" className='spoon__img' />

      
    </div>
  )
}

export default SubHeading



