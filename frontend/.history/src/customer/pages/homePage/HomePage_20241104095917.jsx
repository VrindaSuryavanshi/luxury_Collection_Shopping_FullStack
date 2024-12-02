import React from 'react'
import MainCarousel from '../../components/Homecarousel/MainCarousel'
import HomeSectionCarousel from '../../components/homeSectionCarousel/HomeSectionCarousel'

const HomePage = () => {
  return (
    <>
    <div className='p-t-4 '>
      <MainCarousel />
      
    </div>

    <div>
       <HomeSectionCarousel />
    </div>
    </>
    
  )
}

export default HomePage
