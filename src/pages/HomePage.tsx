
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  Grid, 
  Button, 
  Avatar, 
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  LinearProgress,
  Chip
} from '@mui/material';
import { 
  Business, 
  People, 
  Assignment, 
  School, 
  TrendingUp, 
  CheckCircle,
  Notifications,
  CalendarMonth,
  PersonAdd,
  Home
} from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';

const HomePage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [stats, setStats] = useState(null);
  const [recentActivities, setRecentActivities] = useState([]);
  const [upcomingTasks, setUpcomingTasks] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // محاكاة جلب البيانات من API
    const fetchDashboardData = () => {
      // بيانات إحصائية نموذجية
      const mockStats = {
        students: 245,
        universities: 15,
        activeApplications: 78,
        completedApplications: 156,
        taskCompletion: 68,
      };
      
      // أنشطة حديثة نموذجية
      const mockActivities = [
        { 
          id: 1, 
          type: 'application', 
          description: 'Ahmed Mohammed applied to Istanbul University', 
          time: '2 hours ago',
          icon: <Assignment sx={{ color: '#4A90E2' }} />
        },
        { 
          id: 2, 
          type: 'document', 
          description: 'New documents uploaded for Fatima Ali', 
          time: '3 hours ago',
          icon: <School sx={{ color: '#28a745' }} />
        },
        { 
          id: 3, 
          type: 'student', 
          description: 'New student registered: Omar Faruk', 
          time: '5 hours ago',
          icon: <PersonAdd sx={{ color: '#fd7e14' }} />
        },
        { 
          id: 4, 
          type: 'payment', 
          description: 'Payment received from Ayşe Yılmaz', 
          time: '12 hours ago',
          icon: <CheckCircle sx={{ color: '#20c997' }} />
        },
      ];
      
      // مهام قادمة نموذجية
      const mockTasks = [
        {
          id: 1,
          title: 'Review Ahmed Mohammed\'s application',
          dueDate: '2023-06-20',
          priority: 'High'
        },
        {
          id: 2,
          title: 'Contact Istanbul University about program changes',
          dueDate: '2023-06-22',
          priority: 'Medium'
        },
        {
          id: 3,
          title: 'Verify documents for new registrations',
          dueDate: '2023-06-25',
          priority: 'Medium'
        },
        {
          id: 4,
          title: 'Update course catalog',
          dueDate: '2023-06-30',
          priority: 'Low'
        }
      ];

      // إعلانات نموذجية
      const mockAnnouncements = [
        {
          id: 1,
          title: 'New Application Process',
          content: 'The application process has been updated. Please review the new guidelines.',
          date: '2023-06-15',
          author: 'Admin'
        },
        {
          id: 2,
          title: 'System Maintenance',
          content: 'System maintenance scheduled for June 25, 2023. The system will be down from 2:00 AM to 5:00 AM.',
          date: '2023-06-18',
          author: 'System Administrator'
        },
      ];

      setStats(mockStats);
      setRecentActivities(mockActivities);
      setUpcomingTasks(mockTasks);
      setAnnouncements(mockAnnouncements);
      setLoading(false);
    };

    // محاكاة تأخير الشبكة
    setTimeout(fetchDashboardData, 1000);
  }, []);

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'High':
        return '#dc3545';
      case 'Medium':
        return '#fd7e14';
      case 'Low':
        return '#20c997';
      default:
        return '#6c757d';
    }
  };

  if (loading) {
    return (
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>Welcome to EduMasters CRM</Typography>
        <Typography>Loading dashboard data...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">
          Welcome back, {user?.name || 'Admin'}
        </Typography>
        <Button 
          variant="contained"
          startIcon={<PersonAdd />}
          onClick={() => navigate('/add-student')}
        >
          Add New Student
        </Button>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card 
            sx={{ 
              bgcolor: 'rgba(74, 144, 226, 0.1)', 
              borderRadius: 2,
              boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
              transition: '0.3s',
              '&:hover': {
                boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                transform: 'translateY(-5px)'
              }
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography color="text.secondary" variant="body2" gutterBottom>
                    Total Students
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                    {stats.students}
                  </Typography>
                </Box>
                <Avatar sx={{ bgcolor: '#4A90E2', width: 56, height: 56 }}>
                  <People fontSize="large" />
                </Avatar>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mt: 2
                }}
              >
                <TrendingUp sx={{ color: '#28a745', mr: 0.5, fontSize: '1rem' }} />
                <Typography variant="body2" color="#28a745">
                  +12% from last month
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card 
            sx={{ 
              bgcolor: 'rgba(40, 167, 69, 0.1)', 
              borderRadius: 2,
              boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
              transition: '0.3s',
              '&:hover': {
                boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                transform: 'translateY(-5px)'
              }
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography color="text.secondary" variant="body2" gutterBottom>
                    Universities
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                    {stats.universities}
                  </Typography>
                </Box>
                <Avatar sx={{ bgcolor: '#28a745', width: 56, height: 56 }}>
                  <Business fontSize="large" />
                </Avatar>
              </Box>
              <Button 
                variant="text" 
                size="small" 
                sx={{ mt: 2 }}
                onClick={() => navigate('/universities')}
              >
                View All Universities
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card 
            sx={{ 
              bgcolor: 'rgba(253, 126, 20, 0.1)', 
              borderRadius: 2,
              boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
              transition: '0.3s',
              '&:hover': {
                boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                transform: 'translateY(-5px)'
              }
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography color="text.secondary" variant="body2" gutterBottom>
                    Active Applications
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                    {stats.activeApplications}
                  </Typography>
                </Box>
                <Avatar sx={{ bgcolor: '#fd7e14', width: 56, height: 56 }}>
                  <Assignment fontSize="large" />
                </Avatar>
              </Box>
              <Button 
                variant="text" 
                size="small" 
                sx={{ mt: 2 }}
                onClick={() => navigate('/applications')}
              >
                View All Applications
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card 
            sx={{ 
              bgcolor: 'rgba(32, 201, 151, 0.1)', 
              borderRadius: 2,
              boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
              transition: '0.3s',
              '&:hover': {
                boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                transform: 'translateY(-5px)'
              }
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography color="text.secondary" variant="body2" gutterBottom>
                    Completed
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                    {stats.completedApplications}
                  </Typography>
                </Box>
                <Avatar sx={{ bgcolor: '#20c997', width: 56, height: 56 }}>
                  <CheckCircle fontSize="large" />
                </Avatar>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mt: 2
                }}
              >
                <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
                  Task Completion
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  {stats.taskCompletion}%
                </Typography>
              </Box>
              <LinearProgress 
                variant="determinate" 
                value={stats.taskCompletion} 
                sx={{ mt: 1, height: 6, borderRadius: 3, bgcolor: 'rgba(32, 201, 151, 0.2)' }}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {/* Recent Activities */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 2, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <Assignment sx={{ mr: 1 }} /> Recent Activities
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <List>
              {recentActivities.map((activity) => (
                <ListItem key={activity.id} alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'white' }}>
                      {activity.icon}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={activity.description}
                    secondary={activity.time}
                  />
                </ListItem>
              ))}
            </List>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Button variant="text">View All Activities</Button>
            </Box>
          </Paper>
        </Grid>

        {/* Upcoming Tasks */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 2, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <CalendarMonth sx={{ mr: 1 }} /> Upcoming Tasks
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <List>
              {upcomingTasks.map((task) => (
                <ListItem key={task.id} alignItems="flex-start">
                  <ListItemIcon sx={{ mt: 0.5 }}>
                    <Chip 
                      size="small"
                      label={task.priority}
                      sx={{ 
                        bgcolor: getPriorityColor(task.priority),
                        color: 'white',
                        fontWeight: 'bold',
                        minWidth: 60
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={task.title}
                    secondary={`Due: ${new Date(task.dueDate).toLocaleDateString()}`}
                  />
                </ListItem>
              ))}
            </List>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Button variant="contained">Add New Task</Button>
            </Box>
          </Paper>
        </Grid>

        {/* Announcements */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, borderRadius: 2, mt: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <Notifications sx={{ mr: 1 }} /> Announcements
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Grid container spacing={2}>
              {announcements.map((announcement) => (
                <Grid item xs={12} md={6} key={announcement.id}>
                  <Card sx={{ bgcolor: '#f9f9f9', boxShadow: 'none' }}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {announcement.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {announcement.content}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="caption" color="text.secondary">
                          By: {announcement.author}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {new Date(announcement.date).toLocaleDateString()}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
              <Button 
                variant="outlined" 
                startIcon={<Notifications />}
                onClick={() => navigate('/announcements')}
              >
                View All Announcements
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* About EduMasters Section */}
      <Card sx={{ mt: 4, p: 2, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold', color: '#020233' }}>About EduMasters CRM</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            EduMasters CRM is an all-in-one platform designed to streamline the management of universities, students, applications, agents, and more. It provides a user-friendly interface for administrative tasks, offering tools for managing student data, applications, and employee records.
          </Typography>
          
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ mb: 1, color: '#4A90E2' }}>Key Features:</Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><Business sx={{ color: '#020233' }} /></ListItemIcon>
                  <ListItemText primary="Universities: Manage university details, branches and departments" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><People sx={{ color: '#020233' }} /></ListItemIcon>
                  <ListItemText primary="Students: Track student data, admissions, and academic progress" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><Assignment sx={{ color: '#020233' }} /></ListItemIcon>
                  <ListItemText primary="Applications: Manage applications to universities and track status" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Home sx={{ fontSize: 80, color: '#020233', mb: 1 }} />
                  <Typography variant="h5" sx={{ color: '#020233', fontWeight: 'bold' }}>EduMasters CRM</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Simplifying education management
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default HomePage;
