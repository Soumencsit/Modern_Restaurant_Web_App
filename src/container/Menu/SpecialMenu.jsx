import React from 'react';

import './SpecialMenu.css';
import images from '../../constants/images';
import data from '../../constants/data'
import {SubHeading,MenuItem} from '../../components'

function SpecialMenu() {
  return (
    <div className="app__specialMenu flex__center section__padding ">
      <div className='app__specialMenu-title flex__center section__padding'>
        <SubHeading title="Menu That Fits You Palatte"/>
        <h1 className='headtext__cormorant'>Today Special</h1>
      </div>
      
      <div className='app__specialMenu-menu'>
        <div className='app__specialMenu-menu_wine flex__center'>
          <p className='app__specialMenu_menu-heading '>Wine & Beer</p>
          <div className='app__specialMenu_menu_items  flex__center'>
            {data.wines.map((wine,index)=>(
               <MenuItem key={wine.title +index} price={wine.price} title={wine.title} tags={wine.tags}/>
             
            ))}
          </div>
         
        </div>
        <div className='app__specialMenu-menu_img'>
            <img src={images.menu} alt="menu item" />
        </div>

        <div className='app__specialMenu-menu_cocktails flex__center'>
          <p className='app__specialMenu_menu-heading'>Cocktails</p>
          <div className='app__specialMenu_menu_items  flex__center'>
            {data.cocktails.map((cocktails,index)=>(
             
             <MenuItem key={cocktails.title +index} price={cocktails.price} title={cocktails.title} tags={cocktails.tags}/>
            ))}
          </div>

         
        </div>





      </div>
      <div className=' mt-15 '>
        <button type='buttom' className='custom__button'>View More</button>
      </div>
      
    </div>
  )
}




export default SpecialMenu;
