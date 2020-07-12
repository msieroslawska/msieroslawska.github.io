import React from 'react';
import html from 'remark-html';
import highlight from 'remark-highlight.js';
import unified from 'unified';
import markdown from 'remark-parse';
import { GetStaticProps, GetStaticPaths } from 'next';

import PageLayout from '../../layouts/Page';

import { getArticles } from '../../utils/fileUtils';
import { Article } from '../../interfaces';

interface Props {
  article: Article;
}

const ArticlePage: React.FunctionComponent<Props> = (props: Props) => {
  const {
    article: { content, title },
  } = props;
  return (
    <PageLayout header={title} title={title}>
      <section dangerouslySetInnerHTML={{ __html: content }} />
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const articles = getArticles();
  const slug = context.params?.slug || '';

  const article = articles.find((c) => c.slug === slug);
  if (article === undefined) {
    throw new Error('No article found!');
  }

  const { content, title } = article;

  const result = await unified().use(markdown).use(highlight).use(html).process(content);

  return {
    props: {
      article: {
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
