import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../homeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";

const HomeSectionCarousel = () => {

    const [activeIndex ,setActiveIndex]  = useState(0);
    
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const items = [1, 1, 1, 1, 1, 1,1,1,1,1,1,1].map((item) => <HomeSectionCard />);

  const slidePrev=()=>setActiveIndex(activeIndex-1);
  const slideNext=()=>setActiveIndex(activeIndex+1);

  const syncActiveIndex = (item)=>setActiveIndex(item)
  return (
    <div className="relative px-4 lg:px-8">
      <div className=" relative  p-5">
        <AliceCarousel
          disableButtonsControls
          items={items}
          infinite
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
     {activeIndex !== items.length && <Button variant="contained" className="z-50"
     onClick={slideNext}
      sx={{position :'absolute', top:"8rem" , right:"0rem" , transform:" translateX(50%)  rotate(90deg)" ,bgcolor:"white" , color:"gray"}}
      aria-label="next">
        <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)"}}/>
     </Button>}

    { activeIndex !==0 && <Button variant="contained" className="z-50"
     onClick={slidePrev}
      sx={{position :'absolute', top:"8rem" , left:"0rem" , transform:" translateX(-50%)  rotate(-90deg)" ,bgcolor:"white" , color:"gray"}}
      aria-label="next">
        <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)"}}/>
     </Button>
}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
