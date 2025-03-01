import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Achievement from './Achievement';

const AdminDashboard = () => {
  return (
    <div>
    <Grid container spacing={2}>
  <Grid item size="auto">
    <Achievement />
  </Grid>
 
 
</Grid> 
    </div>
   
  )
}

export default AdminDashboard