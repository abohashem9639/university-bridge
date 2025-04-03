
import React, { useState, useEffect } from 'react';
import { 
  Typography, 
  Box, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Button,
  Avatar,
  Card,
  CardContent,
  Grid
} from '@mui/material';
import { AccountBox, Phone, Email, Place } from '@mui/icons-material';

const AgentsPage = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // محاكاة جلب البيانات من API
    const fetchAgents = () => {
      // بيانات نموذجية
      const mockAgents = [
        {
          id: 1,
          name: "Ahmed Mohammed",
          email: "ahmed@example.com",
          phone: "+90 555 123 4567",
          location: "Istanbul, Turkey",
          profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
          studentsCount: 24,
          activeApplications: 8
        },
        {
          id: 2,
          name: "Fatima Ali",
          email: "fatima@example.com",
          phone: "+90 555 987 6543",
          location: "Ankara, Turkey",
          profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
          studentsCount: 15,
          activeApplications: 5
        },
        {
          id: 3,
          name: "Mustafa Kemal",
          email: "mustafa@example.com",
          phone: "+90 555 456 7890",
          location: "Izmir, Turkey",
          profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
          studentsCount: 30,
          activeApplications: 12
        }
      ];

      setAgents(mockAgents);
      setLoading(false);
    };

    // محاكاة تأخير الشبكة
    setTimeout(fetchAgents, 1000);
  }, []);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>Agents</Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h6">Total Agents: {agents.length}</Typography>
        <Button variant="contained" color="primary">+ Add New Agent</Button>
      </Box>

      {loading ? (
        <Typography variant="body1">Loading agents data...</Typography>
      ) : (
        <Grid container spacing={3}>
          {agents.map((agent) => (
            <Grid key={agent.id} xs={12} md={6} lg={4}>
              <Card sx={{ 
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
                }
              }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar 
                      src={agent.profileImage}
                      sx={{ width: 70, height: 70, mr: 2, border: '3px solid #4A90E2' }}
                    />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{agent.name}</Typography>
                      <Typography variant="body2" color="text.secondary">Agent ID: {agent.id}</Typography>
                    </Box>
                  </Box>

                  <Box sx={{ mt: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Email sx={{ fontSize: '1rem', color: '#666', mr: 1 }} />
                      <Typography variant="body2">{agent.email}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Phone sx={{ fontSize: '1rem', color: '#666', mr: 1 }} />
                      <Typography variant="body2">{agent.phone}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Place sx={{ fontSize: '1rem', color: '#666', mr: 1 }} />
                      <Typography variant="body2">{agent.location}</Typography>
                    </Box>
                  </Box>

                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    bgcolor: '#f5f5f5',
                    p: 1,
                    borderRadius: 1
                  }}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="body2" color="text.secondary">Students</Typography>
                      <Typography variant="h6" color="primary">{agent.studentsCount}</Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="body2" color="text.secondary">Applications</Typography>
                      <Typography variant="h6" color="primary">{agent.activeApplications}</Typography>
                    </Box>
                  </Box>

                  <Button 
                    variant="outlined" 
                    fullWidth 
                    sx={{ mt: 2 }}
                    color="primary"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default AgentsPage;
