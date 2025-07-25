'use client';
import { Container, Text } from '@components';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  error?: Error | null;
  isLoading: boolean;
  title: string;
}

export const PageContainer = ({ children, className = '', error, isLoading, title }: PageContainerProps) => {
  const getContent = () => {
    if (isLoading) {
      return <Text>Loading...</Text>;
    }

    if (error) {
      return <Text style={{ color: 'red' }}>Error: {error.message}</Text>;
    }

    return (
      <>
        <h2>{title}</h2>
        {children}
      </>
    );
  };

  return <Container className={`prose ${className}`}>{getContent()}</Container>;
};
