
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: any | null;
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

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    // Check if the user is logged in (e.g., by verifying a token in localStorage)
    const token = localStorage.getItem('token');
    
    if (token) {
      // In a real application, you would verify the token with your backend
      setIsAuthenticated(true);
      // You would also fetch user data here
      setUser({ id: '123', name: 'Demo User' });
    }
    
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // In a real application, you would send a request to your backend to authenticate
    // and receive a token
    
    // This is just a mock implementation
    return new Promise<void>((resolve, reject) => {
      // Mock login logic
      if (email === 'admin@example.com' && password === 'password') {
        const mockToken = 'mock-auth-token';
        localStorage.setItem('token', mockToken);
        localStorage.setItem('userId', '123');
        
        setIsAuthenticated(true);
        setUser({ id: '123', name: 'Demo User' });
        resolve();
      } else {
        reject(new Error('Invalid credentials'));
      }
    });
  };

  const logout = () => {
    // Remove token from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    
    // Update state
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
