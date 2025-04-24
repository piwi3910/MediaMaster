export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'agency' | 'client';
  avatar?: string;
  department?: string;
  position?: string;
  joinDate: string;
  lastActive: string;
  status: 'active' | 'inactive' | 'pending';
}

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@mediamaster.com',
    role: 'admin',
    department: 'Management',
    position: 'CEO',
    joinDate: '2020-01-15',
    lastActive: '2023-06-30',
    status: 'active',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@mediamaster.com',
    role: 'agency',
    department: 'Marketing',
    position: 'Marketing Director',
    joinDate: '2020-03-10',
    lastActive: '2023-06-29',
    status: 'active',
  },
  {
    id: '3',
    name: 'Robert Johnson',
    email: 'robert.johnson@mediamaster.com',
    role: 'agency',
    department: 'Creative',
    position: 'Creative Director',
    joinDate: '2020-05-22',
    lastActive: '2023-06-28',
    status: 'active',
  },
  {
    id: '4',
    name: 'Emily Davis',
    email: 'emily.davis@mediamaster.com',
    role: 'agency',
    department: 'Content',
    position: 'Content Manager',
    joinDate: '2021-02-15',
    lastActive: '2023-06-25',
    status: 'active',
  },
  {
    id: '5',
    name: 'Michael Wilson',
    email: 'michael.wilson@acme.com',
    role: 'client',
    position: 'Marketing Manager',
    joinDate: '2021-04-10',
    lastActive: '2023-06-20',
    status: 'active',
  },
  {
    id: '6',
    name: 'Sarah Brown',
    email: 'sarah.brown@globex.com',
    role: 'client',
    position: 'Social Media Specialist',
    joinDate: '2021-06-05',
    lastActive: '2023-06-15',
    status: 'active',
  },
  {
    id: '7',
    name: 'David Miller',
    email: 'david.miller@initech.com',
    role: 'client',
    position: 'Brand Manager',
    joinDate: '2022-01-20',
    lastActive: '2023-06-10',
    status: 'active',
  },
  {
    id: '8',
    name: 'Jennifer Taylor',
    email: 'jennifer.taylor@mediamaster.com',
    role: 'agency',
    department: 'Analytics',
    position: 'Data Analyst',
    joinDate: '2022-03-15',
    lastActive: '2023-06-05',
    status: 'active',
  },
  {
    id: '9',
    name: 'Thomas Anderson',
    email: 'thomas.anderson@mediamaster.com',
    role: 'agency',
    department: 'Development',
    position: 'Web Developer',
    joinDate: '2022-05-10',
    lastActive: '2023-05-30',
    status: 'inactive',
  },
  {
    id: '10',
    name: 'Lisa White',
    email: 'lisa.white@umbrella.com',
    role: 'client',
    position: 'Digital Marketing Manager',
    joinDate: '2023-01-05',
    lastActive: '2023-06-01',
    status: 'pending',
  },
];

// Helper function to find a user by email
export const findUserByEmail = (email: string): User | undefined => {
  return mockUsers.find(user => user.email === email);
};

// Helper function to find a user by ID
export const findUserById = (id: string): User | undefined => {
  return mockUsers.find(user => user.id === id);
};