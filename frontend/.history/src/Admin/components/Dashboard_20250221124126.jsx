import React from 'react'
import { Grid2 } from '@mui/material';

const AdminDashboard = () => {
  return (
    <div>
        <Grid2 container spacing={2} sx={{padding: '20px',
            backgroundColor: '#red',
        }}>       
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
        </Grid2>
            
    </div>
    <div>
      <h1>Admin Dashboard</h1>  
    </div>
  )
}

export default AdminDashboard