// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Text generation interfaces
export interface TextGenerationParams {
  platform: 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'blog' | 'email' | 'sms';
  topic: string;
  tone: 'professional' | 'casual' | 'humorous' | 'inspirational' | 'educational';
  length: 'short' | 'medium' | 'long';
}

// Image generation interfaces
export interface ImageGenerationParams {
  prompt: string;
  style: 'realistic' | 'cartoon' | 'abstract' | 'watercolor' | 'sketch';
  ratio: '1:1' | '4:5' | '16:9' | '9:16';
  count?: number;
}

// Caption generation interfaces
export interface CaptionGenerationParams {
  imageDescription: string;
  platform: 'instagram' | 'facebook' | 'twitter' | 'linkedin';
  tone: 'casual' | 'professional' | 'humorous' | 'inspirational';
}

// Hashtag generation interfaces
export interface HashtagGenerationParams {
  topic: string;
  platform: 'instagram' | 'twitter' | 'tiktok' | 'facebook';
  count: string;
}

// Content optimization interfaces
export interface ContentOptimizationParams {
  content: string;
  platform: 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'blog' | 'email';
  goal: 'engagement' | 'clicks' | 'conversions' | 'awareness';
}

// A/B testing interfaces
export interface ABTestingParams {
  originalContent: string;
  platform: 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'email';
  goal: 'engagement' | 'clicks' | 'conversions';
  variations: number;
}

// Mock text generation
export const generateText = async (params: TextGenerationParams): Promise<string> => {
  // Simulate API delay
  await delay(2000);
  
  // In a real app, this would call an AI API to generate text
  // For this mock, we'll return predefined text based on the parameters
  
  let result = '';
  
  // Generate different text based on platform
  switch (params.platform) {
    case 'facebook':
      result = "Our new product line combines cutting-edge technology with sleek design, offering unparalleled performance for professionals and enthusiasts alike. Engineered with precision and built to last, each item in our collection represents our commitment to quality and innovation.\n\nDiscover how our solutions can transform your workflow and elevate your experience. With intuitive interfaces and powerful capabilities, you'll wonder how you ever managed without them.\n\nLearn more about our offerings and join the community of satisfied customers who have made the smart choice for their needs.";
      break;
    case 'instagram':
      result = "✨ Elevate your experience with our latest innovation! Designed for those who demand excellence, our new collection combines style and functionality in perfect harmony. Swipe to see more and let us know your favorite in the comments! #Innovation #NewRelease #QualityCraftsmanship";
      break;
    case 'twitter':
      result = "Introducing our game-changing new product line! 🚀 Designed for performance, built for reliability. Discover how it can transform your workflow today. Link in bio. #Innovation #ProductLaunch";
      break;
    case 'linkedin':
      result = "We're excited to announce the launch of our innovative new product line, designed to address the evolving needs of professionals in our industry. After months of research and development, our team has created a solution that combines cutting-edge technology with intuitive design, resulting in a product that not only meets but exceeds industry standards.\n\nKey features include:\n• Advanced performance metrics\n• Seamless integration with existing workflows\n• Customizable interface for personalized experiences\n• Enterprise-grade security protocols\n\nWe're looking forward to seeing how this innovation will help transform businesses and drive success for our partners.";
      break;
    case 'blog':
      result = "# Introducing Our Revolutionary New Product Line\n\nIn today's fast-paced world, professionals need tools that can keep up with their demanding workflows while delivering exceptional results. That's why we're thrilled to announce the launch of our latest product line, designed specifically to address these challenges and elevate your experience to new heights.\n\n## The Evolution of Excellence\n\nOur journey began with a simple question: How can we improve upon what's already available in the market? After extensive research, countless prototypes, and rigorous testing, we've developed a solution that we believe represents the future of our industry.\n\n## Key Features That Set Us Apart\n\n### Unparalleled Performance\nEngineered with the latest technology, our products deliver speed and efficiency that outperforms competitors by up to 35%.\n\n### Intuitive Design\nWe've reimagined the user interface to create a seamless experience that feels natural and requires minimal learning curve.\n\n### Sustainable Manufacturing\nProduced using eco-friendly materials and processes, our products reflect our commitment to environmental responsibility.\n\n## Real-World Applications\n\nCustomers across various industries have already begun implementing our solutions into their workflows with remarkable results:\n\n> \"This product has transformed how our team collaborates and delivers projects. We've seen a 40% increase in productivity since implementation.\" - Sarah J., Creative Director\n\n## Looking Ahead\n\nThis launch represents just the beginning of our vision for the future. We're already working on expansions and enhancements that will continue to push boundaries and create new possibilities.\n\nWe invite you to experience the difference for yourself. Visit our product page to learn more and join the revolution.";
      break;
    case 'email':
      result = "Subject: Introducing Our Game-Changing New Product Line\n\nDear [First Name],\n\nWe're thrilled to share some exciting news with you today. After months of development and refinement, we're proud to introduce our revolutionary new product line designed specifically with professionals like you in mind.\n\nWhat Makes This Launch Special:\n\n• Cutting-edge technology that delivers 35% better performance\n• Intuitive design that seamlessly integrates with your existing workflow\n• Sustainable manufacturing practices that reduce environmental impact\n• Comprehensive support to ensure you get the most from your investment\n\nAs a valued customer, we'd like to offer you exclusive early access with a special 15% discount using code EARLYACCESS at checkout.\n\nClick below to explore the full collection and see how our new products can transform your experience:\n\n[EXPLORE THE COLLECTION]\n\nWe can't wait to hear what you think!\n\nWarm regards,\n\n[Your Name]\n[Your Position]\n[Company Name]";
      break;
    case 'sms':
      result = "NEW RELEASE: Our innovative product line is now available! Get 15% off with code LAUNCH15. Shop now: https://example.com/new";
      break;
    default:
      result = "Our new product combines innovation with quality design. Discover how it can enhance your experience and improve your results. Learn more about our offerings and join our community of satisfied customers.";
  }
  
  // Adjust length
  if (params.length === 'short') {
    // Return first 1-2 sentences
    result = result.split('.').slice(0, 2).join('.') + '.';
  } else if (params.length === 'medium') {
    // Return about half the content
    const sentences = result.split('.');
    result = sentences.slice(0, Math.ceil(sentences.length / 2)).join('.') + '.';
  }
  
  return result;
};

// Mock image generation
export const generateImages = async (params: ImageGenerationParams): Promise<string[]> => {
  // Simulate API delay
  await delay(3000);
  
  // In a real app, this would call an AI API to generate images
  // For this mock, we'll return predefined image URLs
  
  const mockImages = [
    'https://images.unsplash.com/photo-1560769629-975ec94e6a86',
    'https://images.unsplash.com/photo-1566438480900-0609be27a4be',
    'https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2',
    'https://images.unsplash.com/photo-1557804506-669a67965ba0',
  ];
  
  // Return the requested number of images or default to 4
  const count = params.count || 4;
  return mockImages.slice(0, count);
};

// Mock caption generation
export const generateCaptions = async (params: CaptionGenerationParams): Promise<string[]> => {
  // Simulate API delay
  await delay(1500);
  
  // In a real app, this would call an AI API to generate captions
  // For this mock, we'll return predefined captions
  
  const mockCaptions = [
    "Experience luxury like never before with our premium collection. #LuxuryLifestyle #PremiumQuality",
    "Elevate your everyday moments with our thoughtfully designed products. #ElevateYourLife #DesignMatters",
    "Innovation meets style in our latest release. Discover the difference today! #Innovation #NewRelease",
    "Crafted for those who appreciate the finer things in life. #Craftsmanship #Quality",
  ];
  
  return mockCaptions;
};

// Mock hashtag generation
export const generateHashtags = async (params: HashtagGenerationParams): Promise<string[]> => {
  // Simulate API delay
  await delay(1000);
  
  // In a real app, this would call an AI API to generate hashtags
  // For this mock, we'll return predefined hashtags
  
  const mockHashtags = [
    "#LuxuryLifestyle #PremiumQuality #ExclusiveDesign #ElegantLiving",
    "#Innovation #TechTrends #FutureTech #SmartLiving #DigitalTransformation",
    "#SustainableLiving #EcoFriendly #GreenLiving #EarthConscious",
    "#WellnessJourney #SelfCare #HealthyLiving #MindBodyBalance",
  ];
  
  return mockHashtags;
};

// Mock content optimization
export const optimizeContent = async (params: ContentOptimizationParams): Promise<{
  optimizedContent: string;
  suggestions: string[];
}> => {
  // Simulate API delay
  await delay(2000);
  
  // In a real app, this would call an AI API to optimize content
  // For this mock, we'll return a slightly modified version of the input content
  
  const optimizedContent = params.content
    .replace(/product/g, 'solution')
    .replace(/good/g, 'exceptional')
    .replace(/improve/g, 'transform')
    .replace(/new/g, 'innovative');
  
  const suggestions = [
    "Add a clear call-to-action at the end of your post",
    "Include more emotional language to connect with your audience",
    "Consider adding relevant statistics to support your claims",
    "Shorten sentences for better readability on mobile devices",
    "Add platform-specific formatting to improve engagement",
  ];
  
  return {
    optimizedContent,
    suggestions,
  };
};

// Mock A/B testing variations
export const generateABTestingVariations = async (params: ABTestingParams): Promise<{
  variations: string[];
  recommendations: string;
}> => {
  // Simulate API delay
  await delay(2500);
  
  // In a real app, this would call an AI API to generate A/B testing variations
  // For this mock, we'll return variations of the input content
  
  const variations = [];
  
  // Generate the requested number of variations
  for (let i = 0; i < params.variations; i++) {
    // Create variations by making different modifications to the original
    let variation = params.originalContent;
    
    switch (i) {
      case 0:
        // Variation 1: More direct and action-oriented
        variation = variation
          .replace(/we are/g, "we're")
          .replace(/you will/g, "you'll")
          .replace(/\./g, "!")
          .concat("\nTake action now!");
        break;
      case 1:
        // Variation 2: More question-based engagement
        variation = "Have you been looking for a better solution?\n\n"
          .concat(variation)
          .replace(/\./g, "?");
        break;
      case 2:
        // Variation 3: More data-driven
        variation = variation
          .replace(/good/g, "95% effective")
          .replace(/better/g, "37% more efficient")
          .concat("\nBacked by data and research.");
        break;
      default:
        // Other variations: Add emojis and make it more casual
        variation = variation
          .replace(/\./g, ". 👍")
          .replace(/!/g, "! 🚀")
          .replace(/product/g, "amazing product");
    }
    
    variations.push(variation);
  }
  
  const recommendations = "Based on similar content performance, Variation 1 is likely to perform best for your goal of " + params.goal + " on " + params.platform + ". Consider testing this variation first, followed by Variation 3.";
  
  return {
    variations,
    recommendations,
  };
};