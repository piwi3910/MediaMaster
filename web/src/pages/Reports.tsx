import { useState } from 'react';
import { 
  Button, 
  Card, 
  Grid, 
  Group, 
  Paper, 
  Select, 
  Stack, 
  Tabs, 
  Text, 
  TextInput, 
  Title 
} from '@mantine/core';
import { 
  IconCalendar, 
  IconChartBar, 
  IconChartLine, 
  IconChartPie, 
  IconDownload, 
  IconPlus, 
  IconRefresh, 
  IconSearch 
} from '@tabler/icons-react';
import { MainLayout } from '../layouts/MainLayout';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

// Mock data for charts
const performanceData = [
  { name: 'Jan', facebook: 4000, instagram: 2400, twitter: 2400, linkedin: 1200 },
  { name: 'Feb', facebook: 3000, instagram: 1398, twitter: 2210, linkedin: 1800 },
  { name: 'Mar', facebook: 2000, instagram: 9800, twitter: 2290, linkedin: 2500 },
  { name: 'Apr', facebook: 2780, instagram: 3908, twitter: 2000, linkedin: 1700 },
  { name: 'May', facebook: 1890, instagram: 4800, twitter: 2181, linkedin: 2100 },
  { name: 'Jun', facebook: 2390, instagram: 3800, twitter: 2500, linkedin: 2300 },
];

const engagementData = [
  { name: 'Jan', impressions: 12000, reach: 8000, engagement: 2000 },
  { name: 'Feb', impressions: 15000, reach: 10000, engagement: 2500 },
  { name: 'Mar', impressions: 18000, reach: 12000, engagement: 3000 },
  { name: 'Apr', impressions: 22000, reach: 15000, engagement: 3500 },
  { name: 'May', impressions: 28000, reach: 18000, engagement: 4200 },
  { name: 'Jun', impressions: 32000, reach: 22000, engagement: 5000 },
];

const platformDistributionData = [
  { name: 'Facebook', value: 400, color: '#4267B2' },
  { name: 'Instagram', value: 300, color: '#C13584' },
  { name: 'Twitter', value: 300, color: '#1DA1F2' },
  { name: 'LinkedIn', value: 200, color: '#0077B5' },
];

const contentTypeData = [
  { name: 'Posts', value: 45, color: '#FF6384' },
  { name: 'Stories', value: 120, color: '#36A2EB' },
  { name: 'Reels', value: 25, color: '#FFCE56' },
  { name: 'Videos', value: 18, color: '#4BC0C0' },
  { name: 'Articles', value: 12, color: '#9966FF' },
];

// Mock saved reports
const mockSavedReports = [
  {
    id: '1',
    name: 'Q2 Social Media Performance',
    type: 'performance',
    dateRange: 'Apr 1, 2023 - Jun 30, 2023',
    createdAt: '2023-07-01',
  },
  {
    id: '2',
    name: 'Instagram Campaign Analysis',
    type: 'campaign',
    dateRange: 'May 15, 2023 - Jun 15, 2023',
    createdAt: '2023-06-20',
  },
  {
    id: '3',
    name: 'Content Engagement Report',
    type: 'engagement',
    dateRange: 'Jun 1, 2023 - Jun 30, 2023',
    createdAt: '2023-07-05',
  },
  {
    id: '4',
    name: 'Audience Growth Analysis',
    type: 'audience',
    dateRange: 'Jan 1, 2023 - Jun 30, 2023',
    createdAt: '2023-07-10',
  },
];

export function Reports() {
  const [activeTab, setActiveTab] = useState<string | null>('performance');
  const [dateRange, setDateRange] = useState<string | null>('last30');
  const [search, setSearch] = useState('');

  // Filter saved reports based on search
  const filteredReports = mockSavedReports.filter((report) => {
    return report.name.toLowerCase().includes(search.toLowerCase());
  });

  // Report cards
  const reportCards = filteredReports.map((report) => (
    <Card key={report.id} shadow="sm" padding="lg" radius="md" withBorder mb="md">
      <Group position="apart">
        <div>
          <Text weight={500}>{report.name}</Text>
          <Text size="sm" color="dimmed">{report.dateRange}</Text>
        </div>
        <Group>
          {report.type === 'performance' && <IconChartBar size={20} />}
          {report.type === 'campaign' && <IconChartPie size={20} />}
          {report.type === 'engagement' && <IconChartLine size={20} />}
          {report.type === 'audience' && <IconChartBar size={20} />}
        </Group>
      </Group>
      <Text size="sm" color="dimmed" mt="xs">
        Created on {new Date(report.createdAt).toLocaleDateString()}
      </Text>
      <Group position="apart" mt="md">
        <Button variant="light">View</Button>
        <Button variant="outline" leftSection={<IconDownload size={16} />}>
          Download
        </Button>
      </Group>
    </Card>
  ));

  return (
    <MainLayout>
      <Group position="apart" mb="md">
        <Title order={2}>Reports & Analytics</Title>
        <Group>
          <Select
            placeholder="Date Range"
            value={dateRange}
            onChange={setDateRange}
            data={[
              { value: 'last7', label: 'Last 7 days' },
              { value: 'last30', label: 'Last 30 days' },
              { value: 'last90', label: 'Last 90 days' },
              { value: 'ytd', label: 'Year to date' },
              { value: 'custom', label: 'Custom range' },
            ]}
            style={{ width: 150 }}
            icon={<IconCalendar size={16} />}
          />
          <Button variant="outline" leftSection={<IconRefresh size={16} />}>
            Refresh
          </Button>
          <Button leftSection={<IconPlus size={16} />}>
            Create Report
          </Button>
        </Group>
      </Group>

      <Tabs value={activeTab} onChange={setActiveTab} mb="md">
        <Tabs.List>
          <Tabs.Tab value="performance" icon={<IconChartBar size={16} />}>
            Performance
          </Tabs.Tab>
          <Tabs.Tab value="engagement" icon={<IconChartLine size={16} />}>
            Engagement
          </Tabs.Tab>
          <Tabs.Tab value="distribution" icon={<IconChartPie size={16} />}>
            Distribution
          </Tabs.Tab>
          <Tabs.Tab value="saved" icon={<IconDownload size={16} />}>
            Saved Reports
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>

      {activeTab === 'performance' && (
        <Paper withBorder p="md" mb="md">
          <Title order={3} mb="md">Campaign Performance</Title>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="facebook" fill="#4267B2" />
              <Bar dataKey="instagram" fill="#C13584" />
              <Bar dataKey="twitter" fill="#1DA1F2" />
              <Bar dataKey="linkedin" fill="#0077B5" />
            </BarChart>
          </ResponsiveContainer>
        </Paper>
      )}

      {activeTab === 'engagement' && (
        <Paper withBorder p="md" mb="md">
          <Title order={3} mb="md">Engagement Metrics</Title>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="impressions" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="reach" stroke="#82ca9d" />
              <Line type="monotone" dataKey="engagement" stroke="#ffc658" />
            </LineChart>
          </ResponsiveContainer>
        </Paper>
      )}

      {activeTab === 'distribution' && (
        <Grid>
          <Grid.Col span={6}>
            <Paper withBorder p="md" mb="md">
              <Title order={3} mb="md">Platform Distribution</Title>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={platformDistributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {platformDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Paper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Paper withBorder p="md" mb="md">
              <Title order={3} mb="md">Content Type Distribution</Title>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={contentTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {contentTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Paper>
          </Grid.Col>
        </Grid>
      )}

      {activeTab === 'saved' && (
        <Paper withBorder p="md" mb="md">
          <Group position="apart" mb="md">
            <TextInput
              placeholder="Search reports..."
              icon={<IconSearch size={16} />}
              value={search}
              onChange={(event) => setSearch(event.currentTarget.value)}
              style={{ flex: 1 }}
            />
          </Group>

          <Stack>
            {reportCards.length > 0 ? (
              reportCards
            ) : (
              <Text align="center" my={50} color="dimmed">
                No saved reports found. Create a new report to get started.
              </Text>
            )}
          </Stack>
        </Paper>
      )}
    </MainLayout>
  );
}