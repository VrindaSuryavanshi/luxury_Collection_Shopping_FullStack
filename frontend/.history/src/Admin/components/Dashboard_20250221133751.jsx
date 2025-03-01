import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Achievement from './Achievement';
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
    <Grid container spacing={2}>
  <Grid size={4}>
    <Achievement />
  </Grid>
  <Grid size={8}>
    <Item>size=8</Item>
  </Grid>
 
</Grid> 
    </div>
   
  )
}

export default AdminDashboard