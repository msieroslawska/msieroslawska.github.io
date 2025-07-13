import { Mantine } from './mantine';
import { Query } from './query';

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <Query>
      <Mantine>{children}</Mantine>
    </Query>
  );
};
