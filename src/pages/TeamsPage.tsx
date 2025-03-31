
import React, { useState, useEffect } from 'react';
import { 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  Grid, 
  Avatar, 
  Button,
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Paper
} from '@mui/material';
import { People, Person, PersonAdd, Work } from '@mui/icons-material';

const TeamsPage = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    // محاكاة جلب البيانات من API
    const fetchTeams = () => {
      // بيانات نموذجية للفرق
      const mockTeams = [
        {
          id: 1,
          name: "Admissions Team",
          description: "Handles student applications and university admissions",
          leader: {
            id: 101,
            name: "Sarah Johnson",
            title: "Admissions Manager",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg"
          },
          members: 5,
          activeProjects: 3,
          teamMembers: [
            {
              id: 102,
              name: "Mohammed Ali",
              title: "Senior Admissions Officer",
              avatar: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            {
              id: 103,
              name: "Ayşe Yılmaz",
              title: "Admissions Officer",
              avatar: "https://randomuser.me/api/portraits/women/67.jpg"
            },
            {
              id: 104,
              name: "John Smith",
              title: "Admissions Assistant",
              avatar: "https://randomuser.me/api/portraits/men/75.jpg"
            }
          ]
        },
        {
          id: 2,
          name: "Student Services",
          description: "Provides support for current students",
          leader: {
            id: 201,
            name: "Mehmet Kaya",
            title: "Student Services Director",
            avatar: "https://randomuser.me/api/portraits/men/42.jpg"
          },
          members: 7,
          activeProjects: 4,
          teamMembers: [
            {
              id: 202,
              name: "Emily Williams",
              title: "Student Advisor",
              avatar: "https://randomuser.me/api/portraits/women/33.jpg"
            },
            {
              id: 203,
              name: "Mustafa Demir",
              title: "Housing Coordinator",
              avatar: "https://randomuser.me/api/portraits/men/55.jpg"
            }
          ]
        },
        {
          id: 3,
          name: "Marketing Team",
          description: "Manages university marketing and promotions",
          leader: {
            id: 301,
            name: "Zeynep Şahin",
            title: "Marketing Director",
            avatar: "https://randomuser.me/api/portraits/women/22.jpg"
          },
          members: 4,
          activeProjects: 2,
          teamMembers: [
            {
              id: 302,
              name: "David Lee",
              title: "Digital Marketing Specialist",
              avatar: "https://randomuser.me/api/portraits/men/18.jpg"
            },
            {
              id: 303,
              name: "Fatima Hassan",
              title: "Content Creator",
              avatar: "https://randomuser.me/api/portraits/women/28.jpg"
            }
          ]
        }
      ];

      setTeams(mockTeams);
      setLoading(false);
    };

    // محاكاة تأخير الشبكة
    setTimeout(fetchTeams, 1000);
  }, []);

  const handleTeamSelect = (team) => {
    setSelectedTeam(team);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Teams</Typography>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
        <Button 
          variant="contained" 
          color="primary"
          startIcon={<PersonAdd />}
        >
          Create New Team
        </Button>
      </Box>

      {loading ? (
        <Typography>Loading teams data...</Typography>
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12} md={selectedTeam ? 6 : 12}>
            <Grid container spacing={2}>
              {teams.map((team) => (
                <Grid item xs={12} md={selectedTeam ? 12 : 4} key={team.id}>
                  <Card 
                    sx={{ 
                      cursor: 'pointer',
                      transition: '0.3s',
                      bgcolor: selectedTeam?.id === team.id ? '#f0f7ff' : 'white',
                      border: selectedTeam?.id === team.id ? '1px solid #4A90E2' : 'none',
                      '&:hover': {
                        boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                        transform: 'translateY(-4px)'
                      }
                    }}
                    onClick={() => handleTeamSelect(team)}
                  >
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#020233' }}>{team.name}</Typography>
                        <Chip 
                          icon={<People />} 
                          label={`${team.members} members`} 
                          size="small"
                          sx={{ bgcolor: '#e3f2fd', color: '#1565c0' }}
                        />
                      </Box>
                      
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {team.description}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar src={team.leader.avatar} sx={{ mr: 1.5 }} />
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{team.leader.name}</Typography>
                          <Typography variant="caption" color="text.secondary">{team.leader.title}</Typography>
                        </Box>
                      </Box>
                      
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Chip 
                          variant="outlined" 
                          color="primary" 
                          label={`${team.activeProjects} Active Projects`}
                          size="small"
                        />
                        <Button size="small" color="primary">Details</Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {selectedTeam && (
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Avatar 
                    sx={{ 
                      bgcolor: '#4A90E2',
                      width: 56,
                      height: 56,
                      mr: 2
                    }}
                  >
                    <Work />
                  </Avatar>
                  <Box>
                    <Typography variant="h5">{selectedTeam.name}</Typography>
                    <Typography variant="body1" color="text.secondary">{selectedTeam.description}</Typography>
                  </Box>
                </Box>

                <Divider sx={{ mb: 3 }} />
                
                <Typography variant="h6" gutterBottom>
                  Team Leader
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, p: 2, bgcolor: '#f5f5f5', borderRadius: 2 }}>
                  <Avatar 
                    src={selectedTeam.leader.avatar} 
                    sx={{ width: 64, height: 64, mr: 2 }} 
                  />
                  <Box>
                    <Typography variant="h6">{selectedTeam.leader.name}</Typography>
                    <Typography variant="body2">{selectedTeam.leader.title}</Typography>
                    <Button size="small" sx={{ mt: 1 }} variant="outlined">Contact</Button>
                  </Box>
                </Box>

                <Typography variant="h6" gutterBottom>
                  Team Members
                </Typography>

                <List>
                  {selectedTeam.teamMembers.map((member) => (
                    <React.Fragment key={member.id}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar src={member.avatar} />
                        </ListItemAvatar>
                        <ListItemText 
                          primary={member.name} 
                          secondary={member.title} 
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </React.Fragment>
                  ))}
                </List>

                <Button 
                  variant="contained" 
                  color="primary" 
                  startIcon={<PersonAdd />}
                  sx={{ mt: 3 }}
                  fullWidth
                >
                  Add Team Member
                </Button>
              </Paper>
            </Grid>
          )}
        </Grid>
      )}
    </Box>
  );
};

export default TeamsPage;
