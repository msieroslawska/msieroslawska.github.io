import type { BlogEntry, CodelogEntry } from '@types';

export const queryFn = {
  codelogs: {
    getAll: async (): Promise<CodelogEntry[]> => {
      const response = await fetch('/api/codelogs');
      if (!response.ok) throw new Error('Failed to fetch codelogs');
      return response.json();
    },
  },
  blogs: {
    getAll: async (): Promise<BlogEntry[]> => {
      const response = await fetch('/api/blogs');
      if (!response.ok) throw new Error('Failed to fetch blogs');
      return response.json();
    },
  },
};
