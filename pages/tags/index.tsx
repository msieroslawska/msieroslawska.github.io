/* eslint-disable no-param-reassign */
import React from 'react';
import { GetStaticProps } from 'next';

import PageLayout from '../../layouts/Page';

import { Article, Blog, Codelog, Tags } from '../../types';
import { getArticles, getBlogs, getCodelogs } from '../../utils/fileUtils';
import { createArticleLink, createBlogLink, createCodelogLink, renderTagsList } from '../../utils/listRenderUtils';

interface Props {
  articles: Article[];
  blogs: Blog[];
  codelogs: Codelog[];
}

const normalise = (tag: string): string => {
  return tag.toLowerCase();
};

/* TODO: Nasty processing, must be less smelly */
const processArticlesTags = (articles: Article[], tagsList: Tags) => {
  articles.forEach((article) => {
    if (article.tags && article.tags.length > 0) {
      article.tags.forEach((tag) => {
        const normalisedTag = normalise(tag);
        const source = { name: article.title, url: createArticleLink(article) };
        if (tagsList[normalisedTag] === undefined) {
          tagsList[normalisedTag] = [source];
        } else {
          tagsList[normalisedTag].push(source);
        }
      });
    }
  });
};

const processBlogsTags = (blogs: Blog[], tagsList: Tags) => {
  blogs.forEach((blog) => {
    if (blog.tags && blog.tags.length > 0) {
      blog.tags.forEach((tag) => {
        const normalisedTag = normalise(tag);
        const source = { name: blog.title, url: createBlogLink(blog) };
        if (tagsList[normalisedTag] === undefined) {
          tagsList[normalisedTag] = [source];
        } else {
          tagsList[normalisedTag].push(source);
        }
      });
    }
  });
};

const processCodelogsTags = (codelogs: Codelog[], tagsList: Tags) => {
  codelogs.forEach((codelog) => {
    if (codelog.tags && codelog.tags.length > 0) {
      codelog.tags.forEach((tag) => {
        const normalisedTag = normalise(tag);
        const source = { name: codelog.title, url: createCodelogLink(codelog) };
        if (tagsList[normalisedTag] === undefined) {
          tagsList[normalisedTag] = [source];
        } else {
          tagsList[normalisedTag].push(source);
        }
      });
    }
  });
};

const createTagsList = (articles: Article[], blogs: Blog[], codelogs: Codelog[]): Tags => {
  const allTags: Tags = {};

  processArticlesTags(articles, allTags);
  processBlogsTags(blogs, allTags);
  processCodelogsTags(codelogs, allTags);

  return allTags;
};

const TagsList: React.FC<Props> = ({ articles, blogs, codelogs = [] }) => {
  const allTags: Tags = createTagsList(articles, blogs, codelogs);

  return (
    <PageLayout header="All tags" title="All tags | Marta Sierosławska">
      {renderTagsList(allTags)}
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const articles: Article[] = getArticles();
  const codelogs: Codelog[] = getCodelogs();
  const blogs: Blog[] = getBlogs();

  return {
    props: { articles, blogs, codelogs },
  };
};

export default TagsList;
