import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';



const MainCarousel = () => {
   
    const items = MainCarouselData.map(
        (items) => <img className ='cursor-pointer w-full' style={{height : 600}} role='presentation' src={items.image}  alt=''/> )
   return(<>
   <div className ="carousel">
   <AliceCarousel            
            disableButtonsControls
                items={items}
                autoPlay
                autoPlayInterval={1000}
                infinite
                        
            />


        
        </div>
    
   </>
    
    
   )   
   
};

export default MainCarousel;
