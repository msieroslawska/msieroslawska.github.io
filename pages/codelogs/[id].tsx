import React from 'react';
import fs from 'fs';
import html from 'remark-html';
import highlight from 'remark-highlight.js';
import unified from 'unified';
import markdown from 'remark-parse';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getCodelogs, ROOT_PATH } from '../../utils/fileUtils';

interface Codelog {
  id: string;
  slug: string;
  tags: string[];
  title: string;
}
interface Props {
  codelogs: Codelog[];
}

const BlogPostPage: React.FunctionComponent<Props> = (props) => (
  <div>
    test
    {props.codelog.content}
    {/* <h1>{props.blog.title}</h1> */}
    {/* <section dangerouslySetInnerHTML={{ __html: props.blog.content }} /> */}
  </div>
);

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;
  const path = `${ROOT_PATH}/${slug.join('-')}.md`;

  const rawContent = fs.readFileSync(path, {
    encoding: 'utf-8',
  });

  const { data, content } = matter(rawContent);

  const result = await unified()
    .use(markdown)
    .use(highlight) // highlight code block
    .use(html)
    .process(content); // pass content to process

  return {
    props: {
      codelog: {
        ...data,
        content: result.toString(),
      },
    },
  };
};

export const getStaticPaths = () => {
  const codelogs = getCodelogs();

  return {
    paths: codelogs.map((codelog) => ({
      params: {
        id: codelog.id,
      },
    })),
    fallback: false,
  };
};

export default BlogPostPage;
