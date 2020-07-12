import React from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';

import PageLayout from '../../layouts/Page';

import { getArticles } from '../../utils/fileUtils';
import { Article } from '../../interfaces';

interface Props {
  articles: Article[];
}

const renderArticleList = (articles: Article[]) => (
  <ul>
    {articles.map((article) => (
      <li key={article.title}>
        <Link href={`/articles/${article.slug}`}>
          <a>{article.title}</a>
        </Link>
      </li>
    ))}
  </ul>
);

const ArticleList: React.FunctionComponent<Props> = ({ articles = [] }: Props) => (
  <PageLayout title="All articles | Marta Sierosławska">
    <h1 className="page-header">All articles</h1>
    {renderArticleList(articles)}
  </PageLayout>
);

export const getStaticProps: GetStaticProps = async () => {
  const articles: Article[] = getArticles();

  return {
    props: { articles },
  };
};

export default ArticleList;
