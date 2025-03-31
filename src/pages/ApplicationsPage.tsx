
import React from 'react';
import { Typography, Box } from '@mui/material';

const ApplicationsPage = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Applications</Typography>
      <Typography variant="body1">
        List of applications will be displayed here.
      </Typography>
    </Box>
  );
};

export default ApplicationsPage;
