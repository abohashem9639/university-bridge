
import React from 'react';
import { Typography, Box } from '@mui/material';

const AddStudentPage = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Add Student</Typography>
      <Typography variant="body1">
        Form to add a new student will be displayed here.
      </Typography>
    </Box>
  );
};

export default AddStudentPage;
