import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';



const MainCarousel = () => {
   
    const items = MainCarouselData.map(
        (items) => <img className ='cursor-pointer max-h-full max-w-full' role='presentation' src={items.image}  alt=''/> )
   return(
    <AliceCarousel
       disableButtonsControls
        items={items}
        autoHeight 
        autoPlay
        autoPlayInterval={1000}
        infinite
        
    />
   )   
   
};

export default MainCarousel;
