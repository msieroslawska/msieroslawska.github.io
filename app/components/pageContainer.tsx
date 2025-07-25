'use client';
import { Container, Text } from '@components';

interface PageContainerProps {
  children: React.ReactNode;
  error?: Error | null;
  isLoading: boolean;
  title: string;
}

export const PageContainer = ({ children, error, isLoading, title }: PageContainerProps) => {
  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text style={{ color: 'red' }}>Error: {error.message}</Text>;

  return (
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  );
};
