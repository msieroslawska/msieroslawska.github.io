import { useQuery } from '@tanstack/react-query';

import { queryFn } from './queries';

import type { CodelogEntry } from '@types';

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

export function useTags() {
  const codeLogsQuery = useQuery({
    queryKey: ['codelogs'],
    queryFn: queryFn.codelogs.getAll,
  });
  const blogsQuery = useQuery({
    queryKey: ['blog'],
    queryFn: queryFn.blogs.getAll,
  });

  if (codeLogsQuery.data === undefined && blogsQuery.data === undefined) {
    return {
      isLoading: codeLogsQuery.isLoading && blogsQuery.isLoading,
      error: codeLogsQuery.error || blogsQuery.error,
      data: {
        codelogTags: [],
        blogTags: [],
      },
    };
  }

  const codelogs = codeLogsQuery.data;
  const blogs = blogsQuery.data;

  const codelogTags = [
    ...new Set(
      (codelogs ?? [])
        .flatMap((codelog) => (Array.isArray(codelog.fields.tags) ? codelog.fields.tags : []))
        .filter((tag): tag is string => typeof tag === 'string'),
    ),
  ];
  const blogTags = [
    ...new Set(
      (blogs ?? [])
        .flatMap((blog) => (Array.isArray(blog.fields.tags) ? blog.fields.tags : []))
        .filter((tag): tag is string => typeof tag === 'string'),
    ),
  ];

  return {
    isLoading: codeLogsQuery.isLoading && blogsQuery.isLoading,
    error: codeLogsQuery.error || blogsQuery.error,
    data: {
      codelogTags,
      blogTags,
    },
  };
}

export function useBlogs() {
  const query = useQuery({
    queryKey: ['blog'],
    queryFn: queryFn.blogs.getAll,
  });

  return {
    isLoading: query.isLoading,
    error: query.error,
    data: query.data || [],
  };
}
