
import React from 'react';
import { Typography, Box } from '@mui/material';

const EmployeesPage = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Employees</Typography>
      <Typography variant="body1">
        List of employees will be displayed here.
      </Typography>
    </Box>
  );
};

export default EmployeesPage;
