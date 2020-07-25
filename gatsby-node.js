/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   // creates slug on our markdown nodes
//   if (node.internal.type === "") {
//     const slug = path.basename(node.fileAbsolutePath, ".md")

//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//   }
// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectFullTemplate = path.resolve(`src/templates/ProjectFull.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  const res = await graphql(
    `
      query {
        allContentfulProject {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )

  console.log("res", res)

  // Create blog post pages.
  res.data.allContentfulProject.edges.forEach(edge => {
    createPage({
      // Path for this page — required
      path: `${edge.node.slug}`,
      component: projectFullTemplate,
      context: {
        slug: edge.node.slug,
        // Add optional context data to be inserted
        // as props into the page component..
        //
        // The context data can also be used as
        // arguments to the page GraphQL query.
        //
        // The page "path" is always available as a GraphQL
        // argument.
      },
    })
  })
}
