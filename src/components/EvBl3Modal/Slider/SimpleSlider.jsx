import React, { useRef } from 'react'
import Slider from "react-slick";
import styles from '../Slider/SimpleSlider.module.css'
import "./slick.css"; 
import "./slick-theme.css";
import { useState } from 'react';

export const SimpleSlider = ({items , id, open}) => {
  const array = []
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };
  
  const slider = React.useRef(null);
  //items.forEach(item => {
  //  array.push(item.id)
  //});
  //console.log(array)
  //array.forEach(item=> {
  //  id == array[item] ? items.unshift(items[id-1]).splice(id,1) : console.log('error')
  //})
  console.log(items)
  return (
    <div className={styles.container} >
        
        
        { items.splice(0, 0, items.splice(id, 1)[0])}
        
        
          <div className='LeftArrow' onClick={() => slider?.current?.slickPrev()}></div>
          <div className='RightArrow' onClick={() => slider?.current?.slickNext()}></div>
        <Slider ref={slider} {...settings}>
          {items.map(item=> (
                    <div key={items.id}>
                      
                        <div  
                        className={styles.image} 
                        style={{backgroundImage:`url(../${item.img})`}}>
                        </div>
                      </div>
                      ))}
        </Slider>
      </div>
  )
}
