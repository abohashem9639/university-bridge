
import React, { useState, useEffect } from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  Chip,
  Button,
  TextField,
  InputAdornment,
  Grid,
  Paper,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar
} from '@mui/material';
import {
  Search,
  Add,
  MoreVert,
  Group,
  People,
  Person,
  Email,
  Phone
} from '@mui/icons-material';

const TeamsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  // For menu
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    // Mock fetch teams
    const fetchTeams = () => {
      const mockTeams = [
        {
          id: 1,
          name: "Student Support Team",
          description: "Handles student inquiries and application support",
          members: 8,
          activeProjects: 5,
          lead: {
            name: "Ahmed Hassan",
            position: "Senior Advisor",
            avatar: "https://randomuser.me/api/portraits/men/42.jpg"
          },
          status: "Active",
          teamMembers: [
            { id: 1, name: "Fatima Ali", position: "Student Advisor", avatar: "https://randomuser.me/api/portraits/women/32.jpg" },
            { id: 2, name: "Mohammed Yusuf", position: "Student Advisor", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
            { id: 3, name: "Aisha Khan", position: "Application Specialist", avatar: "https://randomuser.me/api/portraits/women/22.jpg" }
          ]
        },
        {
          id: 2,
          name: "University Relations",
          description: "Manages relationships with partner universities",
          members: 6,
          activeProjects: 3,
          lead: {
            name: "Mustafa Kemal",
            position: "University Liaison",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
          },
          status: "Active",
          teamMembers: [
            { id: 1, name: "Ibrahim Ahmed", position: "University Coordinator", avatar: "https://randomuser.me/api/portraits/men/33.jpg" },
            { id: 2, name: "Leila Mohammed", position: "Program Specialist", avatar: "https://randomuser.me/api/portraits/women/33.jpg" }
          ]
        },
        {
          id: 3,
          name: "Marketing Team",
          description: "Handles promotion and outreach activities",
          members: 4,
          activeProjects: 7,
          lead: {
            name: "Zahra Abdullah",
            position: "Marketing Manager",
            avatar: "https://randomuser.me/api/portraits/women/42.jpg"
          },
          status: "Active",
          teamMembers: [
            { id: 1, name: "Omar Farooq", position: "Social Media Specialist", avatar: "https://randomuser.me/api/portraits/men/40.jpg" },
            { id: 2, name: "Noor Fatima", position: "Content Creator", avatar: "https://randomuser.me/api/portraits/women/40.jpg" }
          ]
        }
      ];
      
      setTeams(mockTeams);
      setLoading(false);
    };
    
    // Simulate API delay
    setTimeout(fetchTeams, 1000);
  }, []);

  // Filter teams based on search term
  const filteredTeams = teams.filter(team => 
    team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" gutterBottom>Teams Management</Typography>
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<Add />}
        >
          Create New Team
        </Button>
      </Box>
      
      <Box sx={{ mb: 3 }}>
        <TextField
          fullWidth
          placeholder="Search teams by name or description..."
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      
      {loading ? (
        <Typography variant="body1">Loading teams...</Typography>
      ) : (
        <Grid container spacing={3}>
          {filteredTeams.map((team) => (
            <Grid key={team.id} xs={12} md={6}>
              <Card sx={{ 
                height: '100%',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
                }
              }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar 
                        sx={{ 
                          bgcolor: 'primary.main',
                          width: 40, 
                          height: 40,
                          mr: 2 
                        }}
                      >
                        <Group />
                      </Avatar>
                      <Box>
                        <Typography variant="h6">{team.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {team.description}
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Chip 
                        label={team.status} 
                        color={team.status === "Active" ? "success" : "default"} 
                        size="small" 
                      />
                      <IconButton 
                        size="small" 
                        onClick={handleMenuClick}
                        aria-label="team options"
                      >
                        <MoreVert />
                      </IconButton>
                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                      >
                        <MenuItem onClick={handleMenuClose}>Edit Team</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Manage Members</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Delete Team</MenuItem>
                      </Menu>
                    </Box>
                  </Box>
                  
                  <Divider sx={{ my: 2 }} />
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <People sx={{ color: 'primary.main', mr: 1 }} />
                      <Typography variant="body2">{team.members} Members</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Person sx={{ color: 'primary.main', mr: 1 }} />
                      <Typography variant="body2">{team.activeProjects} Projects</Typography>
                    </Box>
                  </Box>
                  
                  <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>Team Lead</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar 
                        src={team.lead.avatar} 
                        sx={{ mr: 2 }}
                      />
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                          {team.lead.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {team.lead.position}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                  
                  <Typography variant="subtitle2" sx={{ mb: 1 }}>Team Members</Typography>
                  <List dense>
                    {team.teamMembers.map((member) => (
                      <ListItem key={member.id}>
                        <ListItemAvatar>
                          <Avatar src={member.avatar} />
                        </ListItemAvatar>
                        <ListItemText 
                          primary={member.name}
                          secondary={member.position}
                        />
                      </ListItem>
                    ))}
                    {team.members > team.teamMembers.length + 1 && (
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1, pl: 2 }}>
                        + {team.members - team.teamMembers.length - 1} more members
                      </Typography>
                    )}
                  </List>
                  
                  <Button 
                    variant="outlined" 
                    fullWidth 
                    sx={{ mt: 2 }}
                  >
                    View Team Details
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

export default TeamsPage;
