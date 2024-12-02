import { Button,  Grid } from '@mui/material'
import React from 'react'


const Footer = () => {
  return (
    <div>
      <Grid className='bg-black text-white text-center  mt-10'
      container
      sx={{background: "black" , text:"white"}}>

            <Grid item xs={12} sm={6} md={3}>
                <h3 className='pb-4' >Company</h3>
                <div>
                    <Button className='pb-5' variant='h6' gutterBottom>About</Button>
               </div>

               <div>
                <Button className='pb-5' variant='h6' gutterBottom>Blog</Button> 

               </div>

<div>
                    <Button className='pb-5' variant='h6' gutterBottom>Press</Button> 

</div>
<div>
                    <Button className='pb-5' variant='h6' gutterBottom>Partners</Button> 

</div>

<div>
                    <Button className='pb-5' variant='h6' gutterBottom>Jobs</Button> 

</div>


            </Grid>
      </Grid>
    </div>
  )
}

export default Footer
