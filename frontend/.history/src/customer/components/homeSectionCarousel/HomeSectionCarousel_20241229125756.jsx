 import  { useEffect, useState } from "react";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
// import HomeSectionCard from "../homeSectionCard/HomeSectionCard";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import { Button } from "@mui/material";
// import { product_details } from "../productData/productData";
// import { mens_kurta } from "../../../data/Men/men_kurta";
// import  { EventObject } from 'react-alice-carousel';


// const HomeSectionCarousel = ({ sectionName }) => {
//   // const [activeIndex, setActiveIndex] = useState(0);


//   const responsive = {
//     0: { items: 1 },
//     720: { items: 3 },
//     1024: { items: 5.5 },
//   };

// // const slidePrev = ()=>{setActiveIndex(activeIndex-1)
// //   console.log("inside prev",activeIndex)
// // };
// // const slideNext = ()=>{setActiveIndex(activeIndex+1)
// //   console.log("inside next",activeIndex)

// // };
  
// // const syncActiveIndex = ({item})=>{setActiveIndex(item)
// //   console.log("inside sync",activeIndex)

// // };

// const [activeIndex, setActiveIndex] = useState(0);
//  const items = mens_kurta.slice(0,10).map((item) => <HomeSectionCard product={item}/>);

//     // const [items] = useState(items_(5, [setActiveIndex]));

//     const slidePrev = () => setActiveIndex(activeIndex - 1);
//     const slideNext = () => setActiveIndex(activeIndex + 1);
//     const syncActiveIndexForSwipeGestures = (e) => setActiveIndex(e.item);

//     const onSlideChanged = (e) => {
//         syncActiveIndexForSwipeGestures(e);
//         console.debug(`onSlideChanged => Item's position after changes: ${e.item}. Event:`, e);
//     };

//     const onUpdated = (e) => {
//         console.debug(`onUpdated => Item's position after update: ${e.item}. Event:`, e);
//     };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold text-gray-700 text-left">
//         {sectionName}
//       </h2>

//       <div className=" relative p-4">
//         <AliceCarousel
//           disableDotsControls
//           disableButtonsControls
//           items={items}
//           activeIndex={activeIndex}
//           responsive={responsive}
//           onSlideChanged={onSlideChanged}
//           onUpdated={onUpdated}
//         />
//         {activeIndex!==items.length-5 && 
//          <Button
//             variant="contained"
//             className="z-50"
//             onClick={slideNext}
//             sx={{
//               position: "absolute",
//               top: "8rem",
//               right: "0rem",
//               transform: " translateX(50%)  rotate(90deg)",
//               bgcolor: "white",
//               color: "gray",
//             }}
//             aria-label="next"
//           >
//             <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color:"black" }} />
//           </Button>
//         }

//         {activeIndex !== 0 && 
//           <Button
//             variant="contained"
//             className="z-50"
//             onClick={slidePrev}
//             sx={{
//               position: "absolute",
//               top: "8rem",
//               left: "0rem",
//               transform: " translateX(-50%)  rotate(-90deg)",
//               bgcolor: "white",
//               color: "gray",
//             }}
//             aria-label="next"
//           >
//             <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
//           </Button>
//         }
//       </div>
//     </div>
//   );
// };

// export default HomeSectionCarousel;

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import type { EventObject } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const createItems = (length, [handleClick]) => {
    let deltaX = 0;
    let difference = 0;
    const swipeDelta = 20;

    return Array.from({ length }).map((item, i) => (
        <div
            data-value={i + 1}
            className="item"
            onMouseDown={(e) => (deltaX = e.pageX)}
            onMouseUp={(e) => (difference = Math.abs(e.pageX - deltaX))}
            onClick={() => difference < swipeDelta && handleClick(i)}
        >
            <span className="item-inner" />
        </div>
    ));
};

const HomeSectionCarousel = () => {
    const [activeIndex, setActiveIndex] = useState;
    const [items] = useState(createItems(5, [setActiveIndex]));

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);
    const syncActiveIndexForSwipeGestures = (e: EventObject) => setActiveIndex(e.item);

    const onSlideChanged = (e: EventObject) => {
        syncActiveIndexForSwipeGestures(e);
        console.debug(`onSlideChanged => Item's position after changes: ${e.item}. Event:`, e);
    };

    const onUpdated = (e: EventObject) => {
        console.debug(`onUpdated => Item's position after update: ${e.item}. Event:`, e);
    };

    return [
        <AliceCarousel
            mouseTracking
            disableDotsControls
            disableButtonsControls
            items={items}
            activeIndex={activeIndex}
            responsive={responsive}
            onSlideChanged={onSlideChanged}
            onUpdated={onUpdated}
        />,
        <div className="b-refs-buttons">
            <button onClick={slidePrev}>Prev</button>
            <button onClick={slideNext}>Next</button>
        </div>,
    ];
};