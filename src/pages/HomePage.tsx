
import React from 'react';
import { Typography, Box } from '@mui/material';

const HomePage = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Welcome to EduMasters CRM</Typography>
      <Typography variant="body1">
        This is the homepage of the EduMasters CRM system. Navigate using the sidebar to access different features.
      </Typography>
    </Box>
  );
};

export default HomePage;
