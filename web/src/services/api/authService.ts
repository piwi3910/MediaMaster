import { findUserByEmail, mockUsers } from '../mockData/users';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
  accountType?: string;
}

export interface AuthResponse {
  success: boolean;
  user?: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
  token?: string;
  message?: string;
}

// Mock login function
export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  // Simulate API delay
  await delay(800);
  
  // Find user by email
  const user = findUserByEmail(credentials.email);
  
  // In a real app, we would check the password hash
  // For this mock, we'll just check if the user exists
  if (user) {
    // Generate a fake token
    const token = `mock-jwt-token-${Math.random().toString(36).substring(2)}`;
    
    return {
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    };
  }
  
  return {
    success: false,
    message: 'Invalid email or password',
  };
};

// Mock register function
export const register = async (data: RegisterData): Promise<AuthResponse> => {
  // Simulate API delay
  await delay(1000);
  
  // Check if user already exists
  const existingUser = findUserByEmail(data.email);
  
  if (existingUser) {
    return {
      success: false,
      message: 'User with this email already exists',
    };
  }
  
  // In a real app, we would create a new user in the database
  // For this mock, we'll just return a success response
  
  // Generate a fake user ID
  const id = `${mockUsers.length + 1}`;
  
  // Generate a fake token
  const token = `mock-jwt-token-${Math.random().toString(36).substring(2)}`;
  
  return {
    success: true,
    user: {
      id,
      name: data.name,
      email: data.email,
      role: data.accountType === 'client' ? 'client' : 'agency',
    },
    token,
  };
};

// Mock logout function
export const logout = async (): Promise<{ success: boolean }> => {
  // Simulate API delay
  await delay(300);
  
  // In a real app, we might invalidate the token on the server
  // For this mock, we'll just return a success response
  
  return { success: true };
};

// Mock function to get the current user
export const getCurrentUser = async (token: string): Promise<AuthResponse> => {
  // Simulate API delay
  await delay(500);
  
  // In a real app, we would validate the token and get the user
  // For this mock, we'll just return a mock user
  
  // Check if token is valid (starts with 'mock-jwt-token-')
  if (token && token.startsWith('mock-jwt-token-')) {
    // Return a mock user (first user from our mock data)
    const user = mockUsers[0];
    
    return {
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    };
  }
  
  return {
    success: false,
    message: 'Invalid or expired token',
  };
};

// Mock function to update user profile
export const updateProfile = async (
  userId: string, 
  data: { name?: string; email?: string }
): Promise<AuthResponse> => {
  // Simulate API delay
  await delay(800);
  
  // In a real app, we would update the user in the database
  // For this mock, we'll just return a success response
  
  return {
    success: true,
    user: {
      id: userId,
      name: data.name || 'User Name',
      email: data.email || 'user@example.com',
      role: 'agency',
    },
  };
};

// Mock function to change password
export const changePassword = async (
  userId: string,
  data: { currentPassword: string; newPassword: string }
): Promise<{ success: boolean; message?: string }> => {
  // Simulate API delay
  await delay(800);
  
  // In a real app, we would verify the current password and update it
  // For this mock, we'll just return a success response
  
  return {
    success: true,
    message: 'Password changed successfully',
  };
};