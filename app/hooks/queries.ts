import type { ArticleEntry, BlogEntry, CodelogEntry } from '@types';

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
  articles: {
    getAll: async (): Promise<ArticleEntry[]> => {
      const response = await fetch('/api/articles');
      if (!response.ok) throw new Error('Failed to fetch articles');
      return response.json();
    },
  },
};
