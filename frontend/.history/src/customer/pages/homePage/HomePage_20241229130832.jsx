import React from "react";
import MainCarousel from "../../components/Homecarousel/MainCarousel";
import HomeSectionCarousel from "../../components/homeSectionCarousel/HomeSectionCarousel";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />

      <div className="space-y-4 py-10 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel sectionName={"Women T-shirt"} />
        <HomeSectionCarousel sectionName={"Men's T-shirt"} />
        <HomeSectionCarousel sectionName={"Women's kurtas"} />
        <HomeSectionCarousel sectionName={"Men Shoes"} />
        <HomeSectionCarousel sectionName={"Women's saree"} />
      </div>
    </div>
  );
};

export default HomePage;
