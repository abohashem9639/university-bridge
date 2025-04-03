
import React, { useState, useEffect } from 'react';
import { 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  Grid, 
  Paper, 
  Button,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Chip
} from '@mui/material';
import { 
  People, 
  School, 
  Assignment, 
  Notifications, 
  TrendingUp, 
  CalendarToday
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [stats, setStats] = useState({
    students: 243,
    applications: 158,
    universities: 45,
    completionRate: 76
  });

  // Mock data for different sections
  const recentApplications = [
    { id: 1, student: 'Ahmed Ali', university: 'Istanbul University', program: 'Computer Science', status: 'Pending', date: '2023-03-28', avatar: 'https://randomuser.me/api/portraits/men/41.jpg' },
    { id: 2, student: 'Fatima Hassan', university: 'Ankara University', program: 'Business Administration', status: 'Approved', date: '2023-03-27', avatar: 'https://randomuser.me/api/portraits/women/33.jpg' },
    { id: 3, student: 'Omar Farooq', university: 'Bogazici University', program: 'Mechanical Engineering', status: 'Rejected', date: '2023-03-26', avatar: 'https://randomuser.me/api/portraits/men/36.jpg' },
    { id: 4, student: 'Layla Mohammed', university: 'Istanbul Technical University', program: 'Architecture', status: 'Pending', date: '2023-03-25', avatar: 'https://randomuser.me/api/portraits/women/22.jpg' },
  ];

  const upcomingEvents = [
    { id: 1, title: 'University Fair', date: 'April 5, 2023', location: 'Istanbul Expo Center' },
    { id: 2, title: 'Student Orientation', date: 'April 10, 2023', location: 'Main Office' },
    { id: 3, title: 'Application Deadline', date: 'April 15, 2023', location: 'Online' },
  ];

  const announcements = [
    { id: 1, title: 'New Partnership with Turkish Universities', content: 'We are excited to announce new partnerships with 5 additional universities in Turkey.', date: '2023-03-27' },
    { id: 2, title: 'Updated Application Process', content: 'The application process has been streamlined to improve efficiency.', date: '2023-03-25' },
    { id: 3, title: 'Office Closed for Holiday', content: 'Our office will be closed on April 23 for National Sovereignty and Children\'s Day.', date: '2023-03-24' },
  ];

  // Helper function for status color
  const getStatusColor = (status: string) => {
    switch(status.toLowerCase()) {
      case 'approved': return 'success';
      case 'pending': return 'warning';
      case 'rejected': return 'error';
      default: return 'default';
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" gutterBottom>Dashboard</Typography>
        <Button variant="contained" color="primary" component={Link} to="/add-application">
          + New Application
        </Button>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid xs={6} sm={6} md={3}>
          <Card sx={{ 
            backgroundColor: 'primary.main', 
            color: 'white',
            '&:hover': { transform: 'translateY(-5px)', transition: 'transform 0.3s' }
          }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="h4">{stats.students}</Typography>
                  <Typography variant="body2">Total Students</Typography>
                </Box>
                <People fontSize="large" />
              </Box>
              <Button 
                variant="text" 
                sx={{ color: 'white', mt: 1, p: 0 }}
                component={Link}
                to="/students"
              >
                View All
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={6} sm={6} md={3}>
          <Card sx={{ 
            backgroundColor: '#FF9800', 
            color: 'white',
            '&:hover': { transform: 'translateY(-5px)', transition: 'transform 0.3s' }
          }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="h4">{stats.applications}</Typography>
                  <Typography variant="body2">Applications</Typography>
                </Box>
                <Assignment fontSize="large" />
              </Box>
              <Button 
                variant="text" 
                sx={{ color: 'white', mt: 1, p: 0 }}
                component={Link}
                to="/applications"
              >
                View All
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={6} sm={6} md={3}>
          <Card sx={{ 
            backgroundColor: '#4CAF50', 
            color: 'white',
            '&:hover': { transform: 'translateY(-5px)', transition: 'transform 0.3s' }
          }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="h4">{stats.universities}</Typography>
                  <Typography variant="body2">Universities</Typography>
                </Box>
                <School fontSize="large" />
              </Box>
              <Button 
                variant="text" 
                sx={{ color: 'white', mt: 1, p: 0 }}
                component={Link}
                to="/universities"
              >
                View All
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={6} sm={6} md={3}>
          <Card sx={{ 
            backgroundColor: '#9C27B0', 
            color: 'white',
            '&:hover': { transform: 'translateY(-5px)', transition: 'transform 0.3s' }
          }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="h4">{stats.completionRate}%</Typography>
                  <Typography variant="body2">Completion Rate</Typography>
                </Box>
                <TrendingUp fontSize="large" />
              </Box>
              <Button 
                variant="text" 
                sx={{ color: 'white', mt: 1, p: 0 }}
              >
                View Report
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {/* Recent Applications */}
        <Grid xs={12} md={6}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, alignItems: 'center' }}>
              <Typography variant="h6">Recent Applications</Typography>
              <Button 
                component={Link} 
                to="/applications"
                variant="text" 
                size="small"
              >
                View All
              </Button>
            </Box>
            <List>
              {recentApplications.map((app) => (
                <ListItem 
                  key={app.id}
                  sx={{ 
                    border: '1px solid #eee', 
                    borderRadius: 1, 
                    mb: 1,
                    '&:hover': { backgroundColor: '#f9f9f9' } 
                  }}
                >
                  <ListItemAvatar>
                    <Avatar src={app.avatar} />
                  </ListItemAvatar>
                  <ListItemText 
                    primary={app.student}
                    secondary={
                      <React.Fragment>
                        <Typography variant="body2" component="span">
                          {app.university} - {app.program}
                        </Typography>
                        <Typography variant="caption" display="block" color="text.secondary">
                          {app.date}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                  <Chip 
                    label={app.status}
                    size="small"
                    color={getStatusColor(app.status) as any}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Upcoming Events and Announcements */}
        <Grid xs={12} md={6}>
          <Grid container spacing={3}>
            {/* Upcoming Events */}
            <Grid xs={12}>
              <Paper sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, alignItems: 'center' }}>
                  <Typography variant="h6">Upcoming Events</Typography>
                  <Button variant="text" size="small">View Calendar</Button>
                </Box>
                <List dense>
                  {upcomingEvents.map((event) => (
                    <ListItem key={event.id} sx={{ borderBottom: '1px solid #eee', py: 1 }}>
                      <ListItemAvatar>
                        <Avatar sx={{ backgroundColor: 'primary.main' }}>
                          <CalendarToday />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText 
                        primary={event.title}
                        secondary={
                          <React.Fragment>
                            <Typography variant="body2" component="span">
                              {event.date}
                            </Typography>
                            <Typography variant="caption" display="block" color="text.secondary">
                              {event.location}
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>

            {/* Announcements */}
            <Grid xs={12} sx={{ mt: 3 }}>
              <Paper sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, alignItems: 'center' }}>
                  <Typography variant="h6">Announcements</Typography>
                  <Button 
                    component={Link} 
                    to="/announcements"
                    variant="text" 
                    size="small"
                  >
                    View All
                  </Button>
                </Box>
                <List dense>
                  {announcements.map((announcement) => (
                    <ListItem key={announcement.id} sx={{ borderBottom: '1px solid #eee', py: 1 }}>
                      <ListItemAvatar>
                        <Avatar sx={{ backgroundColor: '#FF5722' }}>
                          <Notifications />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText 
                        primary={announcement.title}
                        secondary={
                          <React.Fragment>
                            <Typography variant="body2" component="span">
                              {announcement.content.substring(0, 60)}...
                            </Typography>
                            <Typography variant="caption" display="block" color="text.secondary">
                              {announcement.date}
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
