import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';



const MainCarousel = () => {
   
    const items = MainCarouselData.map(
        (items) => <img className ='cursor-pointer w-full h-5/6' role='presentation' src={items.image}  alt=''/> )
   return(
    <AliceCarousel
    className ="carousel"
       disableButtonsControls
        items={items}
        autoPlay
        autoPlayInterval={1000}
        infinite
     h-10
    />
   )   
   
};

export default MainCarousel;
