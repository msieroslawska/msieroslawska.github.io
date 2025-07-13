'use client';
import { Container, Text, Title } from '@mantine/core';

interface PageContainerProps {
  children: React.ReactNode;
  error?: Error | null;
  isLoading: boolean;
  title: string;
}

export const PageContainer = ({ children, error, isLoading, title }: PageContainerProps) => {
  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text c="red">Error: {error.message}</Text>;

  return (
    <Container p="xl" mt={200}>
      <Title order={2}>{title}</Title>
      {children}
    </Container>
  );
};
