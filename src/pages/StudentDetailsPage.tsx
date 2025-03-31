
import React, { useState, useEffect } from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Avatar,
  Tabs,
  Tab,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import {
  Person,
  School,
  Description,
  Apartment,
  Event,
  Email,
  Phone,
  LocationOn
} from '@mui/icons-material';
import { useParams } from 'react-router-dom';

const StudentDetailsPage = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    // محاكاة جلب بيانات الطالب من API
    const fetchStudentDetails = () => {
      // بيانات نموذجية للطالب
      const mockStudent = {
        id: id,
        firstName: "Ahmed",
        lastName: "Mohammed",
        profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
        email: "ahmed.mohammed@example.com",
        phone: "+90 555 123 4567",
        dateOfBirth: "1998-05-15",
        nationality: "Egyptian",
        address: "Istanbul, Turkey",
        enrollmentDate: "2022-09-01",
        status: "Active",
        applications: [
          {
            id: "APP001",
            university: "Istanbul University",
            program: "Computer Engineering",
            dateApplied: "2022-07-10",
            status: "Accepted",
            startDate: "2022-09-15"
          },
          {
            id: "APP002",
            university: "Ankara University",
            program: "Business Administration",
            dateApplied: "2022-06-25",
            status: "Rejected",
            startDate: null
          }
        ],
        documents: [
          {
            id: "DOC001",
            name: "Passport Copy",
            type: "PDF",
            uploadDate: "2022-06-01",
            verified: true
          },
          {
            id: "DOC002",
            name: "Academic Transcript",
            type: "PDF",
            uploadDate: "2022-06-05",
            verified: true
          },
          {
            id: "DOC003",
            name: "Language Proficiency Certificate",
            type: "PDF",
            uploadDate: "2022-06-10",
            verified: false
          }
        ],
        payments: [
          {
            id: "PAY001",
            description: "Application Fee",
            amount: 200,
            currency: "USD",
            date: "2022-06-15",
            status: "Paid"
          },
          {
            id: "PAY002",
            description: "First Semester Tuition",
            amount: 3500,
            currency: "USD",
            date: "2022-08-20",
            status: "Paid"
          }
        ],
        notes: [
          {
            id: 1,
            date: "2022-06-15",
            author: "Sarah Johnson",
            text: "Student has submitted all required documents for application."
          },
          {
            id: 2,
            date: "2022-07-20",
            author: "Mohammed Ali",
            text: "Follow-up call done. Student confirms acceptance of university offer."
          }
        ]
      };

      setStudent(mockStudent);
      setLoading(false);
    };

    // محاكاة تأخير الشبكة
    setTimeout(fetchStudentDetails, 1000);
  }, [id]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  if (loading) {
    return <Box sx={{ p: 3 }}><Typography>Loading student data...</Typography></Box>;
  }

  return (
    <Box sx={{ p: 3 }}>
      <Card sx={{ mb: 3, overflow: 'visible' }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Avatar 
                src={student.profileImage} 
                sx={{ 
                  width: 120, 
                  height: 120, 
                  border: '4px solid #4A90E2',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                }} 
              />
            </Grid>
            
            <Grid item xs={12} md={5}>
              <Typography variant="h4" gutterBottom>
                {student.firstName} {student.lastName}
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Email sx={{ mr: 1, color: '#666' }} />
                <Typography>{student.email}</Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Phone sx={{ mr: 1, color: '#666' }} />
                <Typography>{student.phone}</Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOn sx={{ mr: 1, color: '#666' }} />
                <Typography>{student.address}</Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={3}>
              <Box sx={{ mb: 1 }}>
                <Typography variant="body2" color="text.secondary">Student ID</Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{student.id}</Typography>
              </Box>
              
              <Box sx={{ mb: 1 }}>
                <Typography variant="body2" color="text.secondary">Nationality</Typography>
                <Typography variant="body1">{student.nationality}</Typography>
              </Box>
              
              <Box>
                <Typography variant="body2" color="text.secondary">Date of Birth</Typography>
                <Typography variant="body1">{new Date(student.dateOfBirth).toLocaleDateString()}</Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Chip 
                label={student.status} 
                color={student.status === "Active" ? "success" : "error"}
                sx={{ fontSize: '1rem', p: 2 }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Box sx={{ mb: 3 }}>
        <Tabs value={activeTab} onChange={handleTabChange} variant="fullWidth">
          <Tab icon={<Person />} label="Applications" />
          <Tab icon={<Description />} label="Documents" />
          <Tab icon={<School />} label="Payments" />
          <Tab icon={<Event />} label="Notes" />
        </Tabs>
      </Box>

      {/* Applications Tab */}
      {activeTab === 0 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell>Application ID</TableCell>
                <TableCell>University</TableCell>
                <TableCell>Program</TableCell>
                <TableCell>Date Applied</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Start Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {student.applications.map((app) => (
                <TableRow key={app.id}>
                  <TableCell>{app.id}</TableCell>
                  <TableCell>{app.university}</TableCell>
                  <TableCell>{app.program}</TableCell>
                  <TableCell>{new Date(app.dateApplied).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Chip 
                      label={app.status} 
                      color={
                        app.status === "Accepted" ? "success" : 
                        app.status === "Pending" ? "warning" : "error"
                      }
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{app.startDate ? new Date(app.startDate).toLocaleDateString() : "N/A"}</TableCell>
                  <TableCell>
                    <Button size="small" variant="outlined">View</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Documents Tab */}
      {activeTab === 1 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell>Document Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Upload Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {student.documents.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell>{doc.name}</TableCell>
                  <TableCell>{doc.type}</TableCell>
                  <TableCell>{new Date(doc.uploadDate).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Chip 
                      label={doc.verified ? "Verified" : "Pending"} 
                      color={doc.verified ? "success" : "warning"}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Button size="small" variant="outlined" sx={{ mr: 1 }}>View</Button>
                    <Button size="small" variant="outlined" color="error">Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Box sx={{ mt: 2, p: 2, display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" color="primary">Upload New Document</Button>
          </Box>
        </TableContainer>
      )}

      {/* Payments Tab */}
      {activeTab === 2 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell>Payment ID</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {student.payments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>{payment.id}</TableCell>
                  <TableCell>{payment.description}</TableCell>
                  <TableCell>{payment.amount} {payment.currency}</TableCell>
                  <TableCell>{new Date(payment.date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Chip 
                      label={payment.status} 
                      color={payment.status === "Paid" ? "success" : "warning"}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Button size="small" variant="outlined">Receipt</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Box sx={{ mt: 2, p: 2, display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" color="primary">Record New Payment</Button>
          </Box>
        </TableContainer>
      )}

      {/* Notes Tab */}
      {activeTab === 3 && (
        <Paper sx={{ p: 2 }}>
          <List>
            {student.notes.map((note) => (
              <React.Fragment key={note.id}>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{note.author}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {new Date(note.date).toLocaleDateString()}
                        </Typography>
                      </Box>
                    }
                    secondary={note.text}
                  />
                </ListItem>
                <Divider component="li" />
              </React.Fragment>
            ))}
          </List>
          <Box sx={{ mt: 2, p: 2 }}>
            <Button variant="contained" color="primary" fullWidth>Add New Note</Button>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default StudentDetailsPage;
