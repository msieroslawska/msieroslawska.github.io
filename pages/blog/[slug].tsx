import React from 'react';
import html from 'remark-html';
import highlight from 'remark-highlight.js';
import unified from 'unified';
import markdown from 'remark-parse';
import { GetStaticProps, GetStaticPaths } from 'next';

import PageLayout from '../../layouts/Page';

import { getBlogs } from '../../utils/fileUtils';
import { Url } from '../../types/codelogs';
import { Blog } from '../../types/next';

interface Props {
  blog: Blog;
}

const crumbsList: Url[] = [
  { href: '/', name: 'Home' },
  { href: '/blog/', name: 'All blog articles' },
];

const BlogPage: React.FC<Props> = (props) => {
  const {
    blog: { content, date, tags, title },
  } = props;

  return (
    <PageLayout crumbs={crumbsList} header={title} title={title}>
      <p>{date}</p>
      <p>{`Tags: ${tags}`}</p>
      <section dangerouslySetInnerHTML={{ __html: content }} />
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const blogs = getBlogs();
  const slug = context.params?.slug || '';

  const blog = blogs.find((c) => c.slug === slug);
  if (blog === undefined) {
    throw new Error('No blog entry found!');
  }

  const { content, date, tags, title } = blog;

  const result = await unified().use(markdown).use(highlight).use(html).process(content);

  return {
    props: {
      blog: {
        date,
        tags,
        title,
        content: result.toString(),
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = getBlogs();

  return {
    paths: blogs.map((blog) => ({
      params: {
        slug: blog.slug,
      },
    })),
    fallback: false,
  };
};

export default BlogPage;
