 import  { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../homeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
import { product_details } from "../productData/productData";
import { mens_kurta } from "../../../data/Men/men_kurta";
import  { EventObject } from 'react-alice-carousel';


const HomeSectionCarousel = ({ sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };



 const items = mens_kurta.slice(0,10).map((item) => <HomeSectionCard product={item}/>);


    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);
    const syncActiveIndexForSwipeGestures = (item) => setActiveIndex(item);


  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-700 text-left">
        {sectionName}
      </h2>

       <div className=" relative p-4">
         <AliceCarousel
           disableDotsControls
           disableButtonsControls
           items={items}
           activeIndex={activeIndex}
           responsive={responsive}
           onSlideChanged={syncActiveIndexForSwipeGestures}
        />
        {activeIndex!==items.length-5 && 
         <Button
            variant="contained"
            className="z-50"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: " translateX(50%)  rotate(90deg)",
              bgcolor: "white",
              color: "gray",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color:"black" }} />
          </Button>
        }

        {activeIndex !== 0 && 
          <Button
            variant="contained"
            className="z-50"
            onClick={slidePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: " translateX(-50%)  rotate(-90deg)",
              bgcolor: "white",
              color: "gray",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
          </Button>
        }
      </div>
    </div>
  );
};

 export default HomeSectionCarousel;

