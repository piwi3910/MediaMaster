import { createContext, ReactNode, useContext, useEffect, useState, useCallback } from 'react';

// Define the shape of our user object
interface User {
  email: string;
  name?: string;
  role?: string;
}

// Define the shape of our context
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  checkAuth: () => void;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => false,
  register: async () => false,
  logout: () => {},
  checkAuth: () => {},
});

// Provider component
interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is authenticated
  const checkAuth = useCallback(() => {
    try {
      const storedUser = localStorage.getItem('mediamaster_user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error('Error parsing user from localStorage:', error);
      localStorage.removeItem('mediamaster_user');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Check if user is authenticated on mount
  useEffect(() => {
    checkAuth();
    
    // Listen for storage events (in case user logs in/out in another tab)
    window.addEventListener('storage', checkAuth);
    
    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, [checkAuth]);

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      // In a real app, this would make an API call to authenticate
      // For demo purposes, we'll simulate a delay and just store a dummy user object
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userData: User = { 
        email,
        name: 'John Doe', // In a real app, this would come from the API
        role: 'admin', // In a real app, this would come from the API
      };
      
      localStorage.setItem('mediamaster_user', JSON.stringify(userData));
      setUser(userData);
      
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Register function
  const register = async (email: string, password: string, name: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      // In a real app, this would make an API call to register the user
      // For demo purposes, we'll simulate a delay and just store a dummy user object
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userData: User = { 
        email,
        name,
        role: 'user', // Default role for new users
      };
      
      localStorage.setItem('mediamaster_user', JSON.stringify(userData));
      setUser(userData);
      
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('mediamaster_user');
    setUser(null);
  };

  // Memoize the context value to prevent unnecessary re-renders
  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
    checkAuth,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
}