import { 
  Campaign, 
  findCampaignById, 
  getCampaignsByCreator, 
  getCampaignsByPlatform, 
  getCampaignsByStatus, 
  mockCampaigns 
} from '../mockData/campaigns';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Interface for campaign filters
export interface CampaignFilters {
  status?: Campaign['status'];
  platform?: Campaign['platform'];
  createdBy?: string;
  search?: string;
}

// Interface for campaign creation/update
export interface CampaignInput {
  name: string;
  status: Campaign['status'];
  platform: Campaign['platform'];
  budget: number;
  startDate?: string;
  endDate?: string;
  objective: Campaign['objective'];
  targetAudience: string[];
}

// Get all campaigns with optional filters
export const getCampaigns = async (filters?: CampaignFilters): Promise<Campaign[]> => {
  // Simulate API delay
  await delay(800);
  
  let filteredCampaigns = [...mockCampaigns];
  
  // Apply filters if provided
  if (filters) {
    if (filters.status) {
      filteredCampaigns = filteredCampaigns.filter(campaign => campaign.status === filters.status);
    }
    
    if (filters.platform) {
      filteredCampaigns = filteredCampaigns.filter(campaign => campaign.platform === filters.platform);
    }
    
    if (filters.createdBy) {
      filteredCampaigns = filteredCampaigns.filter(campaign => campaign.createdBy === filters.createdBy);
    }
    
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filteredCampaigns = filteredCampaigns.filter(campaign => 
        campaign.name.toLowerCase().includes(searchLower)
      );
    }
  }
  
  return filteredCampaigns;
};

// Get a single campaign by ID
export const getCampaign = async (id: string): Promise<Campaign | null> => {
  // Simulate API delay
  await delay(500);
  
  const campaign = findCampaignById(id);
  
  return campaign || null;
};

// Create a new campaign
export const createCampaign = async (campaignData: CampaignInput, userId: string): Promise<Campaign> => {
  // Simulate API delay
  await delay(1000);
  
  // In a real app, we would create the campaign in the database
  // For this mock, we'll just return a new campaign object
  
  const now = new Date().toISOString();
  const newId = `${mockCampaigns.length + 1}`;
  
  const newCampaign: Campaign = {
    id: newId,
    name: campaignData.name,
    status: campaignData.status,
    platform: campaignData.platform,
    budget: campaignData.budget,
    spent: 0,
    startDate: campaignData.startDate,
    endDate: campaignData.endDate,
    objective: campaignData.objective,
    targetAudience: campaignData.targetAudience,
    createdBy: userId,
    createdAt: now,
    updatedAt: now,
  };
  
  return newCampaign;
};

// Update an existing campaign
export const updateCampaign = async (id: string, campaignData: Partial<CampaignInput>): Promise<Campaign | null> => {
  // Simulate API delay
  await delay(800);
  
  // Find the campaign
  const campaign = findCampaignById(id);
  
  if (!campaign) {
    return null;
  }
  
  // In a real app, we would update the campaign in the database
  // For this mock, we'll just return an updated campaign object
  
  const updatedCampaign: Campaign = {
    ...campaign,
    ...campaignData,
    updatedAt: new Date().toISOString(),
  };
  
  return updatedCampaign;
};

// Delete a campaign
export const deleteCampaign = async (id: string): Promise<boolean> => {
  // Simulate API delay
  await delay(600);
  
  // Find the campaign
  const campaign = findCampaignById(id);
  
  if (!campaign) {
    return false;
  }
  
  // In a real app, we would delete the campaign from the database
  // For this mock, we'll just return success
  
  return true;
};

// Get campaign statistics
export const getCampaignStatistics = async (id: string): Promise<Campaign['metrics'] | null> => {
  // Simulate API delay
  await delay(700);
  
  // Find the campaign
  const campaign = findCampaignById(id);
  
  if (!campaign || !campaign.metrics) {
    return null;
  }
  
  return campaign.metrics;
};

// Get campaigns by status
export const getCampaignsByStatusService = async (status: Campaign['status']): Promise<Campaign[]> => {
  // Simulate API delay
  await delay(600);
  
  return getCampaignsByStatus(status);
};

// Get campaigns by platform
export const getCampaignsByPlatformService = async (platform: Campaign['platform']): Promise<Campaign[]> => {
  // Simulate API delay
  await delay(600);
  
  return getCampaignsByPlatform(platform);
};

// Get campaigns by creator
export const getCampaignsByCreatorService = async (creatorId: string): Promise<Campaign[]> => {
  // Simulate API delay
  await delay(600);
  
  return getCampaignsByCreator(creatorId);
};

// Update campaign status
export const updateCampaignStatus = async (id: string, status: Campaign['status']): Promise<Campaign | null> => {
  // Simulate API delay
  await delay(500);
  
  // Find the campaign
  const campaign = findCampaignById(id);
  
  if (!campaign) {
    return null;
  }
  
  // In a real app, we would update the campaign in the database
  // For this mock, we'll just return an updated campaign object
  
  const updatedCampaign: Campaign = {
    ...campaign,
    status,
    updatedAt: new Date().toISOString(),
  };
  
  return updatedCampaign;
};