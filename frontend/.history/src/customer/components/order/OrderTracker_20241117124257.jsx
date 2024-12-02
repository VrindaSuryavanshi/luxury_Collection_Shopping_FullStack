import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const steps =[
    "placed",
    "Order Confirmed",
    "Shipped",
    "Out For Delivery",
    "Delivered"
]
const OrderTracker = ({activeStep}) => {
  return (
    <div className='w-full text-purple-500'> 
      <Stepper activeStep={activeStep} alternativeLabel>

        {steps.map((label)=><Step>
            <StepLabel sx={{fontSize:"40px"}}>{label}</StepLabel>
        </Step>)}
      </Stepper>
    </div>
  )
}

export default OrderTracker
