
import React, { useState, useEffect } from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Stepper,
  Step,
  StepLabel,
  Button,
  Divider,
  Paper,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import {
  CheckCircle,
  School,
  Person,
  Description,
  AttachMoney,
  Forum,
  CalendarMonth,
  Assignment
} from '@mui/icons-material';
import { useParams } from 'react-router-dom';

const ApplicationDetailsPage = () => {
  const { id } = useParams();
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // محاكاة جلب بيانات الطلب من API
    const fetchApplicationDetails = () => {
      // بيانات نموذجية للطلب
      const mockApplication = {
        id: id,
        studentName: "Ahmed Mohammed",
        studentId: "STD123",
        studentImage: "https://randomuser.me/api/portraits/men/32.jpg",
        universityName: "Istanbul University",
        universityLogo: "/images/university1.png",
        program: "Computer Engineering",
        degreeLevel: "Bachelor",
        applicationDate: "2023-05-15",
        status: "In Progress",
        currentStep: 2,
        steps: [
          { id: 0, name: "Application Submitted", completed: true, date: "2023-05-15" },
          { id: 1, name: "Document Verification", completed: true, date: "2023-05-20" },
          { id: 2, name: "University Review", completed: false, date: null },
          { id: 3, name: "Decision", completed: false, date: null },
          { id: 4, name: "Enrollment", completed: false, date: null }
        ],
        documents: [
          { id: 1, name: "Passport Copy", status: "Verified", date: "2023-05-16" },
          { id: 2, name: "High School Diploma", status: "Verified", date: "2023-05-17" },
          { id: 3, name: "Transcript", status: "Verified", date: "2023-05-18" },
          { id: 4, name: "Language Certificate", status: "Pending", date: "2023-05-19" }
        ],
        payments: [
          { id: 1, description: "Application Fee", amount: 100, currency: "USD", status: "Paid", date: "2023-05-15" },
          { id: 2, description: "Registration Fee", amount: 500, currency: "USD", status: "Pending", date: null }
        ],
        notes: [
          { id: 1, author: "Sarah Johnson", text: "Student has submitted all required documents.", date: "2023-05-16" },
          { id: 2, author: "Mohammed Ali", text: "Language certificate verification in progress.", date: "2023-05-19" }
        ],
        timeline: [
          { id: 1, event: "Application Submitted", date: "2023-05-15", description: "Student submitted application online" },
          { id: 2, event: "Documents Uploaded", date: "2023-05-16", description: "All required documents uploaded" },
          { id: 3, event: "Payment Confirmed", date: "2023-05-16", description: "Application fee payment confirmed" },
          { id: 4, event: "Document Verification", date: "2023-05-20", description: "Documents verified by admissions team" }
        ]
      };

      setApplication(mockApplication);
      setLoading(false);
    };

    // محاكاة تأخير الشبكة
    setTimeout(fetchApplicationDetails, 1000);
  }, [id]);

  const getStatusColor = (status) => {
    switch(status) {
      case "Verified":
      case "Paid":
        return "success";
      case "Pending":
        return "warning";
      default:
        return "default";
    }
  };

  if (loading) {
    return <Box sx={{ p: 3 }}><Typography>Loading application data...</Typography></Box>;
  }

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Application Details: {application.id}
        </Typography>
        <Chip 
          label={application.status} 
          color={
            application.status === "Approved" ? "success" : 
            application.status === "Rejected" ? "error" : 
            application.status === "In Progress" ? "primary" : 
            "default"
          }
          sx={{ fontSize: '1rem', fontWeight: 'bold', p: 2 }}
        />
      </Box>

      <Grid container spacing={3}>
        {/* Left column */}
        <Grid item xs={12} md={8}>
          {/* Application Progress Stepper */}
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>Application Progress</Typography>
            <Stepper activeStep={application.currentStep} alternativeLabel>
              {application.steps.map((step) => (
                <Step key={step.id} completed={step.completed}>
                  <StepLabel>
                    <Box>
                      {step.name}
                      {step.date && (
                        <Typography variant="caption" display="block" color="text.secondary">
                          {new Date(step.date).toLocaleDateString()}
                        </Typography>
                      )}
                    </Box>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
              <Button variant="contained">Update Status</Button>
            </Box>
          </Paper>

          {/* Documents List */}
          <Paper sx={{ p: 3, mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6">Documents</Typography>
              <Button variant="outlined" size="small" startIcon={<Description />}>
                Upload Document
              </Button>
            </Box>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                    <TableCell>Document Name</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {application.documents.map((doc) => (
                    <TableRow key={doc.id}>
                      <TableCell>{doc.name}</TableCell>
                      <TableCell>
                        <Chip 
                          label={doc.status} 
                          color={getStatusColor(doc.status)}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>{doc.date ? new Date(doc.date).toLocaleDateString() : "N/A"}</TableCell>
                      <TableCell>
                        <Button size="small" variant="outlined">View</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>

          {/* Timeline */}
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Application Timeline</Typography>
            <List>
              {application.timeline.map((item) => (
                <React.Fragment key={item.id}>
                  <ListItem>
                    <ListItemIcon>
                      <CalendarMonth />
                    </ListItemIcon>
                    <ListItemText 
                      primary={
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="subtitle2">{item.event}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {new Date(item.date).toLocaleDateString()}
                          </Typography>
                        </Box>
                      }
                      secondary={item.description}
                    />
                  </ListItem>
                  <Divider component="li" variant="inset" />
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Right column */}
        <Grid item xs={12} md={4}>
          {/* Student Information */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>Student Information</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar 
                  src={application.studentImage} 
                  sx={{ width: 60, height: 60, mr: 2, border: '2px solid #4A90E2' }} 
                />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    {application.studentName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Student ID: {application.studentId}
                  </Typography>
                </Box>
              </Box>
              <Button 
                variant="outlined" 
                fullWidth 
                startIcon={<Person />}
                size="small"
              >
                View Student Profile
              </Button>
            </CardContent>
          </Card>

          {/* University Information */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>University & Program</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                {application.universityLogo && (
                  <Box
                    component="img"
                    src={application.universityLogo}
                    alt={application.universityName}
                    sx={{ width: 60, height: 60, mr: 2, objectFit: 'contain' }}
                  />
                )}
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    {application.universityName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {application.program} ({application.degreeLevel})
                  </Typography>
                </Box>
              </Box>
              <Button 
                variant="outlined" 
                fullWidth 
                startIcon={<School />}
                size="small"
              >
                University Details
              </Button>
            </CardContent>
          </Card>

          {/* Payments Information */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6">Payments</Typography>
                <Button 
                  variant="outlined" 
                  size="small" 
                  startIcon={<AttachMoney />}
                >
                  Record Payment
                </Button>
              </Box>
              <List>
                {application.payments.map((payment) => (
                  <ListItem key={payment.id} sx={{ px: 0 }}>
                    <ListItemText
                      primary={payment.description}
                      secondary={`${payment.amount} ${payment.currency}`}
                    />
                    <Chip 
                      label={payment.status} 
                      color={getStatusColor(payment.status)}
                      size="small"
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>

          {/* Notes Section */}
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6">Notes</Typography>
                <Button 
                  variant="outlined" 
                  size="small" 
                  startIcon={<Forum />}
                >
                  Add Note
                </Button>
              </Box>
              <List sx={{ bgcolor: '#f9f9f9', borderRadius: 1 }}>
                {application.notes.map((note) => (
                  <React.Fragment key={note.id}>
                    <ListItem alignItems="flex-start">
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="subtitle2">{note.author}</Typography>
                            <Typography variant="caption" color="text.secondary">
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
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3, gap: 2 }}>
        <Button variant="outlined" color="error">Reject Application</Button>
        <Button variant="outlined">Request Additional Documents</Button>
        <Button variant="contained" color="success" startIcon={<CheckCircle />}>Approve Application</Button>
      </Box>
    </Box>
  );
};

export default ApplicationDetailsPage;
