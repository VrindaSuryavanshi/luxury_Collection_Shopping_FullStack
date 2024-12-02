import React from 'react'
import CartItem from './CartItem'

const Cart = () => {
  return (
    <div>
        <div className='lg:grid grid-cols-3 lg:px-16 mt-4 relative'>
            <div className='col-span-2'>
            <CartItem />
            </div>
    
    <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
<div className='border'>
<p className='uppercase font-bold opacity-60 pb-4 text-left pl-2'>Price Details</p>
<hr />
<div className='space-y-3 font:-bold'>
    <div className='flex justify-between pt-3 text-black'>
        <span>Price</span>
        <span>₹3000</span>
    </div>

    <div className='flex justify-between pt-3 text-black'>
        <span>Discount</span>
        <span className='text-green-500'>-₹300</span>
    </div>

    <div className='flex justify-between pt-3 text-black'>
        <span>Delivery Charge</span>
        <span className='text-green-700'>Free</span>
    </div>

    <div className='flex justify-between pt-3 text-black'>
        <span>Price</span>
        <span className='text-green-500 font-bold'>₹3000</span>
    </div>
</div>
</div>
      </div>


        </div>
      
    </div>
  )
}

export default Cart
