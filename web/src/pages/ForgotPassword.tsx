import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Anchor, 
  Button, 
  Group, 
  Stack, 
  Text, 
  TextInput 
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconArrowLeft } from '@tabler/icons-react';
import { AuthLayout } from '../layouts/AuthLayout';

interface ForgotPasswordFormValues {
  email: string;
}

export function ForgotPassword() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const form = useForm<ForgotPasswordFormValues>({
    initialValues: {
      email: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const handleSubmit = async (values: ForgotPasswordFormValues) => {
    setError(null);
    setIsLoading(true);
    
    try {
      // In a real app, this would make an API call to send a password reset email
      // For demo purposes, we'll simulate a delay and just show a success message
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Password reset error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout 
      title={isSubmitted ? "Check your email" : "Forgot your password?"} 
      description={
        isSubmitted 
          ? "We've sent a password reset link to your email address." 
          : "Enter your email address and we'll send you a link to reset your password."
      }
    >
      {isSubmitted ? (
        <Stack>
          <Text size="sm" c="dimmed" ta="center">
            If you don't receive an email within a few minutes, check your spam folder or try again.
          </Text>
          
          <Button component={Link} to="/login" variant="subtle" leftSection={<IconArrowLeft size={16} />}>
            Back to login
          </Button>
        </Stack>
      ) : (
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

            <Button fullWidth type="submit" loading={isLoading}>
              Reset Password
            </Button>

            <Group justify="center">
              <Anchor component={Link} to="/login" size="sm">
                Back to login
              </Anchor>
            </Group>
          </Stack>
        </form>
      )}
    </AuthLayout>
  );
}