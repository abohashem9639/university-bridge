
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: any;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  isLoading: true,
  user: null,
  login: async () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Check if user is logged in
    const checkAuthStatus = async () => {
      const token = localStorage.getItem('token');
      
      if (token) {
        // For simplicity, we're just checking if the token exists
        // In a real application, you would validate the token with your backend
        setIsAuthenticated(true);
        
        // Mock user data
        setUser({
          id: localStorage.getItem('userId') || '1',
          name: 'Demo User',
          email: 'demo@example.com',
          role: 'admin',
        });
      }
      
      setIsLoading(false);
    };
    
    checkAuthStatus();
  }, []);

  const login = async (email: string, password: string) => {
    // For demonstration purposes, we'll just set a dummy token
    // In a real application, you would make an API call to your backend
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // If credentials are valid (in a real app, this would be verified by the backend)
    localStorage.setItem('token', 'demo-token');
    localStorage.setItem('userId', '1');
    
    setIsAuthenticated(true);
    setUser({
      id: '1',
      name: 'Demo User',
      email,
      role: 'admin',
    });
    
    setIsLoading(false);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setIsAuthenticated(false);
    setUser(null);
  };

  const value = {
    isAuthenticated,
    isLoading,
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
