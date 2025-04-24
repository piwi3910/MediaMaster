export interface ContentItem {
  id: string;
  title: string;
  type: 'post' | 'story' | 'reel' | 'video' | 'article' | 'email' | 'sms';
  platform: 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'tiktok' | 'email' | 'sms' | 'blog';
  status: 'draft' | 'scheduled' | 'published' | 'archived';
  content: string;
  media?: string[];
  hashtags?: string[];
  campaignId?: string;
  scheduledDate?: string;
  publishedDate?: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  approvalStatus?: 'pending' | 'approved' | 'rejected';
  approvedBy?: string;
  metrics?: {
    impressions?: number;
    reach?: number;
    engagement?: number;
    likes?: number;
    comments?: number;
    shares?: number;
    clicks?: number;
    conversions?: number;
  };
}

export const mockContent: ContentItem[] = [
  {
    id: '1',
    title: 'Summer Collection Launch',
    type: 'post',
    platform: 'instagram',
    status: 'published',
    content: 'Introducing our Summer Collection 2023! 🌞 Fresh styles for the season have arrived. Shop now and get 15% off your first purchase. #SummerFashion #NewCollection',
    media: ['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f'],
    hashtags: ['#SummerFashion', '#NewCollection', '#Fashion', '#SummerStyle', '#NewArrivals'],
    campaignId: '1',
    publishedDate: '2023-06-05T09:30:00Z',
    author: '4',
    createdAt: '2023-06-01T14:20:00Z',
    updatedAt: '2023-06-05T09:30:00Z',
    approvalStatus: 'approved',
    approvedBy: '2',
    metrics: {
      impressions: 12500,
      reach: 9800,
      engagement: 1450,
      likes: 1200,
      comments: 85,
      shares: 165,
      clicks: 320,
      conversions: 45,
    },
  },
  {
    id: '2',
    title: 'Product Feature: XYZ',
    type: 'video',
    platform: 'facebook',
    status: 'scheduled',
    content: 'Discover the amazing features of our new XYZ product! This revolutionary device will transform how you work. Watch the full demo and let us know what you think in the comments. #ProductLaunch #Innovation',
    media: ['https://example.com/videos/xyz-demo.mp4'],
    hashtags: ['#ProductLaunch', '#Innovation', '#TechNews', '#NewProduct'],
    campaignId: '2',
    scheduledDate: '2023-07-20T12:00:00Z',
    author: '3',
    createdAt: '2023-06-15T10:45:00Z',
    updatedAt: '2023-06-15T16:30:00Z',
    approvalStatus: 'approved',
    approvedBy: '1',
  },
  {
    id: '3',
    title: 'Brand Story',
    type: 'story',
    platform: 'instagram',
    status: 'published',
    content: 'Behind the scenes at our design studio. Swipe up to learn more about our creative process!',
    media: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
      'https://images.unsplash.com/photo-1497215842964-222b430dc094',
    ],
    campaignId: '3',
    publishedDate: '2023-06-10T15:00:00Z',
    author: '2',
    createdAt: '2023-06-09T13:20:00Z',
    updatedAt: '2023-06-10T15:00:00Z',
    approvalStatus: 'approved',
    approvedBy: '1',
    metrics: {
      impressions: 8500,
      reach: 7200,
      engagement: 950,
      clicks: 210,
    },
  },
  {
    id: '4',
    title: 'Holiday Gift Guide',
    type: 'post',
    platform: 'twitter',
    status: 'draft',
    content: 'Looking for the perfect gift? Check out our holiday gift guide with options for every budget! #HolidayShopping #GiftIdeas',
    hashtags: ['#HolidayShopping', '#GiftIdeas', '#HolidayGifts', '#GiftGuide'],
    campaignId: '4',
    author: '4',
    createdAt: '2023-06-25T14:10:00Z',
    updatedAt: '2023-06-25T14:10:00Z',
  },
  {
    id: '5',
    title: 'Webinar Invitation',
    type: 'post',
    platform: 'linkedin',
    status: 'published',
    content: 'Join our expert panel for an insightful discussion on industry trends and future predictions. Register now for our upcoming webinar on July 10th. Limited spots available! #IndustryInsights #Webinar',
    media: ['https://images.unsplash.com/photo-1591115765373-5207764f72e4'],
    hashtags: ['#IndustryInsights', '#Webinar', '#ProfessionalDevelopment', '#ExpertPanel'],
    campaignId: '5',
    publishedDate: '2023-06-20T11:00:00Z',
    author: '3',
    createdAt: '2023-06-15T09:30:00Z',
    updatedAt: '2023-06-20T11:00:00Z',
    approvalStatus: 'approved',
    approvedBy: '1',
    metrics: {
      impressions: 5200,
      reach: 4100,
      engagement: 620,
      likes: 180,
      comments: 45,
      shares: 95,
      clicks: 310,
      conversions: 85,
    },
  },
  {
    id: '6',
    title: 'Monthly Newsletter',
    type: 'email',
    platform: 'email',
    status: 'published',
    content: 'Hello {first_name}, Here are this month\'s highlights and exclusive offers just for you...',
    media: ['https://example.com/images/newsletter-header.jpg'],
    campaignId: '6',
    publishedDate: '2023-06-01T08:00:00Z',
    author: '4',
    createdAt: '2023-05-28T15:45:00Z',
    updatedAt: '2023-06-01T08:00:00Z',
    approvalStatus: 'approved',
    approvedBy: '1',
    metrics: {
      impressions: 12000,
      reach: 11500,
      engagement: 3200,
      clicks: 1800,
      conversions: 120,
    },
  },
  {
    id: '7',
    title: 'TikTok Challenge Announcement',
    type: 'video',
    platform: 'tiktok',
    status: 'published',
    content: 'Take part in our #SummerVibes challenge! Show us how you\'re enjoying summer with our products for a chance to win amazing prizes! #Contest #SummerFun',
    media: ['https://example.com/videos/tiktok-challenge.mp4'],
    hashtags: ['#SummerVibes', '#Contest', '#SummerFun', '#Challenge', '#WinPrizes'],
    campaignId: '7',
    publishedDate: '2023-06-18T16:30:00Z',
    author: '2',
    createdAt: '2023-06-15T11:20:00Z',
    updatedAt: '2023-06-18T16:30:00Z',
    approvalStatus: 'approved',
    approvedBy: '1',
    metrics: {
      impressions: 45000,
      reach: 38000,
      engagement: 12500,
      likes: 9800,
      comments: 1200,
      shares: 1500,
      clicks: 850,
    },
  },
  {
    id: '8',
    title: 'Flash Sale Alert',
    type: 'sms',
    platform: 'sms',
    status: 'published',
    content: '48-HOUR FLASH SALE! Get 30% off everything. Use code: FLASH30. Shop now: https://example.com/sale',
    campaignId: '8',
    publishedDate: '2023-06-10T10:00:00Z',
    author: '3',
    createdAt: '2023-06-08T14:30:00Z',
    updatedAt: '2023-06-10T10:00:00Z',
    approvalStatus: 'approved',
    approvedBy: '1',
    metrics: {
      impressions: 8500,
      reach: 8500,
      engagement: 1200,
      clicks: 950,
      conversions: 180,
    },
  },
  {
    id: '9',
    title: 'Customer Success Story',
    type: 'article',
    platform: 'blog',
    status: 'scheduled',
    content: 'Learn how Company XYZ increased their productivity by 200% using our solutions...',
    media: ['https://images.unsplash.com/photo-1551836022-d5d88e9218df'],
    hashtags: ['#CustomerSuccess', '#CaseStudy', '#BusinessGrowth'],
    scheduledDate: '2023-07-05T09:00:00Z',
    author: '4',
    createdAt: '2023-06-20T13:15:00Z',
    updatedAt: '2023-06-22T10:30:00Z',
    approvalStatus: 'pending',
  },
  {
    id: '10',
    title: 'Product Tutorial',
    type: 'reel',
    platform: 'instagram',
    status: 'draft',
    content: 'Quick tutorial on how to get the most out of our bestselling product. #HowTo #Tutorial',
    hashtags: ['#HowTo', '#Tutorial', '#ProductTips', '#QuickTips'],
    author: '2',
    createdAt: '2023-06-28T11:45:00Z',
    updatedAt: '2023-06-28T11:45:00Z',
  },
];

// Helper function to find content by ID
export const findContentById = (id: string): ContentItem | undefined => {
  return mockContent.find(item => item.id === id);
};

// Helper function to get content by status
export const getContentByStatus = (status: ContentItem['status']): ContentItem[] => {
  return mockContent.filter(item => item.status === status);
};

// Helper function to get content by platform
export const getContentByPlatform = (platform: ContentItem['platform']): ContentItem[] => {
  return mockContent.filter(item => item.platform === platform);
};

// Helper function to get content by campaign
export const getContentByCampaign = (campaignId: string): ContentItem[] => {
  return mockContent.filter(item => item.campaignId === campaignId);
};

// Helper function to get content by author
export const getContentByAuthor = (authorId: string): ContentItem[] => {
  return mockContent.filter(item => item.author === authorId);
};

// Helper function to get content by approval status
export const getContentByApprovalStatus = (status: ContentItem['approvalStatus']): ContentItem[] => {
  return mockContent.filter(item => item.approvalStatus === status);
};