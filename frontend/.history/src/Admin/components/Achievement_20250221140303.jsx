import React from 'react'
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const TriangleImg = styled('img')({
  height: 170,
  right: 0,
  bottom: 0,
  position: 'absolute',

});

const TrophyImg = styled('img')({
  height: 98,
  right: 36,
  bottom: 20,
  position: 'absolute',
});

const Achievement = () => {
  return (
    <div className='pl-0'>
      <Card sx={{ position: 'relative'}}>
        <CardContent>
          <Typography variant="h6"
           component="div" sx={{ letterSpacing: ".25px" }}>
            Luxury-Collection
          </Typography>
          <Typography variant="body2">
            Congratulations 🥳
          </Typography>
          <Typography variant="body2">430.8K</Typography>
  <Button size='small' variant='contained'>View Sales</Button>
          
          <TriangleImg src="" />
          <TrophyImg src="https://img.freepik.com/free-vector/gold-cup-illustration_1284-17139.jpg?semt=ais_hybrid" alt="trophy" />
       
        </CardContent>  
      </Card>

    </div>
  )
}

export default Achievement