import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../homeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarousel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = [1, 1, 1, 1, 1, 1].map((item) => <HomeSectionCard />);
  return (
    <div className="relative px-4 lg:px-8 bg-green-400">
      <div className=" relative  p-5 bg-gray-400">
        <AliceCarousel
          disableButtonsControls
          items={items}
          infinite
          responsive={responsive}
        />
        <Button
          variant="contained"
          className="z-50 absolute bg-slate-500"
          sx={{
            position: 'absolute',
            top: "80rem",
            right: "10rem",
            transform: " translateX(50%) rotate(90deg)"            
          }}
          color="white"
          aria-label="next"
        >
          <KeyboardArrowLeftIcon  sx={{ transform : "rotate(-90deg)"}}/>
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
