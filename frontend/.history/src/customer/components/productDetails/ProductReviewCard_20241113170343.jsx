import { Avatar, Box, Grid2, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
        <Grid2 container spacing={2} gap={3}>
            <Grid2 item xs={1}>
                <Box>
                    <Avatar className='text-white'
                    xs={{width:66 , height:56 , bgcolor:"#9155fd"}}>
                            Review
                    </Avatar>
                </Box>
            </Grid2>

        </Grid2>

        <Grid2 item xs={9}>
            <div className="space-y-2">
                <div>
                    <p>Raam</p>
                    <p>April 5, 2023</p>
                </div>
            </div>
            <Rating value={4.5} name='half-rating' />
                <p>
                    Nice product, Looking beautiful...!
                </p>
            
        </Grid2>
    </div>
  )
}

export default ProductReviewCard