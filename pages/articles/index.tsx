import React from 'react';
import { GetStaticProps } from 'next';

import PageLayout from '../../layouts/Page';

import { getArticles } from '../../utils/fileUtils';
import { renderArticlesList } from '../../utils/listRenderUtils';
import { Article } from '../../types';

interface Props {
  articles: Article[];
}

const ArticleList: React.FC<Props> = ({ articles = [] }) => (
  <PageLayout header="All articles" title="All articles | Marta Sierosławska">
    {renderArticlesList(articles)}
  </PageLayout>
);

export const getStaticProps: GetStaticProps = async () => {
  const articles: Article[] = getArticles();

  return {
    props: { articles },
  };
};

export default ArticleList;
