import { useState } from 'react';
import { 
  Button, 
  Card, 
  Grid, 
  Group, 
  Image, 
  Paper, 
  Select, 
  Stack, 
  Tabs, 
  Text, 
  Textarea, 
  TextInput, 
  Title,
  Loader,
  SimpleGrid,
  Badge,
  Slider,
  SegmentedControl,
  Checkbox,
  ScrollArea
} from '@mantine/core';
import { 
  IconBrandOpenai, 
  IconBulb, 
  IconCamera, 
  IconHash, 
  IconMessageCircle, 
  IconPhoto, 
  IconRefresh, 
  IconRobot, 
  IconWand 
} from '@tabler/icons-react';
import { MainLayout } from '../layouts/MainLayout';

export function AITools() {
  const [activeTab, setActiveTab] = useState<string | null>('content');
  const [platform, setPlatform] = useState<string | null>('instagram');
  const [tone, setTone] = useState<string | null>('casual');
  const [contentLength, setContentLength] = useState<number>(50);
  const [topic, setTopic] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [imagePrompt, setImagePrompt] = useState('');
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [isGeneratingImages, setIsGeneratingImages] = useState(false);
  const [imageStyle, setImageStyle] = useState('realistic');
  const [imageRatio, setImageRatio] = useState('1:1');
  const [hashtagTopic, setHashtagTopic] = useState('');
  const [hashtagCount, setHashtagCount] = useState('10');
  const [generatedHashtags, setGeneratedHashtags] = useState<string[]>([]);
  const [isGeneratingHashtags, setIsGeneratingHashtags] = useState(false);
  const [contentToOptimize, setContentToOptimize] = useState('');
  const [optimizationPlatform, setOptimizationPlatform] = useState<string | null>('instagram');
  const [optimizationGoal, setOptimizationGoal] = useState<string | null>('engagement');
  const [optimizedContent, setOptimizedContent] = useState('');
  const [optimizationSuggestions, setOptimizationSuggestions] = useState<string[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [imageDescription, setImageDescription] = useState('');
  const [captionPlatform, setCaptionPlatform] = useState<string | null>('instagram');
  const [captionTone, setCaptionTone] = useState<string | null>('casual');
  const [generatedCaptions, setGeneratedCaptions] = useState<string[]>([]);
  const [isGeneratingCaptions, setIsGeneratingCaptions] = useState(false);

  // Mock function to generate content
  const generateContent = () => {
    if (!topic || !platform || !tone) return;
    
    setIsGenerating(true);
    setGeneratedContent('');
    
    // Simulate API call delay
    setTimeout(() => {
      let result = '';
      
      switch (platform) {
        case 'instagram':
          result = "✨ Elevate your experience with our latest innovation! Designed for those who demand excellence, our new collection combines style and functionality in perfect harmony. Swipe to see more and let us know your favorite in the comments! #Innovation #NewRelease #QualityCraftsmanship";
          break;
        case 'facebook':
          result = "Our new product line combines cutting-edge technology with sleek design, offering unparalleled performance for professionals and enthusiasts alike. Engineered with precision and built to last, each item in our collection represents our commitment to quality and innovation.\n\nDiscover how our solutions can transform your workflow and elevate your experience. With intuitive interfaces and powerful capabilities, you'll wonder how you ever managed without them.\n\nLearn more about our offerings and join the community of satisfied customers who have made the smart choice for their needs.";
          break;
        case 'twitter':
          result = "Introducing our game-changing new product line! 🚀 Designed for performance, built for reliability. Discover how it can transform your workflow today. Link in bio. #Innovation #ProductLaunch";
          break;
        case 'linkedin':
          result = "We're excited to announce the launch of our innovative new product line, designed to address the evolving needs of professionals in our industry. After months of research and development, our team has created a solution that combines cutting-edge technology with intuitive design, resulting in a product that not only meets but exceeds industry standards.\n\nKey features include:\n• Advanced performance metrics\n• Seamless integration with existing workflows\n• Customizable interface for personalized experiences\n• Enterprise-grade security protocols\n\nWe're looking forward to seeing how this innovation will help transform businesses and drive success for our partners.";
          break;
        default:
          result = "Our new product combines innovation with quality design. Discover how it can enhance your experience and improve your results. Learn more about our offerings and join our community of satisfied customers.";
      }
      
      // Adjust length based on contentLength
      if (contentLength < 50) {
        // Return first 1-2 sentences
        result = result.split('.').slice(0, 1).join('.') + '.';
      } else if (contentLength < 75) {
        // Return about half the content
        const sentences = result.split('.');
        result = sentences.slice(0, Math.ceil(sentences.length / 2)).join('.') + '.';
      }
      
      setGeneratedContent(result);
      setIsGenerating(false);
    }, 2000);
  };

  // Mock function to generate images
  const generateImages = () => {
    if (!imagePrompt) return;
    
    setIsGeneratingImages(true);
    setGeneratedImages([]);
    
    // Simulate API call delay
    setTimeout(() => {
      const mockImages = [
        'https://images.unsplash.com/photo-1560769629-975ec94e6a86',
        'https://images.unsplash.com/photo-1566438480900-0609be27a4be',
        'https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2',
        'https://images.unsplash.com/photo-1557804506-669a67965ba0',
      ];
      
      setGeneratedImages(mockImages);
      setIsGeneratingImages(false);
    }, 3000);
  };

  // Mock function to generate hashtags
  const generateHashtags = () => {
    if (!hashtagTopic) return;
    
    setIsGeneratingHashtags(true);
    setGeneratedHashtags([]);
    
    // Simulate API call delay
    setTimeout(() => {
      const mockHashtags = [
        '#Marketing', '#DigitalMarketing', '#SocialMedia', '#ContentCreation',
        '#BrandStrategy', '#MarketingTips', '#BusinessGrowth', '#SocialMediaMarketing',
        '#ContentStrategy', '#MarketingAgency', '#BrandAwareness', '#OnlineMarketing',
        '#MarketingDigital', '#DigitalStrategy', '#GrowthHacking', '#MarketingAdvice',
        '#SocialMediaStrategy', '#ContentMarketing', '#BrandIdentity', '#MarketingConsultant'
      ];
      
      // Return the requested number of hashtags
      setGeneratedHashtags(mockHashtags.slice(0, parseInt(hashtagCount)));
      setIsGeneratingHashtags(false);
    }, 1500);
  };

  // Mock function to optimize content
  const optimizeContent = () => {
    if (!contentToOptimize || !optimizationPlatform || !optimizationGoal) return;
    
    setIsOptimizing(true);
    setOptimizedContent('');
    setOptimizationSuggestions([]);
    
    // Simulate API call delay
    setTimeout(() => {
      // Simple optimization: replace some words
      const optimized = contentToOptimize
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
      
      setOptimizedContent(optimized);
      setOptimizationSuggestions(suggestions);
      setIsOptimizing(false);
    }, 2000);
  };

  // Mock function to generate captions
  const generateCaptions = () => {
    if (!imageDescription || !captionPlatform || !captionTone) return;
    
    setIsGeneratingCaptions(true);
    setGeneratedCaptions([]);
    
    // Simulate API call delay
    setTimeout(() => {
      const mockCaptions = [
        "Experience luxury like never before with our premium collection. #LuxuryLifestyle #PremiumQuality",
        "Elevate your everyday moments with our thoughtfully designed products. #ElevateYourLife #DesignMatters",
        "Innovation meets style in our latest release. Discover the difference today! #Innovation #NewRelease",
        "Crafted for those who appreciate the finer things in life. #Craftsmanship #Quality",
      ];
      
      setGeneratedCaptions(mockCaptions);
      setIsGeneratingCaptions(false);
    }, 1500);
  };

  return (
    <MainLayout>
      <Group position="apart" mb="md">
        <Title order={2}>AI Tools</Title>
        <Button variant="outline" leftSection={<IconRefresh size={16} />}>
          Reset
        </Button>
      </Group>

      <Tabs value={activeTab} onChange={setActiveTab} mb="md">
        <Tabs.List>
          <Tabs.Tab value="content" icon={<IconMessageCircle size={16} />}>
            Content Generation
          </Tabs.Tab>
          <Tabs.Tab value="images" icon={<IconPhoto size={16} />}>
            Image Generation
          </Tabs.Tab>
          <Tabs.Tab value="captions" icon={<IconCamera size={16} />}>
            Caption Generation
          </Tabs.Tab>
          <Tabs.Tab value="hashtags" icon={<IconHash size={16} />}>
            Hashtag Generator
          </Tabs.Tab>
          <Tabs.Tab value="optimization" icon={<IconWand size={16} />}>
            Content Optimization
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>

      {activeTab === 'content' && (
        <Grid>
          <Grid.Col span={6}>
            <Paper withBorder p="md">
              <Title order={3} mb="md">Generate Content</Title>
              <Stack spacing="md">
                <TextInput
                  label="Topic"
                  placeholder="Enter a topic or subject for your content"
                  value={topic}
                  onChange={(event) => setTopic(event.currentTarget.value)}
                  required
                />
                <Select
                  label="Platform"
                  placeholder="Select platform"
                  value={platform}
                  onChange={setPlatform}
                  data={[
                    { value: 'instagram', label: 'Instagram' },
                    { value: 'facebook', label: 'Facebook' },
                    { value: 'twitter', label: 'Twitter' },
                    { value: 'linkedin', label: 'LinkedIn' },
                    { value: 'blog', label: 'Blog' },
                    { value: 'email', label: 'Email' },
                  ]}
                  required
                />
                <Select
                  label="Tone"
                  placeholder="Select tone"
                  value={tone}
                  onChange={setTone}
                  data={[
                    { value: 'professional', label: 'Professional' },
                    { value: 'casual', label: 'Casual' },
                    { value: 'humorous', label: 'Humorous' },
                    { value: 'inspirational', label: 'Inspirational' },
                    { value: 'educational', label: 'Educational' },
                  ]}
                  required
                />
                <div>
                  <Text size="sm" weight={500} mb="xs">Content Length</Text>
                  <Slider
                    min={0}
                    max={100}
                    label={(value) => (value < 33 ? 'Short' : value < 66 ? 'Medium' : 'Long')}
                    value={contentLength}
                    onChange={setContentLength}
                    marks={[
                      { value: 0, label: 'Short' },
                      { value: 50, label: 'Medium' },
                      { value: 100, label: 'Long' },
                    ]}
                  />
                </div>
                <Button 
                  onClick={generateContent} 
                  loading={isGenerating}
                  leftSection={<IconBulb size={16} />}
                  disabled={!topic || !platform || !tone}
                >
                  Generate Content
                </Button>
              </Stack>
            </Paper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Paper withBorder p="md" style={{ height: '100%' }}>
              <Title order={3} mb="md">Generated Content</Title>
              {isGenerating ? (
                <Stack align="center" justify="center" style={{ height: '80%' }}>
                  <Loader size="lg" />
                  <Text>Generating content...</Text>
                </Stack>
              ) : generatedContent ? (
                <Stack spacing="md">
                  <ScrollArea h={300}>
                    <Text>{generatedContent}</Text>
                  </ScrollArea>
                  <Group position="apart">
                    <Button variant="outline">Edit</Button>
                    <Button>Copy to Clipboard</Button>
                  </Group>
                </Stack>
              ) : (
                <Stack align="center" justify="center" style={{ height: '80%' }}>
                  <IconRobot size={48} color="gray" />
                  <Text color="dimmed" align="center">
                    Fill in the form and click "Generate Content" to create AI-powered content for your social media posts.
                  </Text>
                </Stack>
              )}
            </Paper>
          </Grid.Col>
        </Grid>
      )}

      {activeTab === 'images' && (
        <Grid>
          <Grid.Col span={6}>
            <Paper withBorder p="md">
              <Title order={3} mb="md">Generate Images</Title>
              <Stack spacing="md">
                <Textarea
                  label="Image Prompt"
                  placeholder="Describe the image you want to generate in detail"
                  minRows={4}
                  value={imagePrompt}
                  onChange={(event) => setImagePrompt(event.currentTarget.value)}
                  required
                />
                <Select
                  label="Style"
                  placeholder="Select style"
                  value={imageStyle}
                  onChange={(value) => setImageStyle(value || 'realistic')}
                  data={[
                    { value: 'realistic', label: 'Realistic' },
                    { value: 'cartoon', label: 'Cartoon' },
                    { value: 'abstract', label: 'Abstract' },
                    { value: 'watercolor', label: 'Watercolor' },
                    { value: 'sketch', label: 'Sketch' },
                  ]}
                />
                <SegmentedControl
                  value={imageRatio}
                  onChange={setImageRatio}
                  data={[
                    { label: '1:1', value: '1:1' },
                    { label: '4:5', value: '4:5' },
                    { label: '16:9', value: '16:9' },
                    { label: '9:16', value: '9:16' },
                  ]}
                  fullWidth
                />
                <Button 
                  onClick={generateImages} 
                  loading={isGeneratingImages}
                  leftSection={<IconPhoto size={16} />}
                  disabled={!imagePrompt}
                >
                  Generate Images
                </Button>
              </Stack>
            </Paper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Paper withBorder p="md" style={{ height: '100%' }}>
              <Title order={3} mb="md">Generated Images</Title>
              {isGeneratingImages ? (
                <Stack align="center" justify="center" style={{ height: '80%' }}>
                  <Loader size="lg" />
                  <Text>Generating images...</Text>
                </Stack>
              ) : generatedImages.length > 0 ? (
                <Stack spacing="md">
                  <SimpleGrid cols={2} spacing="md">
                    {generatedImages.map((image, index) => (
                      <Card key={index} p="xs" withBorder>
                        <Card.Section>
                          <Image
                            src={image}
                            height={150}
                            alt={`Generated image ${index + 1}`}
                          />
                        </Card.Section>
                        <Group position="apart" mt="xs">
                          <Text size="xs">Image {index + 1}</Text>
                          <Button variant="subtle" compact>Download</Button>
                        </Group>
                      </Card>
                    ))}
                  </SimpleGrid>
                  <Button>Use in Content</Button>
                </Stack>
              ) : (
                <Stack align="center" justify="center" style={{ height: '80%' }}>
                  <IconPhoto size={48} color="gray" />
                  <Text color="dimmed" align="center">
                    Enter a detailed prompt and click "Generate Images" to create AI-powered visuals for your content.
                  </Text>
                </Stack>
              )}
            </Paper>
          </Grid.Col>
        </Grid>
      )}

      {activeTab === 'captions' && (
        <Grid>
          <Grid.Col span={6}>
            <Paper withBorder p="md">
              <Title order={3} mb="md">Generate Captions</Title>
              <Stack spacing="md">
                <Textarea
                  label="Image Description"
                  placeholder="Describe the image you want captions for"
                  minRows={4}
                  value={imageDescription}
                  onChange={(event) => setImageDescription(event.currentTarget.value)}
                  required
                />
                <Select
                  label="Platform"
                  placeholder="Select platform"
                  value={captionPlatform}
                  onChange={setCaptionPlatform}
                  data={[
                    { value: 'instagram', label: 'Instagram' },
                    { value: 'facebook', label: 'Facebook' },
                    { value: 'twitter', label: 'Twitter' },
                    { value: 'linkedin', label: 'LinkedIn' },
                  ]}
                  required
                />
                <Select
                  label="Tone"
                  placeholder="Select tone"
                  value={captionTone}
                  onChange={setCaptionTone}
                  data={[
                    { value: 'professional', label: 'Professional' },
                    { value: 'casual', label: 'Casual' },
                    { value: 'humorous', label: 'Humorous' },
                    { value: 'inspirational', label: 'Inspirational' },
                  ]}
                  required
                />
                <Button 
                  onClick={generateCaptions} 
                  loading={isGeneratingCaptions}
                  leftSection={<IconCamera size={16} />}
                  disabled={!imageDescription || !captionPlatform || !captionTone}
                >
                  Generate Captions
                </Button>
              </Stack>
            </Paper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Paper withBorder p="md" style={{ height: '100%' }}>
              <Title order={3} mb="md">Generated Captions</Title>
              {isGeneratingCaptions ? (
                <Stack align="center" justify="center" style={{ height: '80%' }}>
                  <Loader size="lg" />
                  <Text>Generating captions...</Text>
                </Stack>
              ) : generatedCaptions.length > 0 ? (
                <Stack spacing="md">
                  <ScrollArea h={300}>
                    {generatedCaptions.map((caption, index) => (
                      <Card key={index} withBorder mb="sm">
                        <Text>{caption}</Text>
                        <Group position="right" mt="xs">
                          <Button variant="subtle" compact>Use This</Button>
                        </Group>
                      </Card>
                    ))}
                  </ScrollArea>
                </Stack>
              ) : (
                <Stack align="center" justify="center" style={{ height: '80%' }}>
                  <IconCamera size={48} color="gray" />
                  <Text color="dimmed" align="center">
                    Describe your image and click "Generate Captions" to create engaging captions for your social media posts.
                  </Text>
                </Stack>
              )}
            </Paper>
          </Grid.Col>
        </Grid>
      )}

      {activeTab === 'hashtags' && (
        <Grid>
          <Grid.Col span={6}>
            <Paper withBorder p="md">
              <Title order={3} mb="md">Generate Hashtags</Title>
              <Stack spacing="md">
                <TextInput
                  label="Topic"
                  placeholder="Enter a topic for hashtag generation"
                  value={hashtagTopic}
                  onChange={(event) => setHashtagTopic(event.currentTarget.value)}
                  required
                />
                <Select
                  label="Platform"
                  placeholder="Select platform"
                  defaultValue="instagram"
                  data={[
                    { value: 'instagram', label: 'Instagram' },
                    { value: 'twitter', label: 'Twitter' },
                    { value: 'tiktok', label: 'TikTok' },
                    { value: 'facebook', label: 'Facebook' },
                  ]}
                />
                <Select
                  label="Number of Hashtags"
                  placeholder="Select number"
                  value={hashtagCount}
                  onChange={setHashtagCount}
                  data={[
                    { value: '5', label: '5 hashtags' },
                    { value: '10', label: '10 hashtags' },
                    { value: '15', label: '15 hashtags' },
                    { value: '20', label: '20 hashtags' },
                  ]}
                />
                <Button 
                  onClick={generateHashtags} 
                  loading={isGeneratingHashtags}
                  leftSection={<IconHash size={16} />}
                  disabled={!hashtagTopic}
                >
                  Generate Hashtags
                </Button>
              </Stack>
            </Paper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Paper withBorder p="md" style={{ height: '100%' }}>
              <Title order={3} mb="md">Generated Hashtags</Title>
              {isGeneratingHashtags ? (
                <Stack align="center" justify="center" style={{ height: '80%' }}>
                  <Loader size="lg" />
                  <Text>Generating hashtags...</Text>
                </Stack>
              ) : generatedHashtags.length > 0 ? (
                <Stack spacing="md">
                  <Group spacing="xs">
                    {generatedHashtags.map((hashtag, index) => (
                      <Badge key={index} size="lg">
                        {hashtag}
                      </Badge>
                    ))}
                  </Group>
                  <Textarea
                    value={generatedHashtags.join(' ')}
                    readOnly
                    minRows={3}
                  />
                  <Group position="right">
                    <Button>Copy to Clipboard</Button>
                  </Group>
                </Stack>
              ) : (
                <Stack align="center" justify="center" style={{ height: '80%' }}>
                  <IconHash size={48} color="gray" />
                  <Text color="dimmed" align="center">
                    Enter a topic and click "Generate Hashtags" to create relevant hashtags for your social media posts.
                  </Text>
                </Stack>
              )}
            </Paper>
          </Grid.Col>
        </Grid>
      )}

      {activeTab === 'optimization' && (
        <Grid>
          <Grid.Col span={6}>
            <Paper withBorder p="md">
              <Title order={3} mb="md">Optimize Content</Title>
              <Stack spacing="md">
                <Textarea
                  label="Content to Optimize"
                  placeholder="Enter your content to optimize"
                  minRows={6}
                  value={contentToOptimize}
                  onChange={(event) => setContentToOptimize(event.currentTarget.value)}
                  required
                />
                <Select
                  label="Platform"
                  placeholder="Select platform"
                  value={optimizationPlatform}
                  onChange={setOptimizationPlatform}
                  data={[
                    { value: 'instagram', label: 'Instagram' },
                    { value: 'facebook', label: 'Facebook' },
                    { value: 'twitter', label: 'Twitter' },
                    { value: 'linkedin', label: 'LinkedIn' },
                    { value: 'blog', label: 'Blog' },
                    { value: 'email', label: 'Email' },
                  ]}
                  required
                />
                <Select
                  label="Optimization Goal"
                  placeholder="Select goal"
                  value={optimizationGoal}
                  onChange={setOptimizationGoal}
                  data={[
                    { value: 'engagement', label: 'Maximize Engagement' },
                    { value: 'clicks', label: 'Increase Clicks' },
                    { value: 'conversions', label: 'Drive Conversions' },
                    { value: 'awareness', label: 'Brand Awareness' },
                  ]}
                  required
                />
                <Button 
                  onClick={optimizeContent} 
                  loading={isOptimizing}
                  leftSection={<IconWand size={16} />}
                  disabled={!contentToOptimize || !optimizationPlatform || !optimizationGoal}
                >
                  Optimize Content
                </Button>
              </Stack>
            </Paper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Paper withBorder p="md" style={{ height: '100%' }}>
              <Title order={3} mb="md">Optimized Content</Title>
              {isOptimizing ? (
                <Stack align="center" justify="center" style={{ height: '80%' }}>
                  <Loader size="lg" />
                  <Text>Optimizing content...</Text>
                </Stack>
              ) : optimizedContent ? (
                <Stack spacing="md">
                  <ScrollArea h={200}>
                    <Text>{optimizedContent}</Text>
                  </ScrollArea>
                  <Divider label="Optimization Suggestions" labelPosition="center" />
                  <ScrollArea h={150}>
                    <Stack spacing="xs">
                      {optimizationSuggestions.map((suggestion, index) => (
                        <Group key={index} spacing="xs">
                          <Text size="sm">•</Text>
                          <Text size="sm">{suggestion}</Text>
                        </Group>
                      ))}
                    </Stack>
                  </ScrollArea>
                  <Group position="right">
                    <Button>Use Optimized Content</Button>
                  </Group>
                </Stack>
              ) : (
                <Stack align="center" justify="center" style={{ height: '80%' }}>
                  <IconWand size={48} color="gray" />
                  <Text color="dimmed" align="center">
                    Enter your content and click "Optimize Content" to improve it for better performance on your selected platform.
                  </Text>
                </Stack>
              )}
            </Paper>
          </Grid.Col>
        </Grid>
      )}
    </MainLayout>
  );
}