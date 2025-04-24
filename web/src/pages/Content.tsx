import { useState } from 'react';
import { 
  ActionIcon, 
  Badge, 
  Button, 
  Card, 
  Grid, 
  Group, 
  Image, 
  Menu, 
  Paper, 
  Select, 
  Tabs, 
  Text, 
  TextInput, 
  Title 
} from '@mantine/core';
import { 
  IconCalendar, 
  IconDots, 
  IconEdit, 
  IconEye, 
  IconFilter, 
  IconPlus, 
  IconSearch, 
  IconTrash 
} from '@tabler/icons-react';
import { MainLayout } from '../layouts/MainLayout';

// Mock content items
const mockContentItems = [
  {
    id: '1',
    title: 'Summer Collection Launch',
    type: 'post',
    platform: 'instagram',
    status: 'published',
    date: '2023-06-05',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
    engagement: 1450,
  },
  {
    id: '2',
    title: 'Product Feature: XYZ',
    type: 'video',
    platform: 'facebook',
    status: 'scheduled',
    date: '2023-07-20',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    engagement: 0,
  },
  {
    id: '3',
    title: 'Brand Story',
    type: 'story',
    platform: 'instagram',
    status: 'published',
    date: '2023-06-10',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
    engagement: 950,
  },
  {
    id: '4',
    title: 'Holiday Gift Guide',
    type: 'post',
    platform: 'twitter',
    status: 'draft',
    date: '',
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383',
    engagement: 0,
  },
  {
    id: '5',
    title: 'Webinar Invitation',
    type: 'post',
    platform: 'linkedin',
    status: 'published',
    date: '2023-06-20',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e4',
    engagement: 620,
  },
  {
    id: '6',
    title: 'Monthly Newsletter',
    type: 'email',
    platform: 'email',
    status: 'published',
    date: '2023-06-01',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2',
    engagement: 3200,
  },
];

// Status badge component
function StatusBadge({ status }: { status: string }) {
  const colorMap: Record<string, string> = {
    published: 'green',
    scheduled: 'blue',
    draft: 'yellow',
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
    email: 'orange',
  };

  return (
    <Badge color={colorMap[platform] || 'gray'}>
      {platform.charAt(0).toUpperCase() + platform.slice(1)}
    </Badge>
  );
}

export function Content() {
  const [activeTab, setActiveTab] = useState<string | null>('all');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [platformFilter, setPlatformFilter] = useState<string | null>(null);

  // Filter content items based on search and filters
  const filteredContent = mockContentItems.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = !statusFilter || item.status === statusFilter;
    const matchesPlatform = !platformFilter || item.platform === platformFilter;
    const matchesTab = activeTab === 'all' || 
      (activeTab === 'published' && item.status === 'published') ||
      (activeTab === 'scheduled' && item.status === 'scheduled') ||
      (activeTab === 'draft' && item.status === 'draft');
    
    return matchesSearch && matchesStatus && matchesPlatform && matchesTab;
  });

  const contentCards = filteredContent.map((item) => (
    <Grid.Col span={4} key={item.id}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src={item.image}
            height={160}
            alt={item.title}
          />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{item.title}</Text>
          <Menu position="bottom-end" withinPortal>
            <Menu.Target>
              <ActionIcon>
                <IconDots size={16} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item icon={<IconEye size={16} />}>View</Menu.Item>
              <Menu.Item icon={<IconEdit size={16} />}>Edit</Menu.Item>
              <Menu.Item icon={<IconTrash size={16} />} color="red">Delete</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>

        <Group position="apart">
          <StatusBadge status={item.status} />
          <PlatformBadge platform={item.platform} />
        </Group>

        <Group position="apart" mt="md">
          <Text size="sm" color="dimmed">
            {item.date ? new Date(item.date).toLocaleDateString() : 'No date'}
          </Text>
          <Text size="sm" color="dimmed">
            {item.engagement > 0 ? `${item.engagement} engagements` : 'No data'}
          </Text>
        </Group>
      </Card>
    </Grid.Col>
  ));

  return (
    <MainLayout>
      <Group position="apart" mb="md">
        <Title order={2}>Content</Title>
        <Button leftSection={<IconPlus size={16} />}>Create Content</Button>
      </Group>

      <Tabs value={activeTab} onChange={setActiveTab} mb="md">
        <Tabs.List>
          <Tabs.Tab value="all">All Content</Tabs.Tab>
          <Tabs.Tab value="published">Published</Tabs.Tab>
          <Tabs.Tab value="scheduled">Scheduled</Tabs.Tab>
          <Tabs.Tab value="draft">Drafts</Tabs.Tab>
        </Tabs.List>
      </Tabs>

      <Paper withBorder p="md" mb="md">
        <Group position="apart" mb="md">
          <TextInput
            placeholder="Search content..."
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
                { value: 'published', label: 'Published' },
                { value: 'scheduled', label: 'Scheduled' },
                { value: 'draft', label: 'Draft' },
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
                { value: 'instagram', label: 'Instagram' },
                { value: 'facebook', label: 'Facebook' },
                { value: 'twitter', label: 'Twitter' },
                { value: 'linkedin', label: 'LinkedIn' },
                { value: 'email', label: 'Email' },
              ]}
              style={{ width: 150 }}
            />
            <Button variant="outline" leftSection={<IconCalendar size={16} />}>
              Calendar View
            </Button>
          </Group>
        </Group>

        <Grid>
          {contentCards.length > 0 ? (
            contentCards
          ) : (
            <Grid.Col span={12}>
              <Text align="center" my={50} color="dimmed">
                No content found matching your filters. Try adjusting your search criteria.
              </Text>
            </Grid.Col>
          )}
        </Grid>
      </Paper>
    </MainLayout>
  );
}