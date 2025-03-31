
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Card, TextField, Button, Typography, Box, Alert } from '@mui/material';
import { useToast } from "@/hooks/use-toast";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    try {
      await login(email, password);
      toast({
        title: "Login successful",
        description: "Welcome to EduMasters CRM",
      });
      navigate('/');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f4f7fa',
      }}
    >
      <Card sx={{ maxWidth: 400, width: '100%', p: 4, boxShadow: 3 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" component="h1" sx={{ 
            fontWeight: 'bold', 
            color: '#020233',
            mb: 1 
          }}>
            EduMasters CRM
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Sign in to your account
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              mb: 2,
              py: 1.5,
              backgroundColor: '#020233',
              '&:hover': {
                backgroundColor: '#4A90E2',
              },
            }}
          >
            Sign In
          </Button>
        </form>
        
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Forgot your password?{' '}
            <Button
              variant="text"
              size="small"
              onClick={() => navigate('/reset-password')}
              sx={{ color: '#4A90E2' }}
            >
              Reset Password
            </Button>
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default LoginPage;
