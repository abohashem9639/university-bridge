
import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Typography,
  Box,
  Paper,
  Grid,
  Chip,
  Divider,
  Button,
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import {
  School,
  Person,
  CalendarToday,
  LocationOn,
  AttachMoney,
  Done,
  Schedule,
  Description,
  Note,
  Flag
} from '@mui/icons-material';

const ApplicationDetailsPage: React.FC = () => {
  const { id } = useParams();

  // Mock data for application details
  const applicationData = {
    id: id,
    status: "In Progress",
    date: "2023-01-15",
    student: {
      id: "STU123",
      name: "Mohammed Abdullah",
      email: "mohammed@example.com",
      phone: "+90 555 123 4567",
      nationality: "Saudi Arabia",
      avatar: "https://randomuser.me/api/portraits/men/34.jpg"
    },
    university: {
      name: "Istanbul Technical University",
      program: "Computer Engineering",
      degree: "Bachelor's",
      location: "Istanbul, Turkey",
      tuition: "8,000 USD/year"
    },
    documents: [
      { id: "doc1", name: "Passport Copy", status: "Verified", date: "2023-01-10" },
      { id: "doc2", name: "Transcripts", status: "Pending", date: "2023-01-12" },
      { id: "doc3", name: "CV/Resume", status: "Verified", date: "2023-01-11" },
      { id: "doc4", name: "Statement of Purpose", status: "Rejected", date: "2023-01-14" }
    ],
    timeline: [
      { id: 1, date: "2023-01-05", title: "Application Created", description: "Application was submitted by the student" },
      { id: 2, date: "2023-01-10", title: "Documents Uploaded", description: "Required documents were uploaded" },
      { id: 3, date: "2023-01-15", title: "Under Review", description: "Application is being reviewed by the university" }
    ],
    notes: [
      { id: "note1", author: "Ahmed Advisor", date: "2023-01-11", content: "Student has excellent academic record" },
      { id: "note2", author: "Fatima Coordinator", date: "2023-01-13", content: "Statement of purpose needs revision" }
    ]
  };

  // Helper function to get chip color based on status
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'verified':
        return 'success';
      case 'pending':
        return 'warning';
      case 'rejected':
        return 'error';
      case 'in progress':
        return 'info';
      default:
        return 'default';
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Application #{applicationData.id}
        </Typography>
        <Chip 
          label={applicationData.status} 
          color={getStatusColor(applicationData.status) as any}
          sx={{ fontSize: '1rem', padding: '20px 10px' }}
        />
      </Box>

      <Grid container spacing={3}>
        <Grid xs={12} md={4}>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar
                  src={applicationData.student.avatar}
                  sx={{ width: 80, height: 80, mr: 2 }}
                />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {applicationData.student.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Student ID: {applicationData.student.id}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {applicationData.student.nationality}
                  </Typography>
                </Box>
              </Box>
              
              <Divider sx={{ my: 2 }} />
              
              <Typography variant="body2">
                <strong>Email:</strong> {applicationData.student.email}
              </Typography>
              <Typography variant="body2">
                <strong>Phone:</strong> {applicationData.student.phone}
              </Typography>
              
              <Box sx={{ mt: 2 }}>
                <Button variant="outlined" fullWidth>View Student Profile</Button>
              </Box>
            </CardContent>
          </Card>
          
          <Paper sx={{ p: 2, mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <School sx={{ mr: 1 }} />
              University Details
            </Typography>
            
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <School fontSize="small" />
                </ListItemIcon>
                <ListItemText 
                  primary="University" 
                  secondary={applicationData.university.name} 
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Description fontSize="small" />
                </ListItemIcon>
                <ListItemText 
                  primary="Program" 
                  secondary={applicationData.university.program} 
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Flag fontSize="small" />
                </ListItemIcon>
                <ListItemText 
                  primary="Degree" 
                  secondary={applicationData.university.degree} 
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOn fontSize="small" />
                </ListItemIcon>
                <ListItemText 
                  primary="Location" 
                  secondary={applicationData.university.location} 
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AttachMoney fontSize="small" />
                </ListItemIcon>
                <ListItemText 
                  primary="Tuition" 
                  secondary={applicationData.university.tuition} 
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        <Grid xs={12} md={8}>
          <Paper sx={{ p: 2, mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <Description sx={{ mr: 1 }} />
              Required Documents
            </Typography>
            <TableContainer>
              <Table>
                <thead>
                  <tr>
                    <th>Document</th>
                    <th>Upload Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {applicationData.documents.map(doc => (
                    <tr key={doc.id}>
                      <td>{doc.name}</td>
                      <td>{doc.date}</td>
                      <td>
                        <Chip 
                          label={doc.status} 
                          size="small"
                          color={getStatusColor(doc.status) as any}
                        />
                      </td>
                      <td>
                        <Button size="small" variant="outlined">View</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
          </Paper>
          
          <Paper sx={{ p: 2, mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <Schedule sx={{ mr: 1 }} />
              Application Timeline
            </Typography>
            <Box sx={{ position: 'relative' }}>
              {applicationData.timeline.map((event, index) => (
                <Box 
                  key={event.id}
                  sx={{ 
                    display: 'flex',
                    mb: index !== applicationData.timeline.length - 1 ? 3 : 0,
                    position: 'relative',
                    '&:after': index !== applicationData.timeline.length - 1 ? {
                      content: '""',
                      position: 'absolute',
                      left: '10px',
                      top: '30px',
                      height: '100%',
                      width: '2px',
                      backgroundColor: 'primary.light',
                      zIndex: 0
                    } : {}
                  }}
                >
                  <Box sx={{ 
                    backgroundColor: 'primary.main', 
                    color: 'white', 
                    borderRadius: '50%',
                    width: '22px', 
                    height: '22px', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1,
                    mr: 1.5
                  }}>
                    {index + 1}
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                      {event.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                      {event.date}
                    </Typography>
                    <Typography variant="body2">
                      {event.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Paper>
          
          <Paper sx={{ p: 2, mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <Note sx={{ mr: 1 }} />
              Notes & Comments
            </Typography>
            {applicationData.notes.map(note => (
              <Paper 
                key={note.id}
                variant="outlined" 
                sx={{ p: 2, mb: 2 }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="subtitle2">{note.author}</Typography>
                  <Typography variant="caption" color="text.secondary">{note.date}</Typography>
                </Box>
                <Typography variant="body2">{note.content}</Typography>
              </Paper>
            ))}
            <Button 
              variant="contained" 
              color="primary" 
              sx={{ mt: 1 }}
            >
              Add Note
            </Button>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3, gap: 2 }}>
        <Button variant="outlined">Reject Application</Button>
        <Button variant="contained" color="primary">Approve Application</Button>
      </Box>
    </Box>
  );
};

export default ApplicationDetailsPage;
