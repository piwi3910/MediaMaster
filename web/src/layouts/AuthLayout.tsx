import { ReactNode } from 'react';
import { Box, Center, Container, Group, Paper, Text, Title } from '@mantine/core';
import { IconBrandTwitter } from '@tabler/icons-react';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

export function AuthLayout({ children, title, description }: AuthLayoutProps) {
  return (
    <Box
      style={(theme) => ({
        minHeight: '100vh',
        backgroundColor: theme.colors.gray[0],
        paddingTop: 80,
        paddingBottom: 80,
      })}
    >
      <Container size={420}>
        <Center mb={40}>
          <Group gap="xs">
            <IconBrandTwitter size={40} stroke={1.5} />
            <Text size="xl" fw={700}>MediaMaster</Text>
          </Group>
        </Center>

        <Paper withBorder shadow="md" p={30} radius="md">
          <Title order={2} ta="center" mt="md" mb={20}>
            {title}
          </Title>
          
          {description && (
            <Text c="dimmed" size="sm" ta="center" mb={30}>
              {description}
            </Text>
          )}

          {children}
        </Paper>
      </Container>
    </Box>
  );
}