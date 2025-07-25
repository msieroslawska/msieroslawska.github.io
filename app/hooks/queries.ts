import type { CodelogEntry } from '@types';

export const queryFn = {
  codelogs: {
    getAll: async (): Promise<CodelogEntry[]> => {
      const response = await fetch('/api/codelogs');
      if (!response.ok) throw new Error('Failed to fetch codelogs');
      return response.json();
    },
  },
};
