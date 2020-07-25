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

const ArticleList: React.FC<Props> = ({ articles = [] }: Props) => (
  <PageLayout header="All articles" title="All articles | Marta Sierosławska">
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
