
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, TextField, Card, CardContent, Avatar, Chip, Grid, InputAdornment, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Add, Search, School, Email, Phone, ApartmentOutlined } from '@mui/icons-material';
import axios from 'axios';

interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  profileImageUrl: string;
  nationality: string;
  address: string;
  gender: string;
  dateOfBirth: string;
  // Add other student fields as needed
}

const StudentsListPage = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState<Student[]>([]);
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_API_URL_LOCAL}/Students`);
        setStudents(response.data);
        setFilteredStudents(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching students:', error);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredStudents(students);
    } else {
      const filtered = students.filter(
        student => 
          student.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          student.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          student.phone.includes(searchQuery) ||
          (student.nationality && student.nationality.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setFilteredStudents(filtered);
    }
  }, [searchQuery, students]);

  const handleAddStudent = () => {
    navigate('/add-student');
  };

  const handleViewStudent = (id: string) => {
    navigate(`/students/${id}`);
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'stretch', md: 'center' }, mb: 3 }}>
        <Typography variant="h4" sx={{ mb: { xs: 2, md: 0 }, fontWeight: 'bold', color: '#020233' }}>
          Students List
        </Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={handleAddStudent}
          sx={{
            backgroundColor: '#4A90E2',
            color: 'white',
            borderRadius: '8px',
            textTransform: 'none',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#0056b3',
            },
            px: 3,
            py: 1.5
          }}
        >
          Add Student
        </Button>
      </Box>

      {/* Search Box */}
      <Card sx={{ mb: 4, boxShadow: '0 4px 10px rgba(0,0,0,0.1)', borderRadius: '12px' }}>
        <CardContent>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search students by name, email, phone or nationality..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                '&:hover fieldset': {
                  borderColor: '#4A90E2',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#020233',
                  borderWidth: '2px',
                },
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search color="action" />
                </InputAdornment>
              ),
            }}
          />
        </CardContent>
      </Card>

      {/* Statistics */}
      <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
        <Card sx={{ flexGrow: 1, minWidth: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(33% - 8px)' }, boxShadow: '0 4px 10px rgba(0,0,0,0.05)', borderRadius: '12px', bgcolor: '#020233' }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>{students.length}</Typography>
            <Typography variant="body1">Total Students</Typography>
          </CardContent>
        </Card>
        
        <Card sx={{ flexGrow: 1, minWidth: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(33% - 8px)' }, boxShadow: '0 4px 10px rgba(0,0,0,0.05)', borderRadius: '12px', bgcolor: '#4A90E2' }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
              {students.filter(s => s.gender === 'Male').length}
            </Typography>
            <Typography variant="body1">Male Students</Typography>
          </CardContent>
        </Card>
        
        <Card sx={{ flexGrow: 1, minWidth: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(33% - 8px)' }, boxShadow: '0 4px 10px rgba(0,0,0,0.05)', borderRadius: '12px', bgcolor: '#9c27b0' }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
              {students.filter(s => s.gender === 'Female').length}
            </Typography>
            <Typography variant="body1">Female Students</Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Students List */}
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress sx={{ color: '#020233' }} />
        </Box>
      ) : (
        <>
          <Typography variant="h6" sx={{ mb: 2, color: '#555' }}>
            {filteredStudents.length} {filteredStudents.length === 1 ? 'Student' : 'Students'} Found
          </Typography>
          
          <Grid container spacing={3}>
            {filteredStudents.map(student => (
              <Grid item xs={12} sm={6} md={4} key={student.id}>
                <Card 
                  sx={{ 
                    height: '100%',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                    }
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar
                        src={student.profileImageUrl ? `${process.env.REACT_APP_API_URL_IMAGE}${student.profileImageUrl}` : undefined}
                        sx={{ width: 60, height: 60, mr: 2, border: '2px solid #020233' }}
                      />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                          {student.firstName} {student.lastName}
                        </Typography>
                        <Chip 
                          label={student.gender || 'N/A'} 
                          size="small"
                          sx={{ 
                            bgcolor: student.gender === 'Male' ? '#4A90E2' : '#9c27b0',
                            color: 'white',
                            fontWeight: 'bold',
                            borderRadius: '4px',
                          }} 
                        />
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Email sx={{ fontSize: 18, color: '#555', mr: 1.5 }} />
                      <Typography variant="body2" sx={{ color: '#555' }}>
                        {student.email || 'N/A'}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Phone sx={{ fontSize: 18, color: '#555', mr: 1.5 }} />
                      <Typography variant="body2" sx={{ color: '#555' }}>
                        {student.phone || 'N/A'}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <School sx={{ fontSize: 18, color: '#555', mr: 1.5 }} />
                      <Typography variant="body2" sx={{ color: '#555' }}>
                        {student.nationality || 'N/A'}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                      <ApartmentOutlined sx={{ fontSize: 18, color: '#555', mr: 1.5, mt: 0.5 }} />
                      <Typography variant="body2" sx={{ color: '#555' }}>
                        {student.address || 'N/A'}
                      </Typography>
                    </Box>
                    
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => handleViewStudent(student.id)}
                      sx={{
                        mt: 1,
                        backgroundColor: '#020233',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: '#4A90E2',
                        },
                        borderRadius: '8px',
                        textTransform: 'none',
                        fontWeight: 'bold',
                      }}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {filteredStudents.length === 0 && !loading && (
            <Box sx={{ textAlign: 'center', my: 6, p: 3, bgcolor: '#f5f5f5', borderRadius: '12px' }}>
              <Typography variant="h6" sx={{ color: '#666' }}>
                No students found matching your search criteria.
              </Typography>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default StudentsListPage;
