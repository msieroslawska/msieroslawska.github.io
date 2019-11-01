import React, { ReactElement } from 'react';

import { graphql, Link } from 'gatsby';

import MainLayout from '../layouts/main-layout';
import QuickNote from './quick-note-first-day';

interface Props {
  data: {
    allMarkdownRemark: {
      edges: [{
        node: {
          id: string;
          frontmatter: {
            path: string;
            title: string;
          };
        };
      }];
    };
  };
}

const Codelogs = (): ReactElement =>
  // const Posts = edges
  //   .filter((edge) => !!edge.node.frontmatter.date) // Filtering posts
  //   .map((edge) => (
  //     <Link key={edge.node.id} to={edge.node.frontmatter.path}>
  //       {`${edge.node.frontmatter.title} (${edge.node.frontmatter.path})`}
  //     </Link>
  //   ));
  (
    <MainLayout>
      <div>Codelogs</div>
      <QuickNote />

      <Link to="/blog/my-first-post/">Go to my first Markdown blog post</Link>

    </MainLayout>
  );
export default Codelogs;
