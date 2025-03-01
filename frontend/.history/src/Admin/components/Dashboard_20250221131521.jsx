import React from 'react'
import { Grid2 } from '@mui/material';

const AdminDashboard = () => {
  return (
    <div>
        {/* <Grid2 container spacing={2}>       
            <Grid2 item xs={12} sm={6}>
                <div>ProductTable</div>
            </Grid2>

            <Grid2 item xs={12} sm={6}>
                <div>OrderTable</div>
            </Grid2>
            <Grid2 item xs={12} sm={6}>
                <div>Customers</div>
            </Grid2>
            <Grid2 item xs={12} sm={6}>
                <div>CreateProduct</div>
            </Grid2>
        </Grid2> */}

           <Grid container spacing={2}>
  <Grid size={8}>
    <Item>size=8</Item>
  </Grid>
  <Grid size={4}>
    <Item>size=4</Item>
  </Grid>
  <Grid size={4}>
    <Item>size=4</Item>
  </Grid>
  <Grid size={8}>
    <Item>size=8</Item>
  </Grid>
</Grid> 
    </div>
   
  )
}

export default AdminDashboard