import { useState } from 'react';
import { 
  ActionIcon, 
  Avatar, 
  Badge, 
  Button, 
  Card, 
  Grid, 
  Group, 
  Menu, 
  Paper, 
  Select, 
  Stack, 
  Tabs, 
  Text, 
  TextInput, 
  Title 
} from '@mantine/core';
import { 
  IconDots, 
  IconEdit, 
  IconFilter, 
  IconMail, 
  IconMessage, 
  IconPlus, 
  IconSearch, 
  IconTrash, 
  IconUserPlus 
} from '@tabler/icons-react';
import { MainLayout } from '../layouts/MainLayout';

// Mock team members
const mockTeamMembers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@mediamaster.com',
    role: 'admin',
    department: 'Management',
    position: 'CEO',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61',
    status: 'active',
    lastActive: '2023-06-30',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@mediamaster.com',
    role: 'agency',
    department: 'Marketing',
    position: 'Marketing Director',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
    status: 'active',
    lastActive: '2023-06-29',
  },
  {
    id: '3',
    name: 'Robert Johnson',
    email: 'robert.johnson@mediamaster.com',
    role: 'agency',
    department: 'Creative',
    position: 'Creative Director',
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d',
    status: 'active',
    lastActive: '2023-06-28',
  },
  {
    id: '4',
    name: 'Emily Davis',
    email: 'emily.davis@mediamaster.com',
    role: 'agency',
    department: 'Content',
    position: 'Content Manager',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91',
    status: 'active',
    lastActive: '2023-06-25',
  },
  {
    id: '8',
    name: 'Jennifer Taylor',
    email: 'jennifer.taylor@mediamaster.com',
    role: 'agency',
    department: 'Analytics',
    position: 'Data Analyst',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    status: 'active',
    lastActive: '2023-06-05',
  },
  {
    id: '9',
    name: 'Thomas Anderson',
    email: 'thomas.anderson@mediamaster.com',
    role: 'agency',
    department: 'Development',
    position: 'Web Developer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    status: 'inactive',
    lastActive: '2023-05-30',
  },
];

// Mock clients
const mockClients = [
  {
    id: '5',
    name: 'Michael Wilson',
    email: 'michael.wilson@acme.com',
    company: 'Acme Inc.',
    position: 'Marketing Manager',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    status: 'active',
    lastActive: '2023-06-20',
  },
  {
    id: '6',
    name: 'Sarah Brown',
    email: 'sarah.brown@globex.com',
    company: 'Globex Corporation',
    position: 'Social Media Specialist',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    status: 'active',
    lastActive: '2023-06-15',
  },
  {
    id: '7',
    name: 'David Miller',
    email: 'david.miller@initech.com',
    company: 'Initech',
    position: 'Brand Manager',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
    status: 'active',
    lastActive: '2023-06-10',
  },
  {
    id: '10',
    name: 'Lisa White',
    email: 'lisa.white@umbrella.com',
    company: 'Umbrella Corp',
    position: 'Digital Marketing Manager',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
    status: 'pending',
    lastActive: '2023-06-01',
  },
];

// Status badge component
function StatusBadge({ status }: { status: string }) {
  const colorMap: Record<string, string> = {
    active: 'green',
    inactive: 'gray',
    pending: 'yellow',
  };

  return (
    <Badge color={colorMap[status] || 'gray'}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
}

// Role badge component
function RoleBadge({ role }: { role: string }) {
  const colorMap: Record<string, string> = {
    admin: 'red',
    agency: 'blue',
    client: 'green',
  };

  const labelMap: Record<string, string> = {
    admin: 'Admin',
    agency: 'Agency Staff',
    client: 'Client',
  };

  return (
    <Badge color={colorMap[role] || 'gray'}>
      {labelMap[role] || role}
    </Badge>
  );
}

export function Team() {
  const [activeTab, setActiveTab] = useState<string | null>('team');
  const [roleFilter, setRoleFilter] = useState<string | null>(null);
  const [departmentFilter, setDepartmentFilter] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  // Filter team members based on search, role, department, and status
  const filteredTeamMembers = mockTeamMembers.filter((member) => {
    const matchesSearch = 
      member.name.toLowerCase().includes(search.toLowerCase()) ||
      member.email.toLowerCase().includes(search.toLowerCase()) ||
      member.position.toLowerCase().includes(search.toLowerCase());
    const matchesRole = !roleFilter || member.role === roleFilter;
    const matchesDepartment = !departmentFilter || member.department === departmentFilter;
    const matchesStatus = !statusFilter || member.status === statusFilter;
    
    return matchesSearch && matchesRole && matchesDepartment && matchesStatus;
  });

  // Filter clients based on search and status
  const filteredClients = mockClients.filter((client) => {
    const matchesSearch = 
      client.name.toLowerCase().includes(search.toLowerCase()) ||
      client.email.toLowerCase().includes(search.toLowerCase()) ||
      client.company.toLowerCase().includes(search.toLowerCase()) ||
      client.position.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = !statusFilter || client.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Team member cards
  const teamMemberCards = filteredTeamMembers.map((member) => (
    <Grid.Col span={4} key={member.id}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section p="md">
          <Group position="apart">
            <Group>
              <Avatar src={member.avatar} size="lg" radius="xl" />
              <div>
                <Text weight={500}>{member.name}</Text>
                <Text size="sm" color="dimmed">{member.position}</Text>
              </div>
            </Group>
            <Menu position="bottom-end" withinPortal>
              <Menu.Target>
                <ActionIcon>
                  <IconDots size={16} />
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item icon={<IconEdit size={16} />}>Edit</Menu.Item>
                <Menu.Item icon={<IconMail size={16} />}>Email</Menu.Item>
                <Menu.Item icon={<IconMessage size={16} />}>Message</Menu.Item>
                <Menu.Divider />
                <Menu.Item icon={<IconTrash size={16} />} color="red">Remove</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Card.Section>

        <Group position="apart" mt="md">
          <Text size="sm">{member.email}</Text>
        </Group>

        <Group position="apart" mt="md">
          <RoleBadge role={member.role} />
          <StatusBadge status={member.status} />
        </Group>

        <Group position="apart" mt="md">
          <Text size="sm" color="dimmed">Department</Text>
          <Text size="sm">{member.department}</Text>
        </Group>

        <Group position="apart" mt="xs">
          <Text size="sm" color="dimmed">Last Active</Text>
          <Text size="sm">{new Date(member.lastActive).toLocaleDateString()}</Text>
        </Group>
      </Card>
    </Grid.Col>
  ));

  // Client cards
  const clientCards = filteredClients.map((client) => (
    <Grid.Col span={4} key={client.id}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section p="md">
          <Group position="apart">
            <Group>
              <Avatar src={client.avatar} size="lg" radius="xl" />
              <div>
                <Text weight={500}>{client.name}</Text>
                <Text size="sm" color="dimmed">{client.position}</Text>
              </div>
            </Group>
            <Menu position="bottom-end" withinPortal>
              <Menu.Target>
                <ActionIcon>
                  <IconDots size={16} />
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item icon={<IconEdit size={16} />}>Edit</Menu.Item>
                <Menu.Item icon={<IconMail size={16} />}>Email</Menu.Item>
                <Menu.Item icon={<IconMessage size={16} />}>Message</Menu.Item>
                <Menu.Divider />
                <Menu.Item icon={<IconTrash size={16} />} color="red">Remove</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Card.Section>

        <Group position="apart" mt="md">
          <Text size="sm">{client.email}</Text>
        </Group>

        <Group position="apart" mt="md">
          <Text size="sm" color="dimmed">Company</Text>
          <Text size="sm">{client.company}</Text>
        </Group>

        <Group position="apart" mt="md">
          <StatusBadge status={client.status} />
        </Group>

        <Group position="apart" mt="xs">
          <Text size="sm" color="dimmed">Last Active</Text>
          <Text size="sm">{new Date(client.lastActive).toLocaleDateString()}</Text>
        </Group>
      </Card>
    </Grid.Col>
  ));

  return (
    <MainLayout>
      <Group position="apart" mb="md">
        <Title order={2}>Team Management</Title>
        <Group>
          <Button variant="outline" leftSection={<IconUserPlus size={16} />}>
            Invite User
          </Button>
          <Button leftSection={<IconPlus size={16} />}>
            Add User
          </Button>
        </Group>
      </Group>

      <Tabs value={activeTab} onChange={setActiveTab} mb="md">
        <Tabs.List>
          <Tabs.Tab value="team">Team Members</Tabs.Tab>
          <Tabs.Tab value="clients">Clients</Tabs.Tab>
          <Tabs.Tab value="permissions">Permissions</Tabs.Tab>
        </Tabs.List>
      </Tabs>

      <Paper withBorder p="md" mb="md">
        <Group position="apart" mb="md">
          <TextInput
            placeholder="Search users..."
            icon={<IconSearch size={16} />}
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
            style={{ flex: 1 }}
          />
          <Group>
            {activeTab === 'team' && (
              <>
                <Select
                  placeholder="Role"
                  clearable
                  icon={<IconFilter size={16} />}
                  value={roleFilter}
                  onChange={setRoleFilter}
                  data={[
                    { value: 'admin', label: 'Admin' },
                    { value: 'agency', label: 'Agency Staff' },
                  ]}
                  style={{ width: 150 }}
                />
                <Select
                  placeholder="Department"
                  clearable
                  icon={<IconFilter size={16} />}
                  value={departmentFilter}
                  onChange={setDepartmentFilter}
                  data={[
                    { value: 'Management', label: 'Management' },
                    { value: 'Marketing', label: 'Marketing' },
                    { value: 'Creative', label: 'Creative' },
                    { value: 'Content', label: 'Content' },
                    { value: 'Analytics', label: 'Analytics' },
                    { value: 'Development', label: 'Development' },
                  ]}
                  style={{ width: 150 }}
                />
              </>
            )}
            <Select
              placeholder="Status"
              clearable
              icon={<IconFilter size={16} />}
              value={statusFilter}
              onChange={setStatusFilter}
              data={[
                { value: 'active', label: 'Active' },
                { value: 'inactive', label: 'Inactive' },
                { value: 'pending', label: 'Pending' },
              ]}
              style={{ width: 150 }}
            />
          </Group>
        </Group>

        {activeTab === 'team' && (
          <Grid>
            {teamMemberCards.length > 0 ? (
              teamMemberCards
            ) : (
              <Grid.Col span={12}>
                <Text align="center" my={50} color="dimmed">
                  No team members found matching your filters. Try adjusting your search criteria.
                </Text>
              </Grid.Col>
            )}
          </Grid>
        )}

        {activeTab === 'clients' && (
          <Grid>
            {clientCards.length > 0 ? (
              clientCards
            ) : (
              <Grid.Col span={12}>
                <Text align="center" my={50} color="dimmed">
                  No clients found matching your filters. Try adjusting your search criteria.
                </Text>
              </Grid.Col>
            )}
          </Grid>
        )}

        {activeTab === 'permissions' && (
          <Stack spacing="lg">
            <Text align="center" my={50} color="dimmed">
              Permission management is coming soon.
            </Text>
          </Stack>
        )}
      </Paper>
    </MainLayout>
  );
}