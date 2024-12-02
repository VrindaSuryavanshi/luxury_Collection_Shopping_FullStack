import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';



const MainCarousel = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 ,itemsFit: 'contain'},
    };
    const items = MainCarouselData.map(
        (items) => <img className ='cursor-pointer' role='presentation' src={items.image} width={200} alt=''/> )
   return(
    <AliceCarousel
       disableButtonsControls
        items={items}
        responsive={responsive}
    />
   )   
   
};

export default MainCarousel;
