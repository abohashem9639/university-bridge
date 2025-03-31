
import React from 'react';
import { Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

const BranchesPage = () => {
  const { universityId } = useParams();
  
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Branches for University ID: {universityId}</Typography>
      <Typography variant="body1">
        List of branches for the selected university will be displayed here.
      </Typography>
    </Box>
  );
};

export default BranchesPage;
