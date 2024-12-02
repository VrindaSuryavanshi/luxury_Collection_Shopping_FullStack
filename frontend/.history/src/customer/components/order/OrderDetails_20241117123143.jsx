import React from 'react'
import AddressCard from '../addressCard/AddressCard'

const OrderDetails = () => {
  return (
    <div className='px-5 lg:px-20'>
        <div className='font-bold text-xl py-7'>
    <h1> Delivery Address</h1>
    <AddressCard />

        </div>
     
    </div>
  )
}

export default OrderDetails
