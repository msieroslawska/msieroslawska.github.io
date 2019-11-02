import React, { ReactElement } from 'react';
import { graphql, Link } from 'gatsby';

import MainLayout from '../layouts/main-layout';

interface Edges {
  edges: [{
    node: {
      id: string;
      frontmatter: {
        date: string;
        path: string;
      };
    };
  }];
}

interface Props {
  data: {
    allMarkdownRemark: Edges;
  };
}

const renderCodelogsList = ({ edges }: Edges): ReactElement[] => (
  edges
    .filter((edge) => !!edge.node.frontmatter.date) // Filtering posts
    .map((edge) => {
      const { id, frontmatter: { date, path } } = edge.node;
      return (
        <li>
          <Link key={id} to={path}>{date}</Link>
        </li>
      );
    }));

const Codelogs = ({ data: { allMarkdownRemark: { edges } } }: Props): ReactElement => (
  <MainLayout>
    <h2>Codelogs</h2>

    <ul>{renderCodelogsList({ edges })}</ul>

  </MainLayout>
);
export default Codelogs;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            path
          }
        }
      }
    }
  }
`;
