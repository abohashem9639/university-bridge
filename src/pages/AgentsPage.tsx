
import React from 'react';
import { Typography, Box } from '@mui/material';

const AgentsPage = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Agents</Typography>
      <Typography variant="body1">
        List of agents will be displayed here.
      </Typography>
    </Box>
  );
};

export default AgentsPage;
