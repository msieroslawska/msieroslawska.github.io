import React from 'react';
import html from 'remark-html';
import highlight from 'remark-highlight.js';
import unified from 'unified';
import markdown from 'remark-parse';
import { GetStaticProps, GetStaticPaths } from 'next';

import PageLayout from '../../layouts/Page';

import { getCodelogs } from '../../utils/fileUtils';
import { Codelog } from '../../interfaces';

interface Props {
  codelog: Codelog;
}

const BlogPostPage: React.FunctionComponent<Props> = (props: Props) => {
  const {
    codelog: { content, tags, title },
  } = props;
  return (
    <PageLayout header={title} title={title}>
      <p>{`Tags: ${tags}`}</p>
      <section dangerouslySetInnerHTML={{ __html: content }} />
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const codelogs = getCodelogs();
  const slug = context.params?.slug || '';

  const codelog = codelogs.find((c) => c.title === slug);
  if (codelog === undefined) {
    throw new Error('No codelog found!');
  }

  const { content, tags, title } = codelog;

  const result = await unified().use(markdown).use(highlight).use(html).process(content);

  return {
    props: {
      codelog: {
        tags,
        title,
        content: result.toString(),
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const codelogs = getCodelogs();

  return {
    paths: codelogs.map((codelog) => ({
      params: {
        slug: `${codelog.slug.year}-${codelog.slug.month}-${codelog.slug.day}`,
      },
    })),
    fallback: false,
  };
};

export default BlogPostPage;
