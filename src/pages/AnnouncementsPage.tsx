
import React from 'react';
import { Typography, Box } from '@mui/material';

const AnnouncementsPage = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Announcements</Typography>
      <Typography variant="body1">
        List of announcements will be displayed here.
      </Typography>
    </Box>
  );
};

export default AnnouncementsPage;
