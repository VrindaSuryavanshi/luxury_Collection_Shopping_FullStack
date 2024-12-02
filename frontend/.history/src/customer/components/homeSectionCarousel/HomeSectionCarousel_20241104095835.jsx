import React from 'react'
import HomeSectionCard from '../homeSectionCard/HomeSectionCard';

const HomeSectionCarousel = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const items = [1,1,1,1,1,1].map((item) => <HomeSectionCard />)
  return (
    <div>
      <AliceCarousel
          disableButtonsControls
          items={items}
          autoPlay
          autoPlayInterval={1000}
          infinite
          responsive={responsive}
        />
    </div>
  )
}

export default HomeSectionCarousel
