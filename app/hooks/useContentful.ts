import { useQuery } from '@tanstack/react-query';

import { queryFn } from './queries';

export function useCodelogs() {
  const query = useQuery({
    queryKey: ['codelogs'],
    queryFn: queryFn.codelogs.getAll,
  });

  return {
    isLoading: query.isLoading,
    error: query.error,
    data: query.data || [],
  };
}
