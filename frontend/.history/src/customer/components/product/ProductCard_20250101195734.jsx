import React from 'react'
import './productCard.css'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {

  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${38}`)} className='productCard w-[15rem] m-3 transition-all cursor-pointer '>
      
      <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} alt=''/>
      </div>
      <div className='textPart bg-white p-3'>
        <div>
            <p className='brand font-bold opacity-60'>{product.brand}</p>
            
            <p className='text-sm'>{product.title} </p>
            <p className='text-sm'>{product.description} </p>
        </div>

        <div className='flex items-center space-x-2'>
            <p className='font-semibold'>
            ₹{product.price}
            </p>
            <p className='line-through opacity-50'>₹{product.price+400}</p>
            <p className='text-green-600'> 60% OFF</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
