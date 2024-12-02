import { Grid2 } from '@mui/material'
import React from 'react'
import AddressCard from '../addressCard/AddressCard'
import { Button } from '@headlessui/react'

const DeliveryAddressForm = () => {
  return (
    <div>

<Grid2 container spacing={4}>
    <Grid2 className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>

        <div className='p-5 py-7 border-b cursor-pointer '>
<AddressCard />

<Button className='bg-purple-500 p-2 mt-2' sx={{mt:2 , bgcolor : "RGB(145 85 253"}} size='large' variant='contained'>
    Deliver Here
</Button>

        </div>
    </Grid2>

</Grid2>
</div>
  )
}

export default DeliveryAddressForm
