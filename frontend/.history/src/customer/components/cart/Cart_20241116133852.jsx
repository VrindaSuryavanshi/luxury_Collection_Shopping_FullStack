import React from 'react'
import CartItem from './CartItem'
import { Button } from '@headlessui/react'

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
<div className='space-y-3 font:bold p-2 mb-7'>
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
        <span className='text-green-500'>Free</span>
    </div>

    <div className='flex justify-between pt-3 text-black font-bold'>
        <span>Total Amount</span>
        <span className='text-green-500 '>₹3000</span>
    </div>
</div>

<Button variant='contained' className='w-full'
 sx={{px:"2.5rem" , py:".7rem",bgcolor:"#9155fd" }}>
Checkout
</Button>
</div>
      </div>


        </div>
      
    </div>
  )
}

export default Cart
