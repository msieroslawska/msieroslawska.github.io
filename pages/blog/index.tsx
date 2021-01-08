import React from 'react';
import { GetStaticProps } from 'next';

import PageLayout from '../../layouts/Page';

import { getBlogs } from '../../utils/fileUtils';
import { renderBlogsList } from '../../utils/listRenderUtils';
import { Blog } from '../../types';

interface Props {
  blogs: Blog[];
}

const BlogList: React.FC<Props> = ({ blogs = [] }) => (
  <PageLayout header="All blog entries" title="All blog entries | Marta Sierosławska">
    {renderBlogsList(blogs)}
  </PageLayout>
);

export const getStaticProps: GetStaticProps = async () => {
  const blogs: Blog[] = getBlogs();

  return {
    props: { blogs },
  };
};

export default BlogList;
