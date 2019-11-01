const path = require('path');

exports.createPages = ({ actions, graphql }) => graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then((result) => {
  if (result.errors) {
    return Promise.reject(result.errors);
  }
  const blogPostTemplate = path.resolve('src/layouts/codelog-layout.tsx');
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    actions.createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
    });
  });
});
