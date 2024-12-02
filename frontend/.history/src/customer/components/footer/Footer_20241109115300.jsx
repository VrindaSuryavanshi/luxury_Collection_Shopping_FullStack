import { Button, Grid, Grid2, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <Grid2 className='bg-black text-white text-center  mt-10'
      container
      sx={{background: "black" , text:"white"}}>

            <Grid2 item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'>Company</Typography>
                {/* <Typography className='pb-5' variant='h6'>Company</Typography>  */}
                <Button className='pb-5' variant='h6' gutterBottom>About</Button>
                <Button className='pb-5' variant='h6' gutterBottom>Blog</Button> 
                <Button className='pb-5' variant='h6' gutterBottom>Press</Button> 
                <Button className='pb-5' variant='h6' gutterBottom>Partners</Button> 
                <Button className='pb-5' variant='h6' gutterBottom>Jobs</Button> 


            </Grid2>
      </Grid2>
    </div>
  )
}

export default Footer
