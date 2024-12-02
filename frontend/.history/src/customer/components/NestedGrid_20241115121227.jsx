import React from 'react';
import { Grid, Paper } from '@mui/material';

const NestedGridExample = () => {
  return (
    <Grid container spacing={2}>
      {/* First Grid Item */}
      <Grid item xs={12} md={6}>
        <Paper elevation={2} style={{ padding: 16, textAlign: 'center' }}>
          First Grid Item
        </Paper>
      </Grid>

      {/* Second Grid Item with Nested Grid */}
      <Grid item xs={12} md={6}>
        <Paper elevation={2} style={{ padding: 16 }}>
          {/* Nested Grid */}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Paper elevation={2} style={{ padding: 16, textAlign: 'center' }}>
                Nested Grid Item 1
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={2} style={{ padding: 16, textAlign: 'center' }}>
                Nested Grid Item 2
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default NestedGridExample;
