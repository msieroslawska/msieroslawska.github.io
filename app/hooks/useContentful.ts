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
    queryKey: ['blogs'],
    queryFn: queryFn.blogs.getAll,
  });
  const articlesQuery = useQuery({
    queryKey: ['articles'],
    queryFn: queryFn.articles.getAll,
  });

  if (codeLogsQuery.data === undefined && blogsQuery.data === undefined && articlesQuery.data === undefined) {
    return {
      isLoading: codeLogsQuery.isLoading && blogsQuery.isLoading && articlesQuery.isLoading,
      error: codeLogsQuery.error || blogsQuery.error || articlesQuery.error,
      data: {
        articleTags: [],
        blogTags: [],
        codelogTags: [],
      },
    };
  }

  const codelogs = codeLogsQuery.data;
  const blogs = blogsQuery.data;
  const articles = articlesQuery.data;

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
  const articleTags = [
    ...new Set(
      (articles ?? [])
        .flatMap((article) => (Array.isArray(article.fields.tags) ? article.fields.tags : []))
        .filter((tag): tag is string => typeof tag === 'string'),
    ),
  ];

  return {
    isLoading: codeLogsQuery.isLoading && blogsQuery.isLoading && articlesQuery.isLoading,
    error: codeLogsQuery.error || blogsQuery.error || articlesQuery.error,
    data: {
      articleTags,
      blogTags,
      codelogTags,
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

export function useArticles() {
  const query = useQuery({
    queryKey: ['article'],
    queryFn: queryFn.articles.getAll,
  });

  return {
    isLoading: query.isLoading,
    error: query.error,
    data: query.data || [],
  };
}
