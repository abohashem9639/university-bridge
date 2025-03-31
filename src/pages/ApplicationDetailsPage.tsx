
import React from 'react';
import { Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

const ApplicationDetailsPage = () => {
  const { id } = useParams();
  
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Application Details: {id}</Typography>
      <Typography variant="body1">
        Details for the selected application will be displayed here.
      </Typography>
    </Box>
  );
};

export default ApplicationDetailsPage;
