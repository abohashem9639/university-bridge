
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Grid, Typography, Card, CardContent } from '@mui/material';
import { Business, People, Assignment, Work, AccountBox, PersonAdd, Announcement, LocationOn } from '@mui/icons-material';

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToPage = (path: string) => {
    navigate(path);
  };

  const featureCards = [
    { 
      title: 'Universities', 
      description: 'Manage university details, branches, and departments', 
      icon: <Business sx={{ fontSize: 40, color: '#4A90E2' }} />, 
      path: '/universities' 
    },
    { 
      title: 'Students', 
      description: 'Track student data, admissions, and academic progress', 
      icon: <People sx={{ fontSize: 40, color: '#4A90E2' }} />, 
      path: '/students' 
    },
    { 
      title: 'Applications', 
      description: 'Manage student applications to universities', 
      icon: <Assignment sx={{ fontSize: 40, color: '#4A90E2' }} />, 
      path: '/applications' 
    },
    { 
      title: 'Employees', 
      description: 'Manage employee records and roles', 
      icon: <Work sx={{ fontSize: 40, color: '#4A90E2' }} />, 
      path: '/employees' 
    },
    { 
      title: 'Agents', 
      description: 'Manage recruitment agents', 
      icon: <AccountBox sx={{ fontSize: 40, color: '#4A90E2' }} />, 
      path: '/agents' 
    },
    { 
      title: 'Sub Agents', 
      description: 'Manage sub-agents for administrative tasks', 
      icon: <PersonAdd sx={{ fontSize: 40, color: '#4A90E2' }} />, 
      path: '/sub-agents' 
    },
    { 
      title: 'Announcements', 
      description: 'Post and view important announcements', 
      icon: <Announcement sx={{ fontSize: 40, color: '#4A90E2' }} />, 
      path: '/announcements' 
    },
    { 
      title: 'All Branches', 
      description: 'View all university branches in one place', 
      icon: <LocationOn sx={{ fontSize: 40, color: '#4A90E2' }} />, 
      path: '/AllBranchesPage' 
    },
  ];

  return (
    <Box sx={{ width: '100%' }}>
      {/* Welcome Header */}
      <Box
        sx={{
          p: 4,
          borderRadius: '12px',
          mb: 4,
          background: 'linear-gradient(135deg, #020233 0%, #1a237e 100%)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Typography 
          variant="h3" 
          sx={{ 
            color: 'white',
            fontWeight: 'bold',
            marginBottom: 2,
          }}
        >
          Welcome to EduMasters
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '800px',
          }}
        >
          Your complete solution for university and student management
        </Typography>
      </Box>

      {/* Quick Access Cards */}
      <Typography 
        variant="h5" 
        sx={{ 
          mb: 3, 
          fontWeight: 'bold',
          color: '#333',
        }}
      >
        Quick Access
      </Typography>

      <Grid container spacing={3}>
        {featureCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s, box-shadow 0.3s',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(0,0,0,0.08)',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                }
              }}
            >
              <Box 
                sx={{ 
                  background: 'linear-gradient(45deg, #f0f4ff 0%, #eef2ff 100%)',
                  p: 3,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {card.icon}
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
                  {card.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, color: '#666', height: '40px' }}>
                  {card.description}
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => navigateToPage(card.path)}
                  sx={{
                    mt: 'auto',
                    backgroundColor: '#020233',
                    '&:hover': {
                      backgroundColor: '#4A90E2',
                    },
                    borderRadius: '6px',
                    textTransform: 'none',
                    fontWeight: 'bold',
                  }}
                >
                  View
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* About System */}
      <Card 
        sx={{ 
          mt: 4,
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          border: '1px solid rgba(0,0,0,0.08)',
        }}
      >
        <CardContent>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: '#333' }}>
            About EduMasters CRM
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 3, color: '#555' }}>
            EduMasters CRM is an all-in-one platform designed to streamline the management of universities, students, applications, agents, and more. It provides a user-friendly interface for administrative tasks, offering tools for managing student data, applications, and employee records.
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 3, color: '#555' }}>
            Whether you're looking to view or manage universities, students, or applications, EduMasters CRM allows you to perform these tasks with ease. The platform also supports agents and sub-agents for efficient recruitment management.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#333' }}>
            How it Works:
          </Typography>
          
          <Box component="ul" sx={{ pl: 2, color: '#555' }}>
            <Typography component="li" variant="body2" sx={{ mb: 1 }}>
              <strong>Universities</strong>: Manage all the details related to universities, including their branches and departments.
            </Typography>
            <Typography component="li" variant="body2" sx={{ mb: 1 }}>
              <strong>Students</strong>: Track student data, admissions, and academic progress.
            </Typography>
            <Typography component="li" variant="body2" sx={{ mb: 1 }}>
              <strong>Applications</strong>: Manage student applications to universities and track their status.
            </Typography>
            <Typography component="li" variant="body2" sx={{ mb: 1 }}>
              <strong>Agents and Sub-Agents</strong>: Agents handle recruitment processes, while sub-agents assist in various administrative tasks.
            </Typography>
            <Typography component="li" variant="body2" sx={{ mb: 1 }}>
              <strong>Profile Management</strong>: Edit and manage user profiles for seamless system access.
            </Typography>
          </Box>

          <Box 
            sx={{ 
              display: 'flex',
              justifyContent: 'center',
              mt: 4,
              mb: 2,
            }}
          >
            <Box
              component="img"
              src="/EduMasters.png"
              alt="EduMasters Logo"
              sx={{
                height: 100,
                width: 'auto',
                display: 'block',
                margin: '0 auto',
              }}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default HomePage;
