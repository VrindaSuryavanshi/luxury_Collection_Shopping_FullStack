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
</div>
      </div>

        </div>
      
    </div>
  )
}

export default Cart
