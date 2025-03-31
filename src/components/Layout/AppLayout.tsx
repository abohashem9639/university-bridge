
import React, { useState } from 'react';
import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography, Button, Divider } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Business, 
  People, 
  Assignment, 
  Work, 
  AccountBox, 
  PersonAdd, 
  Announcement, 
  LocationOn, 
  Logout,
  Menu
} from '@mui/icons-material';
import { cn } from '@/lib/utils';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openSidebar, setOpenSidebar] = useState(true);

  const sidebarItems = [
    { label: 'Universities', path: '/universities', icon: <Business /> },
    { label: 'Students', path: '/students', icon: <People /> },
    { label: 'Applications', path: '/applications', icon: <Assignment /> },
    { label: 'Employees', path: '/employees', icon: <Work /> },
    { label: 'Agents', path: '/agents', icon: <AccountBox /> },
    { label: 'Sub Agents', path: '/sub-agents', icon: <PersonAdd /> },
    { label: 'Teams', path: '/teams', icon: <PersonAdd /> },
    { label: 'Announcements', path: '/announcements', icon: <Announcement /> },
    { label: 'All Branches', path: '/AllBranchesPage', icon: <LocationOn /> },
    { label: 'Profile', path: '/profile', icon: <AccountBox /> },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    if (window.innerWidth < 768) {
      setOpenSidebar(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f4f7fa' }}>
      {/* Sidebar */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={openSidebar}
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            backgroundColor: '#020233',
            color: 'white',
            boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h5" sx={{ 
            fontWeight: 'bold', 
            background: 'linear-gradient(90deg, #4A90E2, #83c9f4)', 
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            EduMasters
          </Typography>
        </Box>
        
        <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
        
        <List sx={{ padding: 2 }}>
          {sidebarItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            
            return (
              <ListItemButton 
                key={index} 
                onClick={() => handleNavigation(item.path)}
                sx={{ 
                  borderRadius: '8px',
                  mb: 0.5,
                  backgroundColor: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.05)',
                  }
                }}
              >
                <ListItemIcon sx={{ 
                  minWidth: 40, 
                  color: isActive ? '#4A90E2' : 'rgba(255,255,255,0.7)'
                }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.label} 
                  sx={{ 
                    '& .MuiListItemText-primary': {
                      fontWeight: isActive ? 'bold' : 'normal',
                      color: isActive ? '#4A90E2' : 'rgba(255,255,255,0.9)',
                    }
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>
        
        <Box sx={{ flexGrow: 1 }} />
        
        <Box sx={{ p: 2 }}>
          <Button
            variant="contained"
            fullWidth
            startIcon={<Logout />}
            onClick={handleLogout}
            sx={{
              backgroundColor: '#DC3545',
              color: 'white',
              borderRadius: '8px',
              textTransform: 'none',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#c82333',
              },
            }}
          >
            Logout
          </Button>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box 
        component="main"
        sx={{
          flexGrow: 1,
          transition: 'margin 0.3s',
          marginLeft: openSidebar ? '240px' : 0,
          minHeight: '100vh',
        }}
      >
        {/* Toggle Sidebar Button - Fixed Position */}
        <Button
          onClick={toggleSidebar}
          sx={{
            position: 'fixed',
            top: '1rem',
            left: openSidebar ? '250px' : '1rem',
            zIndex: 1100,
            backgroundColor: '#020233',
            color: 'white',
            minWidth: 'unset',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            transition: 'left 0.3s',
            '&:hover': {
              backgroundColor: '#4A90E2',
            }
          }}
        >
          <Menu fontSize="small" />
        </Button>
        
        {/* Content */}
        <Box sx={{ padding: { xs: 2, sm: 3, md: 4 }, mt: 4 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AppLayout;
