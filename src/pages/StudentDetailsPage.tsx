
import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Typography,
  Box,
  Card,
  CardContent,
  Divider,
  Avatar,
  Button,
  Paper,
  Chip,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Grid
} from '@mui/material';
import {
  Person,
  Email,
  Phone,
  DateRange,
  LocationOn,
  School,
  Language,
  AutoStories
} from '@mui/icons-material';

const StudentDetailsPage = () => {
  const { id } = useParams();

  // Mock student data
  const studentData = {
    id: id,
    name: "Abdullah Mohammed",
    email: "abdullah@example.com",
    phone: "+90 555 123 4567",
    dob: "1998-05-15",
    nationality: "Saudi Arabia",
    address: "123 Main St, Istanbul, Turkey",
    enrollmentDate: "2022-09-01",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    education: {
      level: "High School",
      institution: "King Fahd Academy",
      graduationYear: "2022",
      gpa: "3.8/4.0"
    },
    languages: [
      { language: "Arabic", proficiency: "Native" },
      { language: "English", proficiency: "Advanced" },
      { language: "Turkish", proficiency: "Beginner" }
    ],
    applications: [
      {
        id: "APP001",
        university: "Istanbul University",
        program: "Computer Science",
        degree: "Bachelor's",
        status: "In Progress",
        date: "2023-01-10"
      },
      {
        id: "APP002",
        university: "Bogazici University",
        program: "Business Administration",
        degree: "Bachelor's",
        status: "Accepted",
        date: "2023-01-05"
      }
    ],
    documents: [
      { id: "DOC001", name: "Passport", status: "Verified", date: "2022-12-20" },
      { id: "DOC002", name: "High School Transcript", status: "Verified", date: "2022-12-21" },
      { id: "DOC003", name: "English Proficiency", status: "Pending", date: "2022-12-22" }
    ],
    notes: [
      { id: "NOTE001", date: "2023-01-05", author: "Ahmed (Advisor)", content: "Student is interested in engineering programs." },
      { id: "NOTE002", date: "2023-01-12", author: "Fatima (Coordinator)", content: "Discussed scholarship options with the student." }
    ]
  };
  
  // Helper function for status color
  const getStatusColor = (status: string) => {
    switch(status.toLowerCase()) {
      case 'active': 
      case 'verified':
      case 'accepted': 
        return 'success';
      case 'pending':
      case 'in progress': 
        return 'warning';
      case 'inactive':
      case 'rejected': 
        return 'error';
      default: 
        return 'default';
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Student Details: {studentData.id}</Typography>
      
      <Grid container spacing={3}>
        {/* Student Profile */}
        <Grid xs={12} md={4} sx={{ display: "flex", justifyContent: "center" }}>
          <Card sx={{ width: '100%', mb: 3 }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Avatar 
                src={studentData.avatar} 
                sx={{ width: 120, height: 120, mx: 'auto', mb: 2, border: '4px solid #4A90E2' }} 
              />
              <Typography variant="h5">{studentData.name}</Typography>
              <Chip 
                label={studentData.status} 
                color={getStatusColor(studentData.status) as any}
                sx={{ mt: 1 }}
              />
              
              <Divider sx={{ my: 2 }} />
              
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Email />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Email" secondary={studentData.email} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Phone />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Phone" secondary={studentData.phone} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <DateRange />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Date of Birth" secondary={studentData.dob} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LocationOn />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Address" secondary={studentData.address} />
                </ListItem>
              </List>
              
              <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Edit Profile</Button>
            </CardContent>
          </Card>
        </Grid>
        
        {/* Education & Languages */}
        <Grid xs={12} md={8}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <School sx={{ mr: 1 }} color="primary" />
              <Typography variant="h6">Education Background</Typography>
            </Box>
            <Box sx={{ pl: 4 }}>
              <Typography variant="body1"><strong>Level:</strong> {studentData.education.level}</Typography>
              <Typography variant="body1"><strong>Institution:</strong> {studentData.education.institution}</Typography>
              <Typography variant="body1"><strong>Graduation Year:</strong> {studentData.education.graduationYear}</Typography>
              <Typography variant="body1"><strong>GPA:</strong> {studentData.education.gpa}</Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 3, mb: 2 }}>
              <Language sx={{ mr: 1 }} color="primary" />
              <Typography variant="h6">Languages</Typography>
            </Box>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Language</strong></TableCell>
                    <TableCell><strong>Proficiency</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {studentData.languages.map((lang, index) => (
                    <TableRow key={index}>
                      <TableCell>{lang.language}</TableCell>
                      <TableCell>{lang.proficiency}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          
          {/* Applications */}
          <Paper sx={{ p: 3, mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AutoStories sx={{ mr: 1 }} color="primary" />
                <Typography variant="h6">Applications</Typography>
              </Box>
              <Button variant="outlined" size="small">Add Application</Button>
            </Box>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell><strong>ID</strong></TableCell>
                    <TableCell><strong>University</strong></TableCell>
                    <TableCell><strong>Program</strong></TableCell>
                    <TableCell><strong>Status</strong></TableCell>
                    <TableCell><strong>Date</strong></TableCell>
                    <TableCell><strong>Actions</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {studentData.applications.map((app) => (
                    <TableRow key={app.id}>
                      <TableCell>{app.id}</TableCell>
                      <TableCell>{app.university}</TableCell>
                      <TableCell>{`${app.program} (${app.degree})`}</TableCell>
                      <TableCell>
                        <Chip 
                          label={app.status} 
                          color={getStatusColor(app.status) as any}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>{app.date}</TableCell>
                      <TableCell>
                        <Button variant="text" size="small">View</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          
          {/* Documents */}
          <Paper sx={{ p: 3, mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Person sx={{ mr: 1 }} color="primary" />
                <Typography variant="h6">Documents</Typography>
              </Box>
              <Button variant="outlined" size="small">Upload Document</Button>
            </Box>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Document</strong></TableCell>
                    <TableCell><strong>Status</strong></TableCell>
                    <TableCell><strong>Date</strong></TableCell>
                    <TableCell><strong>Actions</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {studentData.documents.map((doc) => (
                    <TableRow key={doc.id}>
                      <TableCell>{doc.name}</TableCell>
                      <TableCell>
                        <Chip 
                          label={doc.status} 
                          color={getStatusColor(doc.status) as any}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>{doc.date}</TableCell>
                      <TableCell>
                        <Button variant="text" size="small">View</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          
          {/* Notes */}
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Person sx={{ mr: 1 }} color="primary" />
                <Typography variant="h6">Notes</Typography>
              </Box>
              <Button variant="outlined" size="small">Add Note</Button>
            </Box>
            {studentData.notes.map((note) => (
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
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StudentDetailsPage;
