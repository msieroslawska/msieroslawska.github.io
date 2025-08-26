import { Calendar, Container, Text } from '@components';
import { getCodelogs } from 'app/lib/getContent';

interface TwoColumnContainerProps {
  className?: string;
  error?: Error | null;
  isLoading?: boolean;
  right: React.ReactNode;
  title: string;
}

const isValidDateString = (dateString: string): boolean => {
  return !isNaN(Date.parse(dateString));
};

export const TwoColumnContainer = async ({
  className = '',
  error,
  isLoading,
  right,
  title,
}: TwoColumnContainerProps) => {
  const codelogs = await getCodelogs();

  const getContent = () => {
    if (isLoading) {
      return <Text>Loading...</Text>;
    }

    if (error) {
      return <Text style={{ color: 'red' }}>Error: {error.message}</Text>;
    }

    const selectedDate = isValidDateString(title) ? new Date(title) : undefined;

    return (
      <>
        <div className="w-96 p-4 prose">
          <Calendar codelogs={codelogs} selectedDate={selectedDate} />
        </div>
        <div className="w-2/3 p-4 prose">
          <h2>{title}</h2>
          {right}
        </div>
      </>
    );
  };

  return <Container className={`flex ${className}`}>{getContent()}</Container>;
};
