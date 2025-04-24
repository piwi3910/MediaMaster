import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Badge,
  Button,
  Card,
  Grid,
  Group,
  Menu,
  Paper,
  Progress,
  Select,
  Stack,
  Tabs,
  Text,
  TextInput,
  Title,
  ActionIcon,
  Modal,
  DateRangePicker
} from '@mantine/core';
import { DateRangePickerValue } from '@mantine/dates';
import { 
  IconAdjustments, 
  IconCalendar, 
  IconChartBar, 
  IconChevronRight, 
  IconCoin, 
  IconDots, 
  IconEdit, 
  IconFilter, 
  IconPlus, 
  IconSearch, 
  IconTrash 
} from '@tabler/icons-react';
import { MainLayout } from '../layouts/MainLayout';

// Mock campaigns data
const mockCampaigns = [
  {
    id: '1',
    name: 'Summer Sale 2023',
    status: 'active',
    platform: 'multiple',
    budget: 5000,
    spent: 2340,
    startDate: '2023-06-01',
    endDate: '2023-08-31',
    performance: 'high',
    objective: 'conversion',
    progress: 47,
  },
  {
    id: '2',
    name: 'Product Launch - XYZ',
    status: 'scheduled',
    platform: 'facebook',
    budget: 3500,
    spent: 0,
    startDate: '2023-07-15',
    endDate: '2023-08-15',
    objective: 'awareness',
    progress: 0,
  },
  {
    id: '3',
    name: 'Brand Awareness Q2',
    status: 'completed',
    platform: 'instagram',
    budget: 4200,
    spent: 4200,
    startDate: '2023-04-01',
    endDate: '2023-06-30',
    performance: 'medium',
    objective: 'awareness',
    progress: 100,
  },
  {
    id: '4',
    name: 'Holiday Special',
    status: 'draft',
    platform: 'twitter',
    budget: 2800,
    spent: 0,
    objective: 'consideration',
    progress: 0,
  },
  {
    id: '5',
    name: 'Webinar Promotion',
    status: 'active',
    platform: 'linkedin',
    budget: 1500,
    spent: 750,
    startDate: '2023-05-15',
    endDate: '2023-07-15',
    performance: 'high',
    objective: 'consideration',
    progress: 50,
  },
  {
    id: '6',
    name: 'Email Newsletter Campaign',
    status: 'active',
    platform: 'email',
    budget: 1000,
    spent: 600,
    startDate: '2023-06-01',
    endDate: '2023-12-31',
    performance: 'medium',
    objective: 'consideration',
    progress: 60,
  },
  {
    id: '7',
    name: 'TikTok Challenge',
    status: 'active',
    platform: 'tiktok',
    budget: 3000,
    spent: 1200,
    startDate: '2023-06-15',
    endDate: '2023-07-15',
    performance: 'high',
    objective: 'awareness',
    progress: 40,
  },
  {
    id: '8',
    name: 'SMS Flash Sale',
    status: 'paused',
    platform: 'sms',
    budget: 800,
    spent: 350,
    startDate: '2023-06-10',
    endDate: '2023-06-12',
    performance: 'medium',
    objective: 'conversion',
    progress: 44,
  },
];

// Status badge component
function StatusBadge({ status }: { status: string }) {
  const colorMap: Record<string, string> = {
    active: 'green',
    scheduled: 'blue',
    completed: 'gray',
    draft: 'yellow',
    paused: 'orange',
  };

  return (
    <Badge color={colorMap[status] || 'gray'}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
}

// Platform badge component
function PlatformBadge({ platform }: { platform: string }) {
  const colorMap: Record<string, string> = {
    instagram: 'grape',
    facebook: 'blue',
    twitter: 'cyan',
    linkedin: 'indigo',
    tiktok: 'dark',
    email: 'orange',
    sms: 'violet',
    multiple: 'pink',
  };

  return (
    <Badge color={colorMap[platform] || 'gray'}>
      {platform.charAt(0).toUpperCase() + platform.slice(1)}
    </Badge>
  );
}

// Objective badge component
function ObjectiveBadge({ objective }: { objective: string }) {
  const colorMap: Record<string, string> = {
    awareness: 'blue',
    consideration: 'violet',
    conversion: 'green',
  };

  return (
    <Badge color={colorMap[objective] || 'gray'}>
      {objective.charAt(0).toUpperCase() + objective.slice(1)}
    </Badge>
  );
}

// Performance badge component
function PerformanceBadge({ performance }: { performance?: string }) {
  if (!performance) return null;
  
  const colorMap: Record<string, string> = {
    high: 'green',
    medium: 'yellow',
    low: 'red',
  };

  return (
    <Badge color={colorMap[performance] || 'gray'}>
      {performance.charAt(0).toUpperCase() + performance.slice(1)} Performance
    </Badge>
  );
}

export function Campaigns() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string | null>('all');
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [platformFilter, setPlatformFilter] = useState<string | null>(null);
  const [objectiveFilter, setObjectiveFilter] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [dateRangeModalOpen, setDateRangeModalOpen] = useState(false);
  const [dateRange, setDateRange] = useState<DateRangePickerValue>([null, null]);

  // Filter campaigns based on active tab, search, and filters
  const filteredCampaigns = mockCampaigns.filter((campaign) => {
    const matchesSearch = campaign.name.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = !statusFilter || campaign.status === statusFilter;
    const matchesPlatform = !platformFilter || campaign.platform === platformFilter;
    const matchesObjective = !objectiveFilter || campaign.objective === objectiveFilter;
    const matchesTab = activeTab === 'all' || 
      (activeTab === 'active' && campaign.status === 'active') ||
      (activeTab === 'scheduled' && campaign.status === 'scheduled') ||
      (activeTab === 'completed' && campaign.status === 'completed') ||
      (activeTab === 'draft' && campaign.status === 'draft') ||
      (activeTab === 'paused' && campaign.status === 'paused');
    
    return matchesSearch && matchesStatus && matchesPlatform && matchesObjective && matchesTab;
  });

  // Campaign cards
  const campaignCards = filteredCampaigns.map((campaign) => (
    <Grid.Col span={4} key={campaign.id}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section withBorder inheritPadding py="xs">
          <Group position="apart">
            <Text weight={500}>{campaign.name}</Text>
            <Menu withinPortal position="bottom-end">
              <Menu.Target>
                <ActionIcon>
                  <IconDots size={16} />
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item
                  icon={<IconEdit size={16} />}
                  onClick={() => navigate(`/campaigns/${campaign.id}/edit`)}
                >
                  Edit
                </Menu.Item>
                <Menu.Item icon={<IconChartBar size={16} />}>View Analytics</Menu.Item>
                {campaign.status === 'active' && (
                  <Menu.Item icon={<IconAdjustments size={16} />}>Pause</Menu.Item>
                )}
                {campaign.status === 'paused' && (
                  <Menu.Item icon={<IconAdjustments size={16} />}>Resume</Menu.Item>
                )}
                {campaign.status === 'draft' && (
                  <Menu.Item icon={<IconAdjustments size={16} />}>Publish</Menu.Item>
                )}
                <Menu.Divider />
                <Menu.Item icon={<IconTrash size={16} />} color="red">Delete</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Card.Section>

        <Group position="apart" mt="md">
          <StatusBadge status={campaign.status} />
          <PlatformBadge platform={campaign.platform} />
        </Group>

        <Group position="apart" mt="md">
          <ObjectiveBadge objective={campaign.objective} />
          <PerformanceBadge performance={campaign.performance} />
        </Group>

        {campaign.startDate && campaign.endDate && (
          <Group position="apart" mt="md">
            <Text size="sm" color="dimmed">Duration</Text>
            <Text size="sm">
              {new Date(campaign.startDate).toLocaleDateString()} - {new Date(campaign.endDate).toLocaleDateString()}
            </Text>
          </Group>
        )}

        <Group position="apart" mt="md">
          <Text size="sm" color="dimmed">Budget</Text>
          <Text size="sm">${campaign.budget.toLocaleString()}</Text>
        </Group>

        <Group position="apart" mt="xs">
          <Text size="sm" color="dimmed">Spent</Text>
          <Text size="sm">${campaign.spent.toLocaleString()} ({Math.round(campaign.spent / campaign.budget * 100)}%)</Text>
        </Group>

        <Progress 
          value={campaign.progress} 
          mt="md" 
          size="sm" 
          color={campaign.progress > 90 ? 'red' : campaign.progress > 70 ? 'yellow' : 'blue'} 
        />

        <Button
          variant="light"
          color="blue"
          fullWidth
          mt="md"
          rightIcon={<IconChevronRight size={16} />}
          onClick={() => navigate(`/campaigns/${campaign.id}`)}
        >
          View Details
        </Button>
      </Card>
    </Grid.Col>
  ));

  return (
    <MainLayout>
      <Group position="apart" mb="md">
        <Title order={2}>Campaigns</Title>
        <Button
          leftSection={<IconPlus size={16} />}
          onClick={() => navigate('/campaigns/create')}
        >
          Create Campaign
        </Button>
      </Group>

      <Tabs value={activeTab} onChange={setActiveTab} mb="md">
        <Tabs.List>
          <Tabs.Tab value="all">All Campaigns</Tabs.Tab>
          <Tabs.Tab value="active">Active</Tabs.Tab>
          <Tabs.Tab value="scheduled">Scheduled</Tabs.Tab>
          <Tabs.Tab value="completed">Completed</Tabs.Tab>
          <Tabs.Tab value="draft">Drafts</Tabs.Tab>
          <Tabs.Tab value="paused">Paused</Tabs.Tab>
        </Tabs.List>
      </Tabs>

      <Paper withBorder p="md" mb="md">
        <Group position="apart" mb="md">
          <TextInput
            placeholder="Search campaigns..."
            icon={<IconSearch size={16} />}
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
            style={{ flex: 1 }}
          />
          <Group>
            <Select
              placeholder="Status"
              clearable
              icon={<IconFilter size={16} />}
              value={statusFilter}
              onChange={setStatusFilter}
              data={[
                { value: 'active', label: 'Active' },
                { value: 'scheduled', label: 'Scheduled' },
                { value: 'completed', label: 'Completed' },
                { value: 'draft', label: 'Draft' },
                { value: 'paused', label: 'Paused' },
              ]}
              style={{ width: 150 }}
            />
            <Select
              placeholder="Platform"
              clearable
              icon={<IconFilter size={16} />}
              value={platformFilter}
              onChange={setPlatformFilter}
              data={[
                { value: 'facebook', label: 'Facebook' },
                { value: 'instagram', label: 'Instagram' },
                { value: 'twitter', label: 'Twitter' },
                { value: 'linkedin', label: 'LinkedIn' },
                { value: 'tiktok', label: 'TikTok' },
                { value: 'email', label: 'Email' },
                { value: 'sms', label: 'SMS' },
                { value: 'multiple', label: 'Multiple' },
              ]}
              style={{ width: 150 }}
            />
            <Select
              placeholder="Objective"
              clearable
              icon={<IconFilter size={16} />}
              value={objectiveFilter}
              onChange={setObjectiveFilter}
              data={[
                { value: 'awareness', label: 'Awareness' },
                { value: 'consideration', label: 'Consideration' },
                { value: 'conversion', label: 'Conversion' },
              ]}
              style={{ width: 150 }}
            />
            <Button
              variant="outline"
              leftSection={<IconCalendar size={16} />}
              onClick={() => setDateRangeModalOpen(true)}
            >
              {dateRange[0] && dateRange[1]
                ? `${dateRange[0].toLocaleDateString()} - ${dateRange[1].toLocaleDateString()}`
                : 'Date Range'
              }
            </Button>

            <Modal
              opened={dateRangeModalOpen}
              onClose={() => setDateRangeModalOpen(false)}
              title="Select Date Range"
              size="md"
            >
              <DateRangePicker
                value={dateRange}
                onChange={setDateRange}
                fullWidth
                clearable
              />
              <Group position="right" mt="md">
                <Button variant="outline" onClick={() => setDateRangeModalOpen(false)}>Cancel</Button>
                <Button onClick={() => {
                  // Apply date filter logic here
                  setDateRangeModalOpen(false);
                }}>Apply</Button>
              </Group>
            </Modal>
          </Group>
        </Group>

        <Grid>
          {campaignCards.length > 0 ? (
            campaignCards
          ) : (
            <Grid.Col span={12}>
              <Text align="center" my={50} color="dimmed">
                No campaigns found matching your filters. Try adjusting your search criteria or create a new campaign.
              </Text>
            </Grid.Col>
          )}
        </Grid>
      </Paper>
    </MainLayout>
  );
}