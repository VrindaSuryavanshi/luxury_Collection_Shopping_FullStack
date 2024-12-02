import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';



const MainCarousel = () => {
   
    const items = MainCarouselData.map(
        (items) => <img className ='cursor-pointer h-auto max-w-full' role='presentation' src={items.image} width={300} alt=''/> )
   return(
    <AliceCarousel
       disableButtonsControls
        items={items}
        autoHeight 
    />
   )   
   
};

export default MainCarousel;
