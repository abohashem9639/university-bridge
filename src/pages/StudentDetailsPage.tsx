
import React from 'react';
import { Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

const StudentDetailsPage = () => {
  const { id } = useParams();
  
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Student Details: {id}</Typography>
      <Typography variant="body1">
        Details for the selected student will be displayed here.
      </Typography>
    </Box>
  );
};

export default StudentDetailsPage;
