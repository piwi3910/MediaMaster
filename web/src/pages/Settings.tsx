import { useState } from 'react';
import { 
  Button, 
  Card, 
  Checkbox, 
  Divider, 
  Group, 
  Paper, 
  PasswordInput, 
  Select, 
  Stack, 
  Switch, 
  Tabs, 
  Text, 
  TextInput, 
  Title, 
  ColorInput,
  FileInput
} from '@mantine/core';
import { 
  IconBrandFacebook, 
  IconBrandInstagram, 
  IconBrandLinkedin, 
  IconBrandTwitter, 
  IconBrandTiktok,
  IconBell, 
  IconBrush, 
  IconKey, 
  IconLock, 
  IconMail, 
  IconSettings, 
  IconUser, 
  IconUpload
} from '@tabler/icons-react';
import { MainLayout } from '../layouts/MainLayout';

export function Settings() {
  const [activeTab, setActiveTab] = useState<string | null>('profile');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [compactMode, setCompactMode] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [sessionTimeout, setSessionTimeout] = useState<string | null>('30');
  const [primaryColor, setPrimaryColor] = useState('#1c7ed6');
  const [accentColor, setAccentColor] = useState('#fd7e14');

  return (
    <MainLayout>
      <Group position="apart" mb="md">
        <Title order={2}>Settings</Title>
      </Group>

      <Tabs value={activeTab} onChange={setActiveTab} mb="md">
        <Tabs.List>
          <Tabs.Tab value="profile" icon={<IconUser size={16} />}>
            Profile
          </Tabs.Tab>
          <Tabs.Tab value="account" icon={<IconSettings size={16} />}>
            Account
          </Tabs.Tab>
          <Tabs.Tab value="security" icon={<IconLock size={16} />}>
            Security
          </Tabs.Tab>
          <Tabs.Tab value="notifications" icon={<IconBell size={16} />}>
            Notifications
          </Tabs.Tab>
          <Tabs.Tab value="appearance" icon={<IconBrush size={16} />}>
            Appearance
          </Tabs.Tab>
          <Tabs.Tab value="integrations" icon={<IconBrandFacebook size={16} />}>
            Integrations
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>

      {activeTab === 'profile' && (
        <Paper withBorder p="md" mb="md">
          <Title order={3} mb="md">Profile Information</Title>
          <Stack spacing="md">
            <Group grow>
              <TextInput
                label="First Name"
                placeholder="Your first name"
                defaultValue="John"
                required
              />
              <TextInput
                label="Last Name"
                placeholder="Your last name"
                defaultValue="Doe"
                required
              />
            </Group>
            <TextInput
              label="Email"
              placeholder="Your email"
              defaultValue="john.doe@mediamaster.com"
              required
            />
            <TextInput
              label="Position"
              placeholder="Your job title"
              defaultValue="CEO"
            />
            <TextInput
              label="Department"
              placeholder="Your department"
              defaultValue="Management"
            />
            <TextInput
              label="Phone Number"
              placeholder="Your phone number"
              defaultValue="+1 (555) 123-4567"
            />
            <FileInput
              label="Profile Picture"
              placeholder="Upload a profile picture"
              accept="image/png,image/jpeg"
              icon={<IconUpload size={16} />}
            />
            <Divider />
            <Group position="right">
              <Button variant="default">Cancel</Button>
              <Button>Save Changes</Button>
            </Group>
          </Stack>
        </Paper>
      )}

      {activeTab === 'account' && (
        <Paper withBorder p="md" mb="md">
          <Title order={3} mb="md">Account Settings</Title>
          <Stack spacing="md">
            <Select
              label="Language"
              placeholder="Select your preferred language"
              defaultValue="en"
              data={[
                { value: 'en', label: 'English' },
                { value: 'es', label: 'Spanish' },
                { value: 'fr', label: 'French' },
                { value: 'de', label: 'German' },
                { value: 'zh', label: 'Chinese' },
              ]}
            />
            <Select
              label="Time Zone"
              placeholder="Select your time zone"
              defaultValue="utc-5"
              data={[
                { value: 'utc-8', label: 'Pacific Time (UTC-8)' },
                { value: 'utc-7', label: 'Mountain Time (UTC-7)' },
                { value: 'utc-6', label: 'Central Time (UTC-6)' },
                { value: 'utc-5', label: 'Eastern Time (UTC-5)' },
                { value: 'utc', label: 'UTC' },
                { value: 'utc+1', label: 'Central European Time (UTC+1)' },
              ]}
            />
            <Select
              label="Date Format"
              placeholder="Select your preferred date format"
              defaultValue="mdy"
              data={[
                { value: 'mdy', label: 'MM/DD/YYYY' },
                { value: 'dmy', label: 'DD/MM/YYYY' },
                { value: 'ymd', label: 'YYYY/MM/DD' },
              ]}
            />
            <Divider label="Danger Zone" labelPosition="center" />
            <Card withBorder p="md" radius="md">
              <Group position="apart">
                <div>
                  <Text weight={500}>Deactivate Account</Text>
                  <Text size="sm" color="dimmed">
                    Temporarily disable your account. You can reactivate it later.
                  </Text>
                </div>
                <Button variant="outline" color="yellow">
                  Deactivate
                </Button>
              </Group>
            </Card>
            <Card withBorder p="md" radius="md">
              <Group position="apart">
                <div>
                  <Text weight={500}>Delete Account</Text>
                  <Text size="sm" color="dimmed">
                    Permanently delete your account and all associated data. This action cannot be undone.
                  </Text>
                </div>
                <Button variant="outline" color="red">
                  Delete
                </Button>
              </Group>
            </Card>
            <Divider />
            <Group position="right">
              <Button variant="default">Cancel</Button>
              <Button>Save Changes</Button>
            </Group>
          </Stack>
        </Paper>
      )}

      {activeTab === 'security' && (
        <Paper withBorder p="md" mb="md">
          <Title order={3} mb="md">Security Settings</Title>
          <Stack spacing="md">
            <Title order={4}>Change Password</Title>
            <PasswordInput
              label="Current Password"
              placeholder="Enter your current password"
              required
            />
            <PasswordInput
              label="New Password"
              placeholder="Enter your new password"
              required
            />
            <PasswordInput
              label="Confirm New Password"
              placeholder="Confirm your new password"
              required
            />
            <Button>Update Password</Button>
            <Divider />
            <Title order={4}>Two-Factor Authentication</Title>
            <Switch
              label="Enable Two-Factor Authentication"
              checked={twoFactorAuth}
              onChange={(event) => setTwoFactorAuth(event.currentTarget.checked)}
            />
            {twoFactorAuth && (
              <Card withBorder p="md" radius="md">
                <Text size="sm">
                  Two-factor authentication adds an extra layer of security to your account.
                  In addition to your password, you'll need to enter a code from your phone.
                </Text>
                <Button mt="md" leftSection={<IconKey size={16} />}>
                  Set Up Two-Factor Authentication
                </Button>
              </Card>
            )}
            <Divider />
            <Title order={4}>Session Settings</Title>
            <Select
              label="Session Timeout"
              placeholder="Select session timeout"
              value={sessionTimeout}
              onChange={setSessionTimeout}
              data={[
                { value: '15', label: '15 minutes' },
                { value: '30', label: '30 minutes' },
                { value: '60', label: '1 hour' },
                { value: '120', label: '2 hours' },
                { value: '240', label: '4 hours' },
                { value: '480', label: '8 hours' },
              ]}
            />
            <Button>Log Out All Other Sessions</Button>
            <Divider />
            <Group position="right">
              <Button variant="default">Cancel</Button>
              <Button>Save Changes</Button>
            </Group>
          </Stack>
        </Paper>
      )}

      {activeTab === 'notifications' && (
        <Paper withBorder p="md" mb="md">
          <Title order={3} mb="md">Notification Settings</Title>
          <Stack spacing="md">
            <Title order={4}>Email Notifications</Title>
            <Switch
              label="Enable Email Notifications"
              checked={emailNotifications}
              onChange={(event) => setEmailNotifications(event.currentTarget.checked)}
            />
            {emailNotifications && (
              <Stack spacing="xs">
                <Checkbox label="Campaign updates" defaultChecked />
                <Checkbox label="Content approvals" defaultChecked />
                <Checkbox label="Team mentions" defaultChecked />
                <Checkbox label="Analytics reports" defaultChecked />
                <Checkbox label="System announcements" defaultChecked />
              </Stack>
            )}
            <Divider />
            <Title order={4}>Push Notifications</Title>
            <Switch
              label="Enable Push Notifications"
              checked={pushNotifications}
              onChange={(event) => setPushNotifications(event.currentTarget.checked)}
            />
            {pushNotifications && (
              <Stack spacing="xs">
                <Checkbox label="Campaign updates" defaultChecked />
                <Checkbox label="Content approvals" defaultChecked />
                <Checkbox label="Team mentions" defaultChecked />
                <Checkbox label="Analytics reports" />
                <Checkbox label="System announcements" defaultChecked />
              </Stack>
            )}
            <Divider />
            <Group position="right">
              <Button variant="default">Cancel</Button>
              <Button>Save Changes</Button>
            </Group>
          </Stack>
        </Paper>
      )}

      {activeTab === 'appearance' && (
        <Paper withBorder p="md" mb="md">
          <Title order={3} mb="md">Appearance Settings</Title>
          <Stack spacing="md">
            <Title order={4}>Theme</Title>
            <Switch
              label="Dark Mode"
              checked={darkMode}
              onChange={(event) => setDarkMode(event.currentTarget.checked)}
            />
            <Switch
              label="Compact Mode"
              checked={compactMode}
              onChange={(event) => setCompactMode(event.currentTarget.checked)}
            />
            <Divider />
            <Title order={4}>Colors</Title>
            <ColorInput
              label="Primary Color"
              format="hex"
              swatches={['#1c7ed6', '#37b24d', '#f03e3e', '#7950f2', '#fa5252', '#fd7e14', '#fab005', '#82c91e']}
              value={primaryColor}
              onChange={setPrimaryColor}
            />
            <ColorInput
              label="Accent Color"
              format="hex"
              swatches={['#1c7ed6', '#37b24d', '#f03e3e', '#7950f2', '#fa5252', '#fd7e14', '#fab005', '#82c91e']}
              value={accentColor}
              onChange={setAccentColor}
            />
            <Divider />
            <Group position="right">
              <Button variant="default">Reset to Defaults</Button>
              <Button>Save Changes</Button>
            </Group>
          </Stack>
        </Paper>
      )}

      {activeTab === 'integrations' && (
        <Paper withBorder p="md" mb="md">
          <Title order={3} mb="md">Social Media Integrations</Title>
          <Stack spacing="md">
            <Card withBorder p="md" radius="md">
              <Group position="apart">
                <Group>
                  <IconBrandFacebook size={24} color="#4267B2" />
                  <div>
                    <Text weight={500}>Facebook</Text>
                    <Text size="sm" color="dimmed">
                      Connect your Facebook account to post directly from MediaMaster
                    </Text>
                  </div>
                </Group>
                <Button variant="outline" color="blue">
                  Connect
                </Button>
              </Group>
            </Card>
            <Card withBorder p="md" radius="md">
              <Group position="apart">
                <Group>
                  <IconBrandInstagram size={24} color="#C13584" />
                  <div>
                    <Text weight={500}>Instagram</Text>
                    <Text size="sm" color="dimmed">
                      Connect your Instagram account to post directly from MediaMaster
                    </Text>
                  </div>
                </Group>
                <Button variant="outline" color="grape">
                  Connect
                </Button>
              </Group>
            </Card>
            <Card withBorder p="md" radius="md">
              <Group position="apart">
                <Group>
                  <IconBrandTwitter size={24} color="#1DA1F2" />
                  <div>
                    <Text weight={500}>Twitter</Text>
                    <Text size="sm" color="dimmed">
                      Connect your Twitter account to post directly from MediaMaster
                    </Text>
                  </div>
                </Group>
                <Button variant="outline" color="cyan">
                  Connect
                </Button>
              </Group>
            </Card>
            <Card withBorder p="md" radius="md">
              <Group position="apart">
                <Group>
                  <IconBrandLinkedin size={24} color="#0077B5" />
                  <div>
                    <Text weight={500}>LinkedIn</Text>
                    <Text size="sm" color="dimmed">
                      Connect your LinkedIn account to post directly from MediaMaster
                    </Text>
                  </div>
                </Group>
                <Button variant="outline" color="indigo">
                  Connect
                </Button>
              </Group>
            </Card>
            <Card withBorder p="md" radius="md">
              <Group position="apart">
                <Group>
                  <IconBrandTiktok size={24} />
                  <div>
                    <Text weight={500}>TikTok</Text>
                    <Text size="sm" color="dimmed">
                      Connect your TikTok account to post directly from MediaMaster
                    </Text>
                  </div>
                </Group>
                <Button variant="outline">
                  Connect
                </Button>
              </Group>
            </Card>
            <Divider />
            <Title order={4}>Email Integration</Title>
            <Card withBorder p="md" radius="md">
              <Group position="apart">
                <Group>
                  <IconMail size={24} color="#DB4437" />
                  <div>
                    <Text weight={500}>Email Service</Text>
                    <Text size="sm" color="dimmed">
                      Connect your email service to send campaigns directly from MediaMaster
                    </Text>
                  </div>
                </Group>
                <Button variant="outline" color="red">
                  Connect
                </Button>
              </Group>
            </Card>
            <Divider />
            <Group position="right">
              <Button>Save Changes</Button>
            </Group>
          </Stack>
        </Paper>
      )}
    </MainLayout>
  );
}