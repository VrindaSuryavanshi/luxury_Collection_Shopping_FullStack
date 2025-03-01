import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
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