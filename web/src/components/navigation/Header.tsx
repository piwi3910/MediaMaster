import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ActionIcon,
  Avatar,
  Box,
  Burger,
  Group,
  Menu,
  Text,
  UnstyledButton,
  useMantineTheme,
  Indicator,
  Popover
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import {
  IconBell,
  IconChevronDown,
  IconLogout,
  IconMoonStars,
  IconSettings,
  IconSun,
  IconUser
} from '@tabler/icons-react';
import { useAuth } from '../../context/AuthContext';
import { useColorScheme } from '../../context/ColorSchemeContext';

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

export function Header({ opened, toggle }: HeaderProps) {
  const theme = useMantineTheme();
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const [notificationsOpened, setNotificationsOpened] = useState(false);
  const { user, logout } = useAuth();
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleNotificationClick = () => {
    setNotificationsOpened((o) => !o);
    // In a real app, we would mark notifications as read here
  };

  // Get user initials for avatar
  const getUserInitials = () => {
    if (!user || !user.name) return 'U';
    
    const nameParts = user.name.split(' ');
    if (nameParts.length === 1) return nameParts[0].charAt(0).toUpperCase();
    
    return (nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)).toUpperCase();
  };

  return (
    <Box
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: `0 ${theme.spacing.md}`,
      }}
    >
      <Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Text size="xl" fw={700}>MediaMaster</Text>
      </Group>

      <Group>
        <ActionIcon
          variant="default"
          onClick={() => toggleColorScheme()}
          size="lg"
          title="Toggle color scheme"
        >
          {colorScheme === 'dark' ? <IconSun size={18} /> : <IconMoonStars size={18} />}
        </ActionIcon>

        <Popover
          width={300}
          position="bottom-end"
          withArrow
          shadow="md"
          opened={notificationsOpened}
          onChange={setNotificationsOpened}
        >
          <Popover.Target>
            <Indicator color="red" size={8} offset={4} withBorder>
              <ActionIcon
                variant="default"
                size="lg"
                onClick={handleNotificationClick}
                title="Notifications"
              >
                <IconBell size={18} />
              </ActionIcon>
            </Indicator>
          </Popover.Target>
          <Popover.Dropdown>
            <Text fw={500} size="sm" mb="xs">Notifications</Text>
            <Text size="xs" c="dimmed">You have 3 unread notifications</Text>
            <Box mt="md">
              <Text size="sm">New campaign approval request</Text>
              <Text size="sm" mt="xs">Content scheduled for publishing</Text>
              <Text size="sm" mt="xs">Analytics report ready</Text>
            </Box>
          </Popover.Dropdown>
        </Popover>

        <Menu
          width={260}
          position="bottom-end"
          transitionProps={{ transition: 'pop-top-right' }}
          onClose={() => setUserMenuOpened(false)}
          onOpen={() => setUserMenuOpened(true)}
          withinPortal
        >
          <Menu.Target>
            <UnstyledButton
              style={{
                display: 'block',
                padding: theme.spacing.xs,
                borderRadius: theme.radius.sm,
                color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
              }}
              styles={{
                root: {
                  '&:hover': {
                    backgroundColor:
                      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                  },
                },
              }}
            >
              <Group spacing="xs">
                <Avatar src={null} alt="User avatar" radius="xl" size={30} color="blue">
                  {getUserInitials()}
                </Avatar>
                <Text size="sm" fw={500} mr={3}>
                  {user?.name || 'User'}
                </Text>
                <IconChevronDown size={12} stroke={1.5} />
              </Group>
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item leftSection={<IconUser size={14} stroke={1.5} />}>
              Profile
            </Menu.Item>
            <Menu.Item leftSection={<IconSettings size={14} stroke={1.5} />}>
              Settings
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item
              leftSection={<IconLogout size={14} stroke={1.5} />}
              onClick={handleLogout}
            >
              Logout
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Box>
  );
}