import { Grid2 } from '@mui/material'
import React from 'react'

const Order = () => {
  return (
    <div>
      <Grid2 container sx={{justifyContent:'space-between'}}>

<Grid2 item size={{xs:2.5}}>
<div className='h-auto shadow-lg bg-white p-5 sticky top-5'>
<h1 className="font-bold text-lg">
    Filter
</h1>
<div className='space-y-4 mt-10'>
<h1 className="font-semibold uppercase">
    Order Status
</h1>
</div>
</div>
</Grid2>
      </Grid2>
    </div>
  )
}

export default Order
