const _ = require("lodash")
const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allMarkdownRemark(sort: { order: ASC, fields: frontmatter___title }) {
          edges {
            node {
              id
              frontmatter {
                path
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw new Error(result.errors)
  }

  const pages = result.data.allMarkdownRemark.edges

  pages.forEach(({ node }) => {
    const ruta = node.frontmatter.path
    createPage({
      path: ruta,
      component: path.resolve("./src/templates/Home.js"),
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-skrollr/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
