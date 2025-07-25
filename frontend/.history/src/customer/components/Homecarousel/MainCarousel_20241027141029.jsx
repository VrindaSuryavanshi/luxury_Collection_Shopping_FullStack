import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';



const MainCarousel = () => {
   
    const items = MainCarouselData.map(
        (items) => <img className ='cursor-pointer' role='presentation' src={items.image} width="" alt=''/> )
   return(
    <AliceCarousel
       disableButtonsControls
        items={items}
        
    />
   )   
   
};

export default MainCarousel;
