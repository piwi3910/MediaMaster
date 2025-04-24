import { 
  AnalyticsData, 
  AudienceDemographic, 
  AudienceInterest, 
  AudienceLocation, 
  CampaignMetric, 
  ContentTypeMetric, 
  DailyMetric, 
  PlatformMetric, 
  getDailyMetrics, 
  getCampaignMetrics, 
  getContentTypeMetrics, 
  getPlatformMetrics, 
  mockAnalytics 
} from '../mockData/analytics';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Interface for analytics filters
export interface AnalyticsFilters {
  dateFrom?: string;
  dateTo?: string;
  platform?: string;
  campaignId?: string;
  contentType?: string;
}

// Get dashboard analytics overview
export const getDashboardAnalytics = async (): Promise<AnalyticsData> => {
  // Simulate API delay
  await delay(1000);
  
  return mockAnalytics;
};

// Get daily metrics with optional date range
export const getDailyMetricsService = async (dateFrom?: string, dateTo?: string): Promise<DailyMetric[]> => {
  // Simulate API delay
  await delay(800);
  
  if (dateFrom && dateTo) {
    return getDailyMetrics(dateFrom, dateTo);
  }
  
  // If no date range provided, return all daily metrics
  return mockAnalytics.dailyMetrics;
};

// Get platform metrics with optional platform filter
export const getPlatformMetricsService = async (platform?: string): Promise<PlatformMetric | PlatformMetric[]> => {
  // Simulate API delay
  await delay(700);
  
  if (platform) {
    const platformMetric = getPlatformMetrics(platform);
    return platformMetric || mockAnalytics.platformMetrics[0]; // Return first platform if not found
  }
  
  // If no platform provided, return all platform metrics
  return mockAnalytics.platformMetrics;
};

// Get campaign metrics with optional campaign filter
export const getCampaignMetricsService = async (campaignId?: string): Promise<CampaignMetric | CampaignMetric[]> => {
  // Simulate API delay
  await delay(700);
  
  if (campaignId) {
    const campaignMetric = getCampaignMetrics(campaignId);
    return campaignMetric || mockAnalytics.campaignMetrics[0]; // Return first campaign if not found
  }
  
  // If no campaign provided, return all campaign metrics
  return mockAnalytics.campaignMetrics;
};

// Get content type metrics with optional content type filter
export const getContentTypeMetricsService = async (contentType?: string): Promise<ContentTypeMetric | ContentTypeMetric[]> => {
  // Simulate API delay
  await delay(700);
  
  if (contentType) {
    const contentTypeMetric = getContentTypeMetrics(contentType);
    return contentTypeMetric || mockAnalytics.contentTypeMetrics[0]; // Return first content type if not found
  }
  
  // If no content type provided, return all content type metrics
  return mockAnalytics.contentTypeMetrics;
};

// Get audience demographics
export const getAudienceDemographics = async (): Promise<AudienceDemographic[]> => {
  // Simulate API delay
  await delay(600);
  
  return mockAnalytics.audienceDemographics;
};

// Get audience locations
export const getAudienceLocations = async (): Promise<AudienceLocation[]> => {
  // Simulate API delay
  await delay(600);
  
  return mockAnalytics.audienceLocations;
};

// Get audience interests
export const getAudienceInterests = async (): Promise<AudienceInterest[]> => {
  // Simulate API delay
  await delay(600);
  
  return mockAnalytics.audienceInterests;
};

// Get total followers and growth
export const getFollowersData = async (): Promise<{ totalFollowers: number; followerGrowth: number }> => {
  // Simulate API delay
  await delay(500);
  
  return {
    totalFollowers: mockAnalytics.totalFollowers,
    followerGrowth: mockAnalytics.followerGrowth,
  };
};

// Get engagement metrics
export const getEngagementMetrics = async (): Promise<{
  totalImpressions: number;
  totalReach: number;
  totalEngagement: number;
  totalClicks: number;
  totalConversions: number;
}> => {
  // Simulate API delay
  await delay(700);
  
  return {
    totalImpressions: mockAnalytics.totalImpressions,
    totalReach: mockAnalytics.totalReach,
    totalEngagement: mockAnalytics.totalEngagement,
    totalClicks: mockAnalytics.totalClicks,
    totalConversions: mockAnalytics.totalConversions,
  };
};

// Get performance metrics
export const getPerformanceMetrics = async (): Promise<{
  averageCTR: number;
  averageCPC: number;
  averageROAS: number;
}> => {
  // Simulate API delay
  await delay(700);
  
  return {
    averageCTR: mockAnalytics.averageCTR,
    averageCPC: mockAnalytics.averageCPC,
    averageROAS: mockAnalytics.averageROAS,
  };
};

// Get filtered analytics data
export const getFilteredAnalytics = async (filters: AnalyticsFilters): Promise<Partial<AnalyticsData>> => {
  // Simulate API delay
  await delay(1000);
  
  let result: Partial<AnalyticsData> = {};
  
  // Filter daily metrics by date range
  if (filters.dateFrom && filters.dateTo) {
    result.dailyMetrics = getDailyMetrics(filters.dateFrom, filters.dateTo);
  }
  
  // Filter platform metrics by platform
  if (filters.platform) {
    const platformMetric = getPlatformMetrics(filters.platform);
    if (platformMetric) {
      result.platformMetrics = [platformMetric];
    }
  }
  
  // Filter campaign metrics by campaign
  if (filters.campaignId) {
    const campaignMetric = getCampaignMetrics(filters.campaignId);
    if (campaignMetric) {
      result.campaignMetrics = [campaignMetric];
    }
  }
  
  // Filter content type metrics by content type
  if (filters.contentType) {
    const contentTypeMetric = getContentTypeMetrics(filters.contentType);
    if (contentTypeMetric) {
      result.contentTypeMetrics = [contentTypeMetric];
    }
  }
  
  // Include other analytics data
  if (!filters.platform && !filters.campaignId && !filters.contentType) {
    result = { ...mockAnalytics, ...result };
  }
  
  return result;
};

// Generate a report
export const generateReport = async (
  reportName: string,
  dateFrom: string,
  dateTo: string,
  filters: Partial<AnalyticsFilters>
): Promise<{ reportId: string; reportUrl: string }> => {
  // Simulate API delay
  await delay(1500);
  
  // In a real app, we would generate a report and return a URL to download it
  // For this mock, we'll just return a fake report ID and URL
  
  const reportId = `report-${Math.random().toString(36).substring(2)}`;
  const reportUrl = `https://example.com/reports/${reportId}.pdf`;
  
  return {
    reportId,
    reportUrl,
  };
};