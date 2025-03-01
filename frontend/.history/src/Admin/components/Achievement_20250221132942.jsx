import React from 'react'
import { styled } from '@mui/material/styles';

const TriangleImg = styled('img')({
  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
  width: '100%',
  height: '100%',
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
    <div>
      <Card sx={{ position: 'relative' }}>
        <CardContent>
          <Typography variant="h6"
           component="div" sx={{ letterSpacing: ".25px" }}>
            Achievement
          </Typography>
          <Typography variant="body2">
            Congratulations 
          </Typography>
        </CardContent>  
      </Card>

    </div>
  )
}

export default Achievement