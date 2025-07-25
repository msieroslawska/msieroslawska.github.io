import { Query } from './query';

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return <Query>{children}</Query>;
};
