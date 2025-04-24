import { useState } from 'react';
import { 
  ActionIcon, 
  Avatar, 
  Badge, 
  Button, 
  Card, 
  Grid, 
  Group, 
  Image, 
  Paper, 
  Select, 
  SimpleGrid, 
  Stack, 
  Tabs, 
  Text, 
  TextInput, 
  Title 
} from '@mantine/core';
import { 
  IconBrandFacebook, 
  IconBrandInstagram, 
  IconBrandLinkedin, 
  IconBrandTwitter, 
  IconBrandTiktok,
  IconMessageCircle, 
  IconPlus, 
  IconRefresh, 
  IconSearch, 
  IconShare, 
  IconThumbUp 
} from '@tabler/icons-react';
import { MainLayout } from '../layouts/MainLayout';

// Mock social accounts
const mockSocialAccounts = [
  {
    id: '1',
    platform: 'facebook',
    name: 'MediaMaster Official',
    handle: '@mediamasterofficial',
    followers: 45000,
    growth: 3.5,
    avatar: 'https://images.unsplash.com/photo-1633675254053-d96c7668c3b8',
    connected: true,
  },
  {
    id: '2',
    platform: 'instagram',
    name: 'MediaMaster',
    handle: '@mediamaster',
    followers: 62000,
    growth: 5.2,
    avatar: 'https://images.unsplash.com/photo-1633675254053-d96c7668c3b8',
    connected: true,
  },
  {
    id: '3',
    platform: 'twitter',
    name: 'MediaMaster',
    handle: '@mediamaster',
    followers: 28000,
    growth: 2.8,
    avatar: 'https://images.unsplash.com/photo-1633675254053-d96c7668c3b8',
    connected: true,
  },
  {
    id: '4',
    platform: 'linkedin',
    name: 'MediaMaster Inc.',
    handle: 'mediamaster-inc',
    followers: 18000,
    growth: 4.1,
    avatar: 'https://images.unsplash.com/photo-1633675254053-d96c7668c3b8',
    connected: true,
  },
  {
    id: '5',
    platform: 'tiktok',
    name: 'MediaMaster',
    handle: '@mediamaster',
    followers: 35000,
    growth: 8.5,
    avatar: 'https://images.unsplash.com/photo-1633675254053-d96c7668c3b8',
    connected: true,
  },
];

// Mock social posts
const mockSocialPosts = [
  {
    id: '1',
    platform: 'instagram',
    account: 'MediaMaster',
    content: 'Check out our latest product launch! #NewRelease #Innovation',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
    likes: 1250,
    comments: 85,
    shares: 45,
    date: '2023-06-15',
  },
  {
    id: '2',
    platform: 'facebook',
    account: 'MediaMaster Official',
    content: "We're excited to announce our new partnership with XYZ Corp! Together we'll be bringing you even more amazing features and services.",
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216',
    likes: 890,
    comments: 56,
    shares: 120,
    date: '2023-06-10',
  },
  {
    id: '3',
    platform: 'twitter',
    account: 'MediaMaster',
    content: 'Just released our Q2 report! Revenue up 25% YoY. Thanks to all our amazing customers and team members! #Growth #Success',
    image: '',
    likes: 450,
    comments: 32,
    shares: 78,
    date: '2023-06-05',
  },
  {
    id: '4',
    platform: 'linkedin',
    account: 'MediaMaster Inc.',
    content: "We're hiring! Join our growing team of marketing professionals and help shape the future of digital marketing. Apply through the link in our bio.",
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521',
    likes: 320,
    comments: 45,
    shares: 65,
    date: '2023-06-01',
  },
  {
    id: '5',
    platform: 'tiktok',
    account: 'MediaMaster',
    content: 'Behind the scenes at our latest photoshoot! #BTS #Marketing #CreativeTeam',
    image: 'https://images.unsplash.com/photo-1574717024453-354056aafa98',
    likes: 2800,
    comments: 145,
    shares: 320,
    date: '2023-05-28',
  },
];

// Platform icon component
function PlatformIcon({ platform, size = 24 }: { platform: string; size?: number }) {
  switch (platform) {
    case 'facebook':
      return <IconBrandFacebook size={size} color="#4267B2" />;
    case 'instagram':
      return <IconBrandInstagram size={size} color="#C13584" />;
    case 'twitter':
      return <IconBrandTwitter size={size} color="#1DA1F2" />;
    case 'linkedin':
      return <IconBrandLinkedin size={size} color="#0077B5" />;
    case 'tiktok':
      return <IconBrandTiktok size={size} color="#000000" />;
    default:
      return null;
  }
}

export function SocialMedia() {
  const [activeTab, setActiveTab] = useState<string | null>('accounts');
  const [platformFilter, setPlatformFilter] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  // Filter social accounts based on platform filter
  const filteredAccounts = mockSocialAccounts.filter((account) => {
    return !platformFilter || account.platform === platformFilter;
  });

  // Filter social posts based on search and platform filter
  const filteredPosts = mockSocialPosts.filter((post) => {
    const matchesSearch = post.content.toLowerCase().includes(search.toLowerCase());
    const matchesPlatform = !platformFilter || post.platform === platformFilter;
    
    return matchesSearch && matchesPlatform;
  });

  // Account cards
  const accountCards = filteredAccounts.map((account) => (
    <Card key={account.id} shadow="sm" padding="lg" radius="md" withBorder>
      <Group position="apart">
        <Group>
          <Avatar src={account.avatar} radius="xl" size="lg" />
          <div>
            <Text weight={500}>{account.name}</Text>
            <Text size="sm" color="dimmed">{account.handle}</Text>
          </div>
        </Group>
        <PlatformIcon platform={account.platform} size={30} />
      </Group>

      <Group position="apart" mt="md">
        <div>
          <Text size="sm" color="dimmed">Followers</Text>
          <Text weight={500}>{account.followers.toLocaleString()}</Text>
        </div>
        <div>
          <Text size="sm" color="dimmed">Growth</Text>
          <Text weight={500} color={account.growth > 0 ? 'teal' : 'red'}>
            {account.growth > 0 ? '+' : ''}{account.growth}%
          </Text>
        </div>
        <div>
          <Text size="sm" color="dimmed">Status</Text>
          <Badge color={account.connected ? 'green' : 'red'}>
            {account.connected ? 'Connected' : 'Disconnected'}
          </Badge>
        </div>
      </Group>

      <Button variant="light" color="blue" fullWidth mt="md">
        Manage Account
      </Button>
    </Card>
  ));

  // Post cards
  const postCards = filteredPosts.map((post) => (
    <Card key={post.id} shadow="sm" padding="lg" radius="md" withBorder>
      <Group position="apart" mb="xs">
        <Group>
          <PlatformIcon platform={post.platform} />
          <Text weight={500}>{post.account}</Text>
        </Group>
        <Text size="sm" color="dimmed">
          {new Date(post.date).toLocaleDateString()}
        </Text>
      </Group>

      <Text size="sm" mb="md">{post.content}</Text>

      {post.image && (
        <Card.Section mb="md">
          <Image
            src={post.image}
            height={180}
            alt={post.content}
          />
        </Card.Section>
      )}

      <Group position="apart">
        <Group spacing="xs">
          <ActionIcon variant="subtle">
            <IconThumbUp size={16} />
          </ActionIcon>
          <Text size="sm">{post.likes}</Text>
        </Group>
        <Group spacing="xs">
          <ActionIcon variant="subtle">
            <IconMessageCircle size={16} />
          </ActionIcon>
          <Text size="sm">{post.comments}</Text>
        </Group>
        <Group spacing="xs">
          <ActionIcon variant="subtle">
            <IconShare size={16} />
          </ActionIcon>
          <Text size="sm">{post.shares}</Text>
        </Group>
      </Group>
    </Card>
  ));

  return (
    <MainLayout>
      <Group position="apart" mb="md">
        <Title order={2}>Social Media</Title>
        <Group>
          <Button variant="outline" leftSection={<IconRefresh size={16} />}>
            Refresh
          </Button>
          <Button leftSection={<IconPlus size={16} />}>
            Connect Account
          </Button>
        </Group>
      </Group>

      <Tabs value={activeTab} onChange={setActiveTab} mb="md">
        <Tabs.List>
          <Tabs.Tab value="accounts">Connected Accounts</Tabs.Tab>
          <Tabs.Tab value="feed">Social Feed</Tabs.Tab>
          <Tabs.Tab value="mentions">Mentions</Tabs.Tab>
          <Tabs.Tab value="analytics">Analytics</Tabs.Tab>
        </Tabs.List>
      </Tabs>

      <Paper withBorder p="md" mb="md">
        <Group position="apart" mb="md">
          {activeTab === 'feed' && (
            <TextInput
              placeholder="Search posts..."
              icon={<IconSearch size={16} />}
              value={search}
              onChange={(event) => setSearch(event.currentTarget.value)}
              style={{ flex: 1 }}
            />
          )}
          <Select
            placeholder="Platform"
            clearable
            value={platformFilter}
            onChange={setPlatformFilter}
            data={[
              { value: 'facebook', label: 'Facebook' },
              { value: 'instagram', label: 'Instagram' },
              { value: 'twitter', label: 'Twitter' },
              { value: 'linkedin', label: 'LinkedIn' },
              { value: 'tiktok', label: 'TikTok' },
            ]}
            style={{ width: 150 }}
          />
        </Group>

        {activeTab === 'accounts' && (
          <SimpleGrid cols={3} spacing="lg">
            {accountCards}
          </SimpleGrid>
        )}

        {activeTab === 'feed' && (
          <Stack spacing="lg">
            {postCards.length > 0 ? (
              postCards
            ) : (
              <Text align="center" my={50} color="dimmed">
                No posts found matching your filters. Try adjusting your search criteria.
              </Text>
            )}
          </Stack>
        )}

        {activeTab === 'mentions' && (
          <Text align="center" my={50} color="dimmed">
            Mentions tracking is coming soon.
          </Text>
        )}

        {activeTab === 'analytics' && (
          <Text align="center" my={50} color="dimmed">
            Detailed social media analytics are coming soon.
          </Text>
        )}
      </Paper>
    </MainLayout>
  );
}