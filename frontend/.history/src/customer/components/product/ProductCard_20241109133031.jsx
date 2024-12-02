import React from 'react'

const ProductCard = () => {
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursor-pointer '>
      
      <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top' src='https://images.meesho.com/images/products/343504893/xutmh_512.webp' alt=''/>
      </div>

      <div className='textPart bg-white p-3'>
        <div>
            <p className='text-sm'>Explore Stylish Tops for Women & Girls: Latest Trends in Cotton, Linen, and Rayon Blends </p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
