
import React from 'react';
import { Typography, Box } from '@mui/material';

const StudentsListPage = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Students List</Typography>
      <Typography variant="body1">
        List of students will be displayed here.
      </Typography>
    </Box>
  );
};

export default StudentsListPage;
