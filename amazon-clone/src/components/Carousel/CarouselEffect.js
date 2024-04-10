import React from 'react'
import classes from './Carousel.module.css'
import {img} from './img/data';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function CarouselEffect() {
  return (
    <div>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showIndicators={false}
          showThumbs={false}
        >
            {
                img.map((imageItemLink)=>{
                    return <img src={imageItemLink} style={{width:"100%",height:"550px"}}/>
                })
            }
            
        </Carousel>
        <div className={classes.hero_img}></div>

      
    </div>
  )
}

export default CarouselEffect
