import {
  Badge,
  Button,
  Card,
  Grid,
  Group,
  Paper,
  Progress,
  RingProgress,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Title
} from '@mantine/core';
import {
  IconArrowDownRight,
  IconArrowUpRight,
  IconCalendar,
  IconChartBar,
  IconChartLine,
  IconChevronRight,
  IconCoin,
  IconEye,
  IconRefresh,
  IconThumbUp,
  IconUsers
} from '@tabler/icons-react';
import { MainLayout } from '../layouts/MainLayout';
import {
  AreaChart,
  Area,
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
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

// Mock data for upcoming content
const upcomingContent = [
  {
    id: '1',
    title: 'Product Launch Announcement',
    platform: 'facebook',
    scheduledDate: '2023-07-15T10:00:00Z',
  },
  {
    id: '2',
    title: 'Summer Sale Promotion',
    platform: 'instagram',
    scheduledDate: '2023-07-16T14:30:00Z',
  },
  {
    id: '3',
    title: 'Customer Testimonial Video',
    platform: 'linkedin',
    scheduledDate: '2023-07-18T09:00:00Z',
  },
  {
    id: '4',
    title: 'Industry News Update',
    platform: 'twitter',
    scheduledDate: '2023-07-20T11:15:00Z',
  },
];

// Mock data for active campaigns
const activeCampaigns = [
  {
    id: '1',
    name: 'Summer Sale 2023',
    status: 'active',
    platform: 'multiple',
    progress: 65,
    budget: 5000,
    spent: 3250,
    startDate: '2023-06-01',
    endDate: '2023-08-31',
  },
  {
    id: '5',
    name: 'Webinar Promotion',
    status: 'active',
    platform: 'linkedin',
    progress: 50,
    budget: 1500,
    spent: 750,
    startDate: '2023-05-15',
    endDate: '2023-07-15',
  },
  {
    id: '7',
    name: 'TikTok Challenge',
    status: 'active',
    platform: 'tiktok',
    progress: 40,
    budget: 3000,
    spent: 1200,
    startDate: '2023-06-15',
    endDate: '2023-07-15',
  },
];

// Platform badge component
function PlatformBadge({ platform }: { platform: string }) {
  const colorMap: Record<string, string> = {
    instagram: 'grape',
    facebook: 'blue',
    twitter: 'cyan',
    linkedin: 'indigo',
    tiktok: 'dark',
    multiple: 'violet',
  };

  return (
    <Badge color={colorMap[platform] || 'gray'}>
      {platform.charAt(0).toUpperCase() + platform.slice(1)}
    </Badge>
  );
}

// Stat card component
function StatCard({ 
  title, 
  value, 
  change, 
  icon, 
  color 
}: { 
  title: string; 
  value: string; 
  change: number; 
  icon: React.ReactNode; 
  color: string;
}) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group position="apart">
        <Text size="xs" color="dimmed" weight={500}>
          {title}
        </Text>
        <Group spacing={5}>
          {change > 0 ? (
            <IconArrowUpRight size={16} color="green" />
          ) : (
            <IconArrowDownRight size={16} color="red" />
          )}
          <Text size="xs" color={change > 0 ? 'green' : 'red'}>
            {Math.abs(change)}%
          </Text>
        </Group>
      </Group>
      <Group position="apart" mt="md">
        <Text size="xl" weight={700}>
          {value}
        </Text>
        <div style={{ color }}>
          {icon}
        </div>
      </Group>
    </Card>
  );
}

export function Dashboard() {
  const [dateRange, setDateRange] = useState<string | null>('last30');
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Group position="apart" mb="md">
        <Title order={2}>Dashboard</Title>
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
        </Group>
      </Group>

      <SimpleGrid cols={4} mb="md">
        <StatCard
          title="Total Followers"
          value="188,000"
          change={4.8}
          icon={<IconUsers size={24} />}
          color="#228be6"
        />
        <StatCard
          title="Total Impressions"
          value="675,000"
          change={7.2}
          icon={<IconEye size={24} />}
          color="#40c057"
        />
        <StatCard
          title="Total Engagement"
          value="129,000"
          change={5.1}
          icon={<IconThumbUp size={24} />}
          color="#fa5252"
        />
        <StatCard
          title="Total Spent"
          value="$12,450"
          change={-2.3}
          icon={<IconCoin size={24} />}
          color="#fab005"
        />
      </SimpleGrid>

      <Grid mb="md">
        <Grid.Col span={8}>
          <Paper withBorder p="md">
            <Group position="apart" mb="md">
              <Title order={3}>Performance by Platform</Title>
              <Select
                placeholder="Metric"
                defaultValue="engagement"
                data={[
                  { value: 'engagement', label: 'Engagement' },
                  { value: 'impressions', label: 'Impressions' },
                  { value: 'reach', label: 'Reach' },
                  { value: 'clicks', label: 'Clicks' },
                ]}
                style={{ width: 150 }}
              />
            </Group>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="facebook" stackId="1" stroke="#4267B2" fill="#4267B2" />
                <Area type="monotone" dataKey="instagram" stackId="1" stroke="#C13584" fill="#C13584" />
                <Area type="monotone" dataKey="twitter" stackId="1" stroke="#1DA1F2" fill="#1DA1F2" />
                <Area type="monotone" dataKey="linkedin" stackId="1" stroke="#0077B5" fill="#0077B5" />
              </AreaChart>
            </ResponsiveContainer>
          </Paper>
        </Grid.Col>
        <Grid.Col span={4}>
          <Paper withBorder p="md" style={{ height: '100%' }}>
            <Title order={3} mb="md">Audience Distribution</Title>
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
      </Grid>

      <Grid mb="md">
        <Grid.Col span={6}>
          <Paper withBorder p="md">
            <Title order={3} mb="md">Active Campaigns</Title>
            <Stack spacing="md">
              {activeCampaigns.map((campaign) => (
                <Card key={campaign.id} shadow="sm" padding="md" radius="md" withBorder>
                  <Group position="apart" mb="xs">
                    <Text weight={500}>{campaign.name}</Text>
                    <PlatformBadge platform={campaign.platform} />
                  </Group>
                  <Group position="apart" mb="xs">
                    <Text size="sm" color="dimmed">
                      {new Date(campaign.startDate).toLocaleDateString()} - {new Date(campaign.endDate).toLocaleDateString()}
                    </Text>
                    <Text size="sm" weight={500}>
                      ${campaign.spent.toLocaleString()} / ${campaign.budget.toLocaleString()}
                    </Text>
                  </Group>
                  <Progress 
                    value={campaign.progress} 
                    color={campaign.progress > 75 ? 'red' : campaign.progress > 50 ? 'yellow' : 'blue'} 
                    size="sm" 
                    mb="xs" 
                  />
                  <Group position="apart">
                    <Text size="xs" color="dimmed">
                      {campaign.progress}% complete
                    </Text>
                    <Button
                      variant="subtle"
                      rightIcon={<IconChevronRight size={16} />}
                      compact
                      onClick={() => navigate(`/campaigns/${campaign.id}`)}
                    >
                      View Details
                    </Button>
                  </Group>
                </Card>
              ))}
              <Button
                variant="subtle"
                fullWidth
                onClick={() => navigate('/campaigns')}
              >
                View All Campaigns
              </Button>
            </Stack>
          </Paper>
        </Grid.Col>
        <Grid.Col span={6}>
          <Paper withBorder p="md">
            <Title order={3} mb="md">Upcoming Content</Title>
            <Stack spacing="md">
              {upcomingContent.map((content) => (
                <Card key={content.id} shadow="sm" padding="md" radius="md" withBorder>
                  <Group position="apart" mb="xs">
                    <Text weight={500}>{content.title}</Text>
                    <PlatformBadge platform={content.platform} />
                  </Group>
                  <Group position="apart">
                    <Text size="sm" color="dimmed">
                      Scheduled for {new Date(content.scheduledDate).toLocaleString()}
                    </Text>
                    <Button
                      variant="subtle"
                      rightIcon={<IconChevronRight size={16} />}
                      compact
                      onClick={() => navigate(`/content/${content.id}`)}
                    >
                      View
                    </Button>
                  </Group>
                </Card>
              ))}
              <Button
                variant="subtle"
                fullWidth
                onClick={() => navigate('/content?view=calendar')}
              >
                View Content Calendar
              </Button>
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col span={12}>
          <Paper withBorder p="md">
            <Group position="apart" mb="md">
              <Title order={3}>Engagement Metrics</Title>
              <Button
                variant="subtle"
                rightIcon={<IconChevronRight size={16} />}
                onClick={() => navigate('/reports')}
              >
                View Detailed Analytics
              </Button>
            </Group>
            <ResponsiveContainer width="100%" height={300}>
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
        </Grid.Col>
      </Grid>
    </MainLayout>
  );
}