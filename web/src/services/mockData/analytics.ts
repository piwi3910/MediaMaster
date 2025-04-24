export interface DailyMetric {
  date: string;
  impressions: number;
  reach: number;
  engagement: number;
  clicks: number;
  conversions: number;
}

export interface PlatformMetric {
  platform: string;
  impressions: number;
  reach: number;
  engagement: number;
  clicks: number;
  conversions: number;
  followers: number;
  growth: number;
}

export interface CampaignMetric {
  campaignId: string;
  name: string;
  impressions: number;
  reach: number;
  engagement: number;
  clicks: number;
  conversions: number;
  ctr: number;
  cpc: number;
  roas?: number;
}

export interface ContentTypeMetric {
  type: string;
  count: number;
  impressions: number;
  engagement: number;
  engagementRate: number;
}

export interface AudienceDemographic {
  ageGroup: string;
  percentage: number;
}

export interface AudienceLocation {
  country: string;
  percentage: number;
}

export interface AudienceInterest {
  interest: string;
  percentage: number;
}

export interface AnalyticsData {
  dailyMetrics: DailyMetric[];
  platformMetrics: PlatformMetric[];
  campaignMetrics: CampaignMetric[];
  contentTypeMetrics: ContentTypeMetric[];
  audienceDemographics: AudienceDemographic[];
  audienceLocations: AudienceLocation[];
  audienceInterests: AudienceInterest[];
  totalFollowers: number;
  followerGrowth: number;
  totalImpressions: number;
  totalReach: number;
  totalEngagement: number;
  totalClicks: number;
  totalConversions: number;
  averageCTR: number;
  averageCPC: number;
  averageROAS: number;
}

// Generate the last 30 days of daily metrics
const generateDailyMetrics = (): DailyMetric[] => {
  const dailyMetrics: DailyMetric[] = [];
  const today = new Date();
  
  for (let i = 29; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    // Generate random metrics with some variation but general upward trend
    const dayFactor = 1 + (30 - i) / 100; // Slight upward trend
    const randomFactor = 0.8 + Math.random() * 0.4; // Random variation
    const factor = dayFactor * randomFactor;
    
    dailyMetrics.push({
      date: date.toISOString().split('T')[0],
      impressions: Math.round(5000 * factor),
      reach: Math.round(3500 * factor),
      engagement: Math.round(800 * factor),
      clicks: Math.round(400 * factor),
      conversions: Math.round(40 * factor),
    });
  }
  
  return dailyMetrics;
};

export const mockAnalytics: AnalyticsData = {
  dailyMetrics: generateDailyMetrics(),
  
  platformMetrics: [
    {
      platform: 'Facebook',
      impressions: 125000,
      reach: 95000,
      engagement: 22000,
      clicks: 15000,
      conversions: 1200,
      followers: 45000,
      growth: 3.5,
    },
    {
      platform: 'Instagram',
      impressions: 180000,
      reach: 120000,
      engagement: 35000,
      clicks: 12000,
      conversions: 950,
      followers: 62000,
      growth: 5.2,
    },
    {
      platform: 'Twitter',
      impressions: 85000,
      reach: 70000,
      engagement: 15000,
      clicks: 8500,
      conversions: 420,
      followers: 28000,
      growth: 2.8,
    },
    {
      platform: 'LinkedIn',
      impressions: 65000,
      reach: 50000,
      engagement: 12000,
      clicks: 9500,
      conversions: 750,
      followers: 18000,
      growth: 4.1,
    },
    {
      platform: 'TikTok',
      impressions: 220000,
      reach: 180000,
      engagement: 45000,
      clicks: 18000,
      conversions: 1100,
      followers: 35000,
      growth: 8.5,
    },
  ],
  
  campaignMetrics: [
    {
      campaignId: '1',
      name: 'Summer Sale 2023',
      impressions: 125000,
      reach: 85000,
      engagement: 12500,
      clicks: 7500,
      conversions: 450,
      ctr: 6,
      cpc: 0.31,
      roas: 3.2,
    },
    {
      campaignId: '3',
      name: 'Brand Awareness Q2',
      impressions: 210000,
      reach: 150000,
      engagement: 18000,
      clicks: 9500,
      conversions: 320,
      ctr: 4.5,
      cpc: 0.44,
      roas: 2.1,
    },
    {
      campaignId: '5',
      name: 'Webinar Promotion',
      impressions: 45000,
      reach: 30000,
      engagement: 3800,
      clicks: 2200,
      conversions: 180,
      ctr: 7.3,
      cpc: 0.34,
    },
    {
      campaignId: '6',
      name: 'Email Newsletter Campaign',
      impressions: 25000,
      reach: 24000,
      engagement: 5200,
      clicks: 3100,
      conversions: 210,
      ctr: 12.9,
      cpc: 0.19,
      roas: 2.8,
    },
    {
      campaignId: '7',
      name: 'TikTok Challenge',
      impressions: 180000,
      reach: 120000,
      engagement: 25000,
      clicks: 8500,
      conversions: 320,
      ctr: 7.1,
      cpc: 0.14,
    },
  ],
  
  contentTypeMetrics: [
    {
      type: 'Post',
      count: 45,
      impressions: 250000,
      engagement: 35000,
      engagementRate: 14,
    },
    {
      type: 'Story',
      count: 120,
      impressions: 180000,
      engagement: 22000,
      engagementRate: 12.2,
    },
    {
      type: 'Reel',
      count: 25,
      impressions: 320000,
      engagement: 65000,
      engagementRate: 20.3,
    },
    {
      type: 'Video',
      count: 18,
      impressions: 210000,
      engagement: 38000,
      engagementRate: 18.1,
    },
    {
      type: 'Article',
      count: 12,
      impressions: 45000,
      engagement: 8500,
      engagementRate: 18.9,
    },
    {
      type: 'Email',
      count: 8,
      impressions: 120000,
      engagement: 25000,
      engagementRate: 20.8,
    },
    {
      type: 'SMS',
      count: 5,
      impressions: 35000,
      engagement: 6200,
      engagementRate: 17.7,
    },
  ],
  
  audienceDemographics: [
    { ageGroup: '18-24', percentage: 22 },
    { ageGroup: '25-34', percentage: 35 },
    { ageGroup: '35-44', percentage: 25 },
    { ageGroup: '45-54', percentage: 12 },
    { ageGroup: '55+', percentage: 6 },
  ],
  
  audienceLocations: [
    { country: 'United States', percentage: 45 },
    { country: 'United Kingdom', percentage: 15 },
    { country: 'Canada', percentage: 12 },
    { country: 'Australia', percentage: 8 },
    { country: 'Germany', percentage: 5 },
    { country: 'France', percentage: 4 },
    { country: 'Other', percentage: 11 },
  ],
  
  audienceInterests: [
    { interest: 'Fashion', percentage: 35 },
    { interest: 'Technology', percentage: 28 },
    { interest: 'Travel', percentage: 25 },
    { interest: 'Food & Dining', percentage: 22 },
    { interest: 'Fitness', percentage: 20 },
    { interest: 'Home & Garden', percentage: 18 },
    { interest: 'Beauty', percentage: 15 },
    { interest: 'Entertainment', percentage: 12 },
  ],
  
  totalFollowers: 188000,
  followerGrowth: 4.8,
  totalImpressions: 675000,
  totalReach: 515000,
  totalEngagement: 129000,
  totalClicks: 63000,
  totalConversions: 4420,
  averageCTR: 9.33,
  averageCPC: 0.28,
  averageROAS: 2.7,
};

// Helper function to get daily metrics for a specific date range
export const getDailyMetrics = (startDate: string, endDate: string): DailyMetric[] => {
  return mockAnalytics.dailyMetrics.filter(
    metric => metric.date >= startDate && metric.date <= endDate
  );
};

// Helper function to get metrics for a specific platform
export const getPlatformMetrics = (platform: string): PlatformMetric | undefined => {
  return mockAnalytics.platformMetrics.find(
    metric => metric.platform.toLowerCase() === platform.toLowerCase()
  );
};

// Helper function to get metrics for a specific campaign
export const getCampaignMetrics = (campaignId: string): CampaignMetric | undefined => {
  return mockAnalytics.campaignMetrics.find(
    metric => metric.campaignId === campaignId
  );
};

// Helper function to get metrics for a specific content type
export const getContentTypeMetrics = (type: string): ContentTypeMetric | undefined => {
  return mockAnalytics.contentTypeMetrics.find(
    metric => metric.type.toLowerCase() === type.toLowerCase()
  );
};