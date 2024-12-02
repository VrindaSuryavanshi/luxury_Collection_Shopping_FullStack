import React from 'react'
import MainCarousel from '../../components/Homecarousel/MainCarousel'
import HomeSectionCarousel from '../../components/homeSectionCarousel/HomeSectionCarousel'

const HomePage = () => {
  return (
    <>
    <div className='p-t-4 '>
      <MainCarousel />
      
    </div>

    <div className='space-y-10 py-30 flex flex-col justify-center'>
       <HomeSectionCarousel />
    </div>
    </>
    
  )
}

export default HomePage
