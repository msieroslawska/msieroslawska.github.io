import React from 'react';
import html from 'remark-html';
import highlight from 'remark-highlight.js';
import { unified } from 'unified';
import markdown from 'remark-parse';
import { GetStaticProps, GetStaticPaths } from 'next';

import PageLayout from '../../layouts/Page';

import { getArticles } from '../../utils/fileUtils';
import { Article, Url } from '../../types';

interface Props {
  article: Article;
}

const crumbs: Url[] = [
  { href: '/', name: 'Home' },
  { href: '/articles', name: 'All articles' },
];

const ArticlePage: React.FC<Props> = ({ article: { content, tags = [], title } }) => (
  <PageLayout crumbs={crumbs} header={title} title={title}>
    <p>{`Tags: ${tags}`}</p>
    <section dangerouslySetInnerHTML={{ __html: content }} />
  </PageLayout>
);

export const getStaticProps: GetStaticProps = async (context) => {
  const articles = getArticles();
  const slug = context.params?.slug || '';

  const article = articles.find((c) => c.slug === slug);
  if (article === undefined) {
    throw new Error('No article found!');
  }

  const { content, tags, title } = article;

  const result = await unified().use(markdown).use(highlight).use(html).process(content);

  return {
    props: {
      article: {
        tags,
        title,
        content: result.toString(),
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = getArticles();

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
};

export default ArticlePage;
