import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Anchor, 
  Button, 
  Checkbox, 
  Divider, 
  Group, 
  PasswordInput, 
  Select, 
  Stack, 
  Text, 
  TextInput 
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconBrandGoogle } from '@tabler/icons-react';
import { AuthLayout } from '../layouts/AuthLayout';
import { useAuth } from '../context/AuthContext';

interface RegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  accountType: string;
  termsOfService: boolean;
}

export function Register() {
  const [error, setError] = useState<string | null>(null);
  const { register, isLoading } = useAuth();
  const navigate = useNavigate();
  
  const form = useForm<RegisterFormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      accountType: 'agency',
      termsOfService: false,
    },
    validate: {
      firstName: (value) => (value.trim().length > 0 ? null : 'First name is required'),
      lastName: (value) => (value.trim().length > 0 ? null : 'Last name is required'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length >= 8 ? null : 'Password must be at least 8 characters'),
      confirmPassword: (value, values) => 
        value === values.password ? null : 'Passwords do not match',
      termsOfService: (value) => 
        value ? null : 'You must agree to the terms of service',
    },
  });

  const handleSubmit = async (values: RegisterFormValues) => {
    setError(null);
    
    try {
      const fullName = `${values.firstName} ${values.lastName}`;
      const success = await register(values.email, values.password, fullName);
      
      if (success) {
        // Redirect to dashboard after successful registration
        navigate('/dashboard', { replace: true });
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred during registration. Please try again.');
      console.error('Registration error:', err);
    }
  };

  return (
    <AuthLayout 
      title="Create your account" 
      description="Fill in the form below to create your MediaMaster account"
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          {error && (
            <Text color="red" size="sm">
              {error}
            </Text>
          )}
          
          <Group grow>
            <TextInput
              required
              label="First Name"
              placeholder="John"
              {...form.getInputProps('firstName')}
            />
            <TextInput
              required
              label="Last Name"
              placeholder="Doe"
              {...form.getInputProps('lastName')}
            />
          </Group>

          <TextInput
            required
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps('email')}
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Create a password"
            {...form.getInputProps('password')}
          />

          <PasswordInput
            required
            label="Confirm Password"
            placeholder="Confirm your password"
            {...form.getInputProps('confirmPassword')}
          />

          <Select
            label="Account Type"
            placeholder="Select account type"
            data={[
              { value: 'agency', label: 'Agency' },
              { value: 'client', label: 'Client' },
              { value: 'individual', label: 'Individual' },
            ]}
            {...form.getInputProps('accountType')}
          />

          <Checkbox
            label="I agree to the terms of service and privacy policy"
            {...form.getInputProps('termsOfService', { type: 'checkbox' })}
          />

          <Button fullWidth type="submit" loading={isLoading}>
            Create account
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
            Already have an account?{' '}
            <Anchor component={Link} to="/login" size="sm">
              Sign in
            </Anchor>
          </Text>
        </Stack>
      </form>
    </AuthLayout>
  );
}