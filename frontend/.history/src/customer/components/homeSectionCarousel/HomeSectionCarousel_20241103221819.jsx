import React from 'react'

const HomeSectionCarousel = () => {
  return (
    <div>
      <AliceCarousel
          disableButtonsControls
          items={items}
          autoPlay
          autoPlayInterval={1000}
          infinite
        />
    </div>
  )
}

export default HomeSectionCarousel
