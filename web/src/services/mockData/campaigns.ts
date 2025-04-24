export interface Campaign {
  id: string;
  name: string;
  status: 'draft' | 'scheduled' | 'active' | 'paused' | 'completed';
  platform: 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'tiktok' | 'email' | 'sms' | 'multiple';
  budget: number;
  spent: number;
  startDate?: string;
  endDate?: string;
  performance?: 'low' | 'medium' | 'high';
  objective: 'awareness' | 'consideration' | 'conversion';
  targetAudience: string[];
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  metrics?: {
    impressions: number;
    reach: number;
    engagement: number;
    clicks: number;
    conversions: number;
    ctr: number;
    cpc: number;
    roas?: number;
  };
}

export const mockCampaigns: Campaign[] = [
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
    targetAudience: ['18-35', 'fashion-enthusiasts', 'previous-customers'],
    createdBy: '2',
    createdAt: '2023-05-15T10:30:00Z',
    updatedAt: '2023-06-02T14:45:00Z',
    metrics: {
      impressions: 125000,
      reach: 85000,
      engagement: 12500,
      clicks: 7500,
      conversions: 450,
      ctr: 6,
      cpc: 0.31,
      roas: 3.2,
    },
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
    targetAudience: ['25-45', 'tech-enthusiasts', 'high-income'],
    createdBy: '3',
    createdAt: '2023-06-10T09:15:00Z',
    updatedAt: '2023-06-10T09:15:00Z',
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
    targetAudience: ['18-30', 'lifestyle', 'urban'],
    createdBy: '2',
    createdAt: '2023-03-20T11:00:00Z',
    updatedAt: '2023-07-02T16:30:00Z',
    metrics: {
      impressions: 210000,
      reach: 150000,
      engagement: 18000,
      clicks: 9500,
      conversions: 320,
      ctr: 4.5,
      cpc: 0.44,
      roas: 2.1,
    },
  },
  {
    id: '4',
    name: 'Holiday Special',
    status: 'draft',
    platform: 'twitter',
    budget: 2800,
    spent: 0,
    objective: 'consideration',
    targetAudience: ['all-ages', 'gift-shoppers', 'holiday-planners'],
    createdBy: '4',
    createdAt: '2023-06-25T13:45:00Z',
    updatedAt: '2023-06-25T13:45:00Z',
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
    targetAudience: ['25-55', 'professionals', 'industry-specific'],
    createdBy: '3',
    createdAt: '2023-05-01T10:00:00Z',
    updatedAt: '2023-05-16T09:30:00Z',
    metrics: {
      impressions: 45000,
      reach: 30000,
      engagement: 3800,
      clicks: 2200,
      conversions: 180,
      ctr: 7.3,
      cpc: 0.34,
    },
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
    targetAudience: ['existing-customers', 'subscribers'],
    createdBy: '4',
    createdAt: '2023-05-20T14:20:00Z',
    updatedAt: '2023-06-05T11:15:00Z',
    metrics: {
      impressions: 25000,
      reach: 24000,
      engagement: 5200,
      clicks: 3100,
      conversions: 210,
      ctr: 12.9,
      cpc: 0.19,
      roas: 2.8,
    },
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
    targetAudience: ['13-24', 'gen-z', 'trend-followers'],
    createdBy: '2',
    createdAt: '2023-06-01T09:45:00Z',
    updatedAt: '2023-06-16T10:30:00Z',
    metrics: {
      impressions: 180000,
      reach: 120000,
      engagement: 25000,
      clicks: 8500,
      conversions: 320,
      ctr: 7.1,
      cpc: 0.14,
    },
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
    targetAudience: ['opted-in-customers', 'previous-buyers'],
    createdBy: '3',
    createdAt: '2023-06-05T15:30:00Z',
    updatedAt: '2023-06-11T12:00:00Z',
    metrics: {
      impressions: 15000,
      reach: 15000,
      engagement: 2200,
      clicks: 1800,
      conversions: 320,
      ctr: 12,
      cpc: 0.19,
      roas: 4.1,
    },
  },
  {
    id: '9',
    name: 'Retargeting Campaign',
    status: 'active',
    platform: 'multiple',
    budget: 2500,
    spent: 1100,
    startDate: '2023-05-01',
    endDate: '2023-07-31',
    performance: 'high',
    objective: 'conversion',
    targetAudience: ['website-visitors', 'cart-abandoners'],
    createdBy: '4',
    createdAt: '2023-04-20T11:15:00Z',
    updatedAt: '2023-05-02T09:30:00Z',
    metrics: {
      impressions: 75000,
      reach: 35000,
      engagement: 8200,
      clicks: 6500,
      conversions: 580,
      ctr: 18.6,
      cpc: 0.17,
      roas: 5.2,
    },
  },
  {
    id: '10',
    name: 'Influencer Partnership',
    status: 'scheduled',
    platform: 'instagram',
    budget: 4500,
    spent: 0,
    startDate: '2023-08-01',
    endDate: '2023-08-31',
    objective: 'consideration',
    targetAudience: ['18-35', 'fashion-enthusiasts', 'beauty-enthusiasts'],
    createdBy: '2',
    createdAt: '2023-06-28T13:00:00Z',
    updatedAt: '2023-06-28T13:00:00Z',
  },
];

// Helper function to find a campaign by ID
export const findCampaignById = (id: string): Campaign | undefined => {
  return mockCampaigns.find(campaign => campaign.id === id);
};

// Helper function to get campaigns by status
export const getCampaignsByStatus = (status: Campaign['status']): Campaign[] => {
  return mockCampaigns.filter(campaign => campaign.status === status);
};

// Helper function to get campaigns by platform
export const getCampaignsByPlatform = (platform: Campaign['platform']): Campaign[] => {
  return mockCampaigns.filter(campaign => campaign.platform === platform);
};

// Helper function to get campaigns by creator
export const getCampaignsByCreator = (creatorId: string): Campaign[] => {
  return mockCampaigns.filter(campaign => campaign.createdBy === creatorId);
};