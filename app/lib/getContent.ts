import { queryFn } from './contentfulClient';

import type { CodelogEntry } from '@types';

export async function getCodelogs() {
  const sortByDate = (a: CodelogEntry, b: CodelogEntry) => (a.fields.date > b.fields.date ? -1 : 1);

  const codelogs = await queryFn.codelogs.getAll();
  return codelogs.sort(sortByDate);
}

export async function getBlogs() {
  return queryFn.blogs.getAll();
}

export async function getArticles() {
  return queryFn.articles.getAll();
}

export async function getTags() {
  const articles = await queryFn.articles.getAll();
  const blogs = await queryFn.blogs.getAll();
  const codelogs = await queryFn.codelogs.getAll();

  if (codelogs === undefined && blogs === undefined && articles === undefined) {
    return {
      articleTags: [],
      blogTags: [],
      codelogTags: [],
    };
  }

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
    articleTags,
    blogTags,
    codelogTags,
  };
}
