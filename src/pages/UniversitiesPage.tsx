
import React, { useState, useEffect } from 'react';
import { 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  CardActions,
  Button, 
  Grid,
  Avatar,
  Chip,
  TextField,
  InputAdornment,
  Pagination
} from '@mui/material';
import { Search, School, LocationOn, Link as LinkIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const UniversitiesPage = () => {
  const [universities, setUniversities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    // Mock fetching universities data
    const fetchUniversities = () => {
      const mockUniversities = [
        {
          id: 1,
          name: "Istanbul University",
          location: "Istanbul, Turkey",
          logo: "https://via.placeholder.com/150",
          programs: 45,
          students: 78,
          featured: true,
          website: "https://www.istanbul.edu.tr"
        },
        {
          id: 2,
          name: "Ankara University",
          location: "Ankara, Turkey",
          logo: "https://via.placeholder.com/150",
          programs: 38,
          students: 62,
          featured: false,
          website: "https://www.ankara.edu.tr"
        },
        {
          id: 3,
          name: "Bogazici University",
          location: "Istanbul, Turkey",
          logo: "https://via.placeholder.com/150",
          programs: 42,
          students: 95,
          featured: true,
          website: "https://www.boun.edu.tr"
        },
        {
          id: 4,
          name: "Middle East Technical University",
          location: "Ankara, Turkey",
          logo: "https://via.placeholder.com/150",
          programs: 50,
          students: 87,
          featured: true,
          website: "https://www.metu.edu.tr"
        },
        {
          id: 5,
          name: "Izmir Institute of Technology",
          location: "Izmir, Turkey",
          logo: "https://via.placeholder.com/150",
          programs: 32,
          students: 53,
          featured: false,
          website: "https://www.iyte.edu.tr"
        },
        {
          id: 6,
          name: "Istanbul Technical University",
          location: "Istanbul, Turkey",
          logo: "https://via.placeholder.com/150",
          programs: 48,
          students: 82,
          featured: true,
          website: "https://www.itu.edu.tr"
        },
        {
          id: 7,
          name: "Hacettepe University",
          location: "Ankara, Turkey",
          logo: "https://via.placeholder.com/150",
          programs: 44,
          students: 75,
          featured: false,
          website: "https://www.hacettepe.edu.tr"
        },
        {
          id: 8,
          name: "Koç University",
          location: "Istanbul, Turkey",
          logo: "https://via.placeholder.com/150",
          programs: 35,
          students: 68,
          featured: true,
          website: "https://www.ku.edu.tr"
        }
      ];

      setUniversities(mockUniversities);
      setLoading(false);
    };

    // Simulate API delay
    setTimeout(fetchUniversities, 1000);
  }, []);

  // Filter universities based on search term
  const filteredUniversities = universities.filter(university => 
    university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    university.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredUniversities.length / itemsPerPage);
  const displayedUniversities = filteredUniversities.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>Universities</Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <TextField
          placeholder="Search universities..."
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ width: '350px' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" color="primary">
          + Add University
        </Button>
      </Box>

      {loading ? (
        <Typography variant="body1">Loading universities...</Typography>
      ) : (
        <>
          <Grid container spacing={3}>
            {displayedUniversities.map((university) => (
              <Grid key={university.id} xs={12} sm={6} md={4}>
                <Card sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
                  }
                }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Avatar 
                        src={university.logo}
                        alt={university.name}
                        variant="rounded"
                        sx={{ width: 60, height: 60 }}
                      />
                      {university.featured && (
                        <Chip 
                          label="Featured" 
                          color="primary" 
                          size="small"
                        />
                      )}
                    </Box>
                    
                    <Typography variant="h6" gutterBottom>
                      {university.name}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <LocationOn sx={{ fontSize: '1rem', color: '#666', mr: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                        {university.location}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <LinkIcon sx={{ fontSize: '1rem', color: '#666', mr: 1 }} />
                      <Typography 
                        variant="body2" 
                        color="primary"
                        component="a"
                        href={university.website}
                        target="_blank"
                        sx={{ textDecoration: 'none' }}
                      >
                        {university.website.replace('https://www.', '')}
                      </Typography>
                    </Box>

                    <Box sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      mt: 2,
                      bgcolor: '#f5f5f5',
                      p: 1.5,
                      borderRadius: 1
                    }}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="body2" color="text.secondary">Programs</Typography>
                        <Typography variant="h6" color="primary">{university.programs}</Typography>
                      </Box>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="body2" color="text.secondary">Students</Typography>
                        <Typography variant="h6" color="primary">{university.students}</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                  
                  <CardActions sx={{ p: 2 }}>
                    <Button 
                      variant="outlined"
                      fullWidth
                      component={Link}
                      to={`/branches/${university.id}`}
                      endIcon={<School />}
                    >
                      View Programs
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          {totalPages > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Pagination 
                count={totalPages} 
                page={page} 
                onChange={handlePageChange}
                color="primary"
              />
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default UniversitiesPage;
