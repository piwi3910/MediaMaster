import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Anchor, 
  Button, 
  Checkbox, 
  Divider, 
  Group, 
  PasswordInput, 
  Stack, 
  Text, 
  TextInput 
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconBrandGoogle } from '@tabler/icons-react';
import { AuthLayout } from '../layouts/AuthLayout';
import { useAuth } from '../context/AuthContext';

interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

export function Login() {
  const [error, setError] = useState<string | null>(null);
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the redirect path from location state or default to dashboard
  const from = location.state?.from?.pathname || '/dashboard';
  
  const form = useForm<LoginFormValues>({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length >= 6 ? null : 'Password must be at least 6 characters'),
    },
  });

  const handleSubmit = async (values: LoginFormValues) => {
    setError(null);
    
    try {
      const success = await login(values.email, values.password);
      
      if (success) {
        // Redirect to the page they were trying to access or dashboard
        navigate(from, { replace: true });
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred during login. Please try again.');
      console.error('Login error:', err);
    }
  };

  return (
    <AuthLayout 
      title="Welcome back to MediaMaster" 
      description="Enter your credentials to access your account"
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          {error && (
            <Text color="red" size="sm">
              {error}
            </Text>
          )}
          
          <TextInput
            required
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps('email')}
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            {...form.getInputProps('password')}
          />

          <Group justify="space-between">
            <Checkbox
              label="Remember me"
              {...form.getInputProps('rememberMe', { type: 'checkbox' })}
            />
            <Anchor component={Link} to="/forgot-password" size="sm">
              Forgot password?
            </Anchor>
          </Group>

          <Button fullWidth type="submit" loading={isLoading}>
            Sign in
          </Button>

          <Divider label="Or continue with" labelPosition="center" />

          <Button 
            fullWidth 
            variant="outline" 
            leftSection={<IconBrandGoogle size={16} />}
          >
            Google
          </Button>

          <Text ta="center" size="sm">
            Don't have an account?{' '}
            <Anchor component={Link} to="/register" size="sm">
              Register
            </Anchor>
          </Text>
        </Stack>
      </form>
    </AuthLayout>
  );
}