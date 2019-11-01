import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';

import MainLayout from './main-layout';

interface Props {
  data: {
    markdownRemark: {
      frontmatter: {
        date: string;
        title: string;
      };
      html: string;
    };
  };
}

const Template = ({ data: { markdownRemark: { frontmatter, html } } }: Props): ReactElement => (
  <MainLayout>
    <h1>{frontmatter.title}</h1>
    <h2>{frontmatter.date}</h2>
    <div
      className="blog-post-content"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </MainLayout>
);

export default Template;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
