
import React from 'react';
import { Typography, Box } from '@mui/material';

const ProfilePage = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>User Profile</Typography>
      <Typography variant="body1">
        User profile information will be displayed here.
      </Typography>
    </Box>
  );
};

export default ProfilePage;
