import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';



const MainCarousel = () => {
   
    const items = MainCarouselData.map(
        (items) => <img className ='cursor-pointer h-100 w-full' role='presentation' src={items.image}  alt=''/> )
   return(
    <AliceCarousel
       disableButtonsControls
        items={items}
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
   )   
   
};

export default MainCarousel;
