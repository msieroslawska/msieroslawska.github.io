import React from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';

import PageLayout from '../../layouts/Page';

import { getBlogs } from '../../utils/fileUtils';
import { Blog } from '../../types/next';

interface Props {
  blogs: Blog[];
}

const renderArticleList = (blogs: Blog[]) => (
  <ul>
    {blogs.map((blog) => (
      <li key={blog.title}>
        <Link href={`/blog/${blog.slug}`}>
          <a>{`(${blog.date}) ${blog.title}`}</a>
        </Link>
      </li>
    ))}
  </ul>
);

const BlogList: React.FC<Props> = ({ blogs = [] }) => (
  <PageLayout header="All blog entries" title="All blog entries | Marta Sierosławska">
    {renderArticleList(blogs)}
  </PageLayout>
);

export const getStaticProps: GetStaticProps = async () => {
  const blogs: Blog[] = getBlogs();

  return {
    props: { blogs },
  };
};

export default BlogList;
