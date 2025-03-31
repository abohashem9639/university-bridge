
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    // We can add some analytics tracking or logging here
    if (!isAuthenticated && !isLoading) {
      console.log('Unauthorized access attempt - redirecting to login');
    }
  }, [isAuthenticated, isLoading]);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: '#f4f7fa',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            display: 'inline-flex',
            marginBottom: 3,
          }}
        >
          <CircularProgress
            size={60}
            thickness={5}
            sx={{
              color: '#020233',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="caption"
              component="div"
              sx={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#020233' }}
            >
              ...
            </Typography>
          </Box>
        </Box>
        <Typography
          variant="h6"
          sx={{
            color: '#020233',
            fontWeight: 'bold',
            textAlign: 'center',
            animation: 'pulse 2s infinite ease-in-out',
            '@keyframes pulse': {
              '0%, 100%': { opacity: 1 },
              '50%': { opacity: 0.6 },
            },
          }}
        >
          Loading EduMasters
        </Typography>
      </Box>
    );
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
