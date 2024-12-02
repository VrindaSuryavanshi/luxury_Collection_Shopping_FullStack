import React from 'react'
import AddressCard from '../addressCard/AddressCard'
import { Button } from '@headlessui/react'
import CartItem from '../cart/CartItem'

const OrderSummary = () => {
  return (
    <div>
        <div className='p-4 shadow-lg rounded-s-md border'>
<AddressCard />
        </div>

        <div className='mt-10'>
        <div className='lg:grid grid-cols-3 lg:px-16 mt-4 relative'>
            <div className='col-span-2'>
            {
                [1,1,1,1,1,1].map((item)=><CartItem />)
            }
            </div>
    
    <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
<div className='border'>
<p className='uppercase font-bold opacity-60  text-left p-2'>Price Details</p>
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

<Button variant='contained'
 className='w-full bg-purple-500 p-2 border rounded-md font-semibold'
 sx={{px:"2.5rem" , py:".7rem", }}>
Checkout
</Button>
</div>
      </div>


        </div>
        </div>
    </div>
  )
}

export default OrderSummary