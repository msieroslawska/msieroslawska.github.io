import { useQuery } from '@tanstack/react-query';

import type { CodelogEntry } from '@/types';

async function fetchCodelogs(): Promise<CodelogEntry[]> {
  const response = await fetch('/contentful');
  if (!response.ok) throw new Error('Failed to fetch codelogs');
  return response.json();
}

export function useContentful() {
  const query = useQuery({
    queryKey: ['codelogs'],
    queryFn: fetchCodelogs,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });

  return {
    isLoading: query.isLoading,
    error: query.error,
    data: query.data || [],
  };
}
