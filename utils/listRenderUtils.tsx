import React from 'react';
import Link from 'next/link';
import { Article, Blog, Codelog, MappedCodelogs, Tags, TagSource } from '../types';

export const createArticleLink = (article: Article): JSX.Element => (
  <Link href={`/articles/${article.slug}`}>
    <a>{article.title}</a>
  </Link>
);

export const createBlogLink = (blog: Blog): JSX.Element => (
  <Link href={`/blog/${blog.slug}`}>
    <a>{`(${blog.date}) ${blog.title}`}</a>
  </Link>
);

export const createCodelogLink = (codelog: Codelog): JSX.Element => (
  <Link href={`/codelogs/${codelog.slug.year}-${codelog.slug.month}-${codelog.slug.day}`}>
    <a>{codelog.title}</a>
  </Link>
);

const renderOneLink = (link: TagSource): JSX.Element => <li key={link.name}>{link.url}</li>;

export const renderTagsList = (tags: Tags): JSX.Element[] =>
  Object.keys(tags).map((tag) => (
    <div key={tag}>
      <p>{tag}</p>
      <ul>{tags[tag].map(renderOneLink)}</ul>
    </div>
  ));

export const renderArticlesList = (articles: Article[]): JSX.Element => (
  <ul>
    {articles.map((article) => (
      <li key={article.title}>{createArticleLink(article)}</li>
    ))}
  </ul>
);

export const renderBlogsList = (blogs: Blog[]): JSX.Element => (
  <ul>
    {blogs.map((blog) => (
      <li key={blog.title}>{createBlogLink(blog)}</li>
    ))}
  </ul>
);

const renderOneCodelog = (codelog: Codelog): JSX.Element => (
  <li key={codelog.title} className="wrapped-element">
    {createCodelogLink(codelog)}
  </li>
);

export const renderCodelogs = (filteredCodelogs: MappedCodelogs): JSX.Element[] =>
  Object.keys(filteredCodelogs).map((month) => (
    <div key={month}>
      <p>{month}</p>
      <ul className="wrapped-list">{filteredCodelogs[month].map(renderOneCodelog)}</ul>
    </div>
  ));

export const renderCodelogsList = (codelogs: Codelog[]): JSX.Element => (
  <ul>
    {codelogs.map((codelog) => (
      <li key={codelog.title}>
        <Link href={`/codelogs/${codelog.slug.year}-${codelog.slug.month}-${codelog.slug.day}`}>
          <a>{codelog.title}</a>
        </Link>
      </li>
    ))}
  </ul>
);
