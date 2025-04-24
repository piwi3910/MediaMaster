import { 
  ContentItem, 
  findContentById, 
  getContentByAuthor, 
  getContentByCampaign, 
  getContentByPlatform, 
  getContentByStatus, 
  mockContent 
} from '../mockData/content';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Interface for content filters
export interface ContentFilters {
  status?: ContentItem['status'];
  platform?: ContentItem['platform'];
  type?: ContentItem['type'];
  campaignId?: string;
  author?: string;
  approvalStatus?: ContentItem['approvalStatus'];
  search?: string;
  dateFrom?: string;
  dateTo?: string;
}

// Interface for content creation/update
export interface ContentInput {
  title: string;
  type: ContentItem['type'];
  platform: ContentItem['platform'];
  content: string;
  media?: string[];
  hashtags?: string[];
  campaignId?: string;
  scheduledDate?: string;
}

// Get all content items with optional filters
export const getContentItems = async (filters?: ContentFilters): Promise<ContentItem[]> => {
  // Simulate API delay
  await delay(800);
  
  let filteredContent = [...mockContent];
  
  // Apply filters if provided
  if (filters) {
    if (filters.status) {
      filteredContent = filteredContent.filter(item => item.status === filters.status);
    }
    
    if (filters.platform) {
      filteredContent = filteredContent.filter(item => item.platform === filters.platform);
    }
    
    if (filters.type) {
      filteredContent = filteredContent.filter(item => item.type === filters.type);
    }
    
    if (filters.campaignId) {
      filteredContent = filteredContent.filter(item => item.campaignId === filters.campaignId);
    }
    
    if (filters.author) {
      filteredContent = filteredContent.filter(item => item.author === filters.author);
    }
    
    if (filters.approvalStatus) {
      filteredContent = filteredContent.filter(item => item.approvalStatus === filters.approvalStatus);
    }
    
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filteredContent = filteredContent.filter(item => 
        item.title.toLowerCase().includes(searchLower) || 
        item.content.toLowerCase().includes(searchLower)
      );
    }
    
    if (filters.dateFrom) {
      filteredContent = filteredContent.filter(item => {
        const date = item.scheduledDate || item.publishedDate;
        return date ? date >= filters.dateFrom! : false;
      });
    }
    
    if (filters.dateTo) {
      filteredContent = filteredContent.filter(item => {
        const date = item.scheduledDate || item.publishedDate;
        return date ? date <= filters.dateTo! : false;
      });
    }
  }
  
  return filteredContent;
};

// Get a single content item by ID
export const getContentItem = async (id: string): Promise<ContentItem | null> => {
  // Simulate API delay
  await delay(500);
  
  const contentItem = findContentById(id);
  
  return contentItem || null;
};

// Create a new content item
export const createContentItem = async (contentData: ContentInput, userId: string): Promise<ContentItem> => {
  // Simulate API delay
  await delay(1000);
  
  // In a real app, we would create the content item in the database
  // For this mock, we'll just return a new content item object
  
  const now = new Date().toISOString();
  const newId = `${mockContent.length + 1}`;
  
  const newContentItem: ContentItem = {
    id: newId,
    title: contentData.title,
    type: contentData.type,
    platform: contentData.platform,
    status: 'draft',
    content: contentData.content,
    media: contentData.media,
    hashtags: contentData.hashtags,
    campaignId: contentData.campaignId,
    scheduledDate: contentData.scheduledDate,
    author: userId,
    createdAt: now,
    updatedAt: now,
    approvalStatus: 'pending',
  };
  
  return newContentItem;
};

// Update an existing content item
export const updateContentItem = async (id: string, contentData: Partial<ContentInput>): Promise<ContentItem | null> => {
  // Simulate API delay
  await delay(800);
  
  // Find the content item
  const contentItem = findContentById(id);
  
  if (!contentItem) {
    return null;
  }
  
  // In a real app, we would update the content item in the database
  // For this mock, we'll just return an updated content item object
  
  const updatedContentItem: ContentItem = {
    ...contentItem,
    ...contentData,
    updatedAt: new Date().toISOString(),
  };
  
  return updatedContentItem;
};

// Delete a content item
export const deleteContentItem = async (id: string): Promise<boolean> => {
  // Simulate API delay
  await delay(600);
  
  // Find the content item
  const contentItem = findContentById(id);
  
  if (!contentItem) {
    return false;
  }
  
  // In a real app, we would delete the content item from the database
  // For this mock, we'll just return success
  
  return true;
};

// Update content status
export const updateContentStatus = async (id: string, status: ContentItem['status']): Promise<ContentItem | null> => {
  // Simulate API delay
  await delay(500);
  
  // Find the content item
  const contentItem = findContentById(id);
  
  if (!contentItem) {
    return null;
  }
  
  // In a real app, we would update the content item in the database
  // For this mock, we'll just return an updated content item object
  
  const updatedContentItem: ContentItem = {
    ...contentItem,
    status,
    updatedAt: new Date().toISOString(),
    // If status is 'published', set publishedDate
    ...(status === 'published' && { publishedDate: new Date().toISOString() }),
  };
  
  return updatedContentItem;
};

// Update approval status
export const updateApprovalStatus = async (
  id: string, 
  approvalStatus: ContentItem['approvalStatus'],
  approverId: string
): Promise<ContentItem | null> => {
  // Simulate API delay
  await delay(500);
  
  // Find the content item
  const contentItem = findContentById(id);
  
  if (!contentItem) {
    return null;
  }
  
  // In a real app, we would update the content item in the database
  // For this mock, we'll just return an updated content item object
  
  const updatedContentItem: ContentItem = {
    ...contentItem,
    approvalStatus,
    updatedAt: new Date().toISOString(),
    ...(approvalStatus === 'approved' && { approvedBy: approverId }),
  };
  
  return updatedContentItem;
};

// Get content by status
export const getContentByStatusService = async (status: ContentItem['status']): Promise<ContentItem[]> => {
  // Simulate API delay
  await delay(600);
  
  return getContentByStatus(status);
};

// Get content by platform
export const getContentByPlatformService = async (platform: ContentItem['platform']): Promise<ContentItem[]> => {
  // Simulate API delay
  await delay(600);
  
  return getContentByPlatform(platform);
};

// Get content by campaign
export const getContentByCampaignService = async (campaignId: string): Promise<ContentItem[]> => {
  // Simulate API delay
  await delay(600);
  
  return getContentByCampaign(campaignId);
};

// Get content by author
export const getContentByAuthorService = async (authorId: string): Promise<ContentItem[]> => {
  // Simulate API delay
  await delay(600);
  
  return getContentByAuthor(authorId);
};

// Get content statistics
export const getContentStatistics = async (id: string): Promise<ContentItem['metrics'] | null> => {
  // Simulate API delay
  await delay(700);
  
  // Find the content item
  const contentItem = findContentById(id);
  
  if (!contentItem || !contentItem.metrics) {
    return null;
  }
  
  return contentItem.metrics;
};