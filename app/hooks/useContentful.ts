import { useQuery } from '@tanstack/react-query';

import type { CodelogEntry } from '@/types';

import { queryFn } from './queries';

export function useCodelogs() {
  const query = useQuery({
    queryKey: ['codelogs'],
    queryFn: queryFn.codelogs.getAll,
  });

  const sortByDate = (a: CodelogEntry, b: CodelogEntry) => (a.fields.date > b.fields.date ? -1 : 1);

  return {
    isLoading: query.isLoading,
    error: query.error,
    data: query.data?.sort(sortByDate) || [],
  };
}
