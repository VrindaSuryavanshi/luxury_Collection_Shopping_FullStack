import React from 'react'
import './productCard.css'

const ProductCard = (product) => {
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursor-pointer '>
      
      <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top' src={product.image} alt=''/>
      </div>

      <div className='textPart bg-white p-3'>
        <div>
            <p className='brand font-bold opacity-60'></p>
            
            <p className='text-sm'>{product.title} </p>
        </div>

        <div className='flex items-center space-x-2'>
            <p className='font-semibold'>
            ₹200
            </p>
            <p className='line-through opacity-50'>₹500</p>
            <p className='text-green-600'> 60% OFF</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
