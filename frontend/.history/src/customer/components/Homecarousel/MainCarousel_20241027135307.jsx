import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



const MainCarousel = () => {

    const items = MainCarousel.map((items) =>{
        <img src='items.image'/>
    })
   return(
    <AliceCarousel
       disableButtonsControls
        items={items}
       
    />
   )   
   
};

export default MainCarousel;
