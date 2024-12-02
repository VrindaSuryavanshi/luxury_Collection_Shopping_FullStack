import React from 'react'

const AddressCard = () => {
  return (
    <div>
      <div className='space-y-3 text-left'>
        <h1 className='font-semibold text-lg opacity-50'>Address :</h1>
        <p className='font-semibold'>
          Rekha g
        </p>
        <p>Mumbai , Andheri east , 676543</p>
        <div>
          <p className='space-y-1'>Phone Number</p>
          <p className='font-semibold'>09876543224</p>
        </div>
      </div>
    </div>
  )
}

export default AddressCard