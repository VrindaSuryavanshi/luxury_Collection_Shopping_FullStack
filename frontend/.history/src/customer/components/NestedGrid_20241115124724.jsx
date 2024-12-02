import React from 'react';
import { LinearProgress, Box } from '@mui/material';

const LinearProgressExample = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress color="primary" /> {/* Blue */}
      <LinearProgress color="secondary" /> {/* Purple */}
      <LinearProgress color="error" /> {/* Red */}
      <LinearProgress color="info" /> {/* Light Blue */}
      <LinearProgress color="success" /> {/* Green */}
      <LinearProgress color="warning" /> {/* Orange */}
    </Box>
  );
};

export default LinearProgressExample;
