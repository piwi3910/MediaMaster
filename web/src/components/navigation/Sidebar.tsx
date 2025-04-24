import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Group, Text, ThemeIcon, UnstyledButton, rem } from '@mantine/core';
import {
  IconDashboard,
  IconBrandCampaignmonitor,
  IconArticle,
  IconBrandOpenai,
  IconBrandFacebook,
  IconChartBar,
  IconUsers,
  IconSettings,
} from '@tabler/icons-react';

// Define the navigation items
const navItems = [
  { icon: IconDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: IconBrandCampaignmonitor, label: 'Campaigns', path: '/campaigns' },
  { icon: IconArticle, label: 'Content', path: '/content' },
  { icon: IconBrandOpenai, label: 'AI Tools', path: '/ai-tools' },
  { icon: IconBrandFacebook, label: 'Social Media', path: '/social-media' },
  { icon: IconChartBar, label: 'Reports', path: '/reports' },
  { icon: IconUsers, label: 'Team', path: '/team' },
  { icon: IconSettings, label: 'Settings', path: '/settings' },
];

export function Sidebar() {
  const [active, setActive] = useState('/dashboard');

  const links = navItems.map((item) => (
    <NavLink
      to={item.path}
      key={item.label}
      style={({ isActive }) => {
        if (isActive) {
          setActive(item.path);
        }
        return {};
      }}
    >
      <UnstyledButton
        style={(theme) => ({
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
          borderRadius: theme.radius.sm,
          fontWeight: 500,
          backgroundColor: active === item.path 
            ? theme.colors[theme.primaryColor][0] 
            : 'transparent',
          color: active === item.path 
            ? theme.colors[theme.primaryColor][7] 
            : theme.colors.gray[7],
          '&:hover': {
            backgroundColor: theme.colors.gray[0],
          },
        })}
      >
        <Group>
          <ThemeIcon size={30} variant="light">
            <item.icon size={18} />
          </ThemeIcon>
          <Text size="sm">{item.label}</Text>
        </Group>
      </UnstyledButton>
    </NavLink>
  ));

  return (
    <Box>
      {links}
    </Box>
  );
}