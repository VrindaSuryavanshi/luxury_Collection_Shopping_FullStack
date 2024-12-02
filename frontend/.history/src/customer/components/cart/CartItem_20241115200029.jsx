import React from 'react'

const CartItem = () => {
  return (
   <div className='p-5 shadow-lg border rounded-md '>  
   <div className=' flex items-center flex-row'>
        <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
          <img className='w-full h-full' src="https://media.gettyimages.com/id/200213395-001/photo/young-woman-walking-downstairs-looking-away.jpg?s=612x612&w=gi&k=20&c=8ibl-E159k5WdMX8d1VCVQbNtXQsKsIBJd9l8pPEmz8=" alt="" />
        </div>

        <div className='ml-5 space-y-1 items-start flex flex-col'>
          <p className='font-semibold'>Luxury Dress , Green in color for party wear</p>
          <p className='opacity-70'>Size:L ,green</p>
          <p className='opacity-70'>Seller: special-edition Collection</p>
          <div className='flex items-center space-x-2'>
            <p className='font-semibold'>
            ₹3000

            </p>
            <p className='line-through opacity-50'>₹4050</p>
            <p className='text-green-600'> 60% OFF</p>
        </div>

        </div>
    </div>
   </div>
    
  )
}

export default CartItem
