const path = require('path')
const {createFilePath} = require('gatsby-source-filesystem')
const createPaginatedPages = require('gatsby-paginate')

const {
  createMarkdownNode,
  createPathForMarkdownNode,
  removeDateInFilename,
  convertDateToPath
} = require('./src/node/markdown-creator')

const {assignLayout} = require('./src/node/layouts')

// -------------------------------------------------------------
// Module.
// -------------------------------------------------------------

exports.onCreateNode = ({boundActionCreators, node, getNode}) => {
  const {createNodeField} = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const prefix = convertDateToPath(node.frontmatter.date)
    const name = removeDateInFilename(createFilePath({node, getNode}))

    createNodeField({
      node,
      name: 'slug',
      value: path.join('/', prefix, name)
    })

    createNodeField({
      node,
      name: 'path',
      value: createPathForMarkdownNode(node)
    })
  }
}

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators

  return graphql(GET_ALL_POSTS).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    // Add pagination for posts.
    createPaginatedPages({
      edges: result.data.allMarkdownRemark.edges,
      createPage: createPage,
      pageTemplate: 'src/components/templates/PaginationTemplate.js',
      pageLength: 9,
      pathPrefix: 'articles',
      context: {}
    })

    // Create markdown pages.
    result.data.allMarkdownRemark.edges.forEach(({node}) => {
      createMarkdownNode(node, boundActionCreators)
    })
  })
}

exports.onCreatePage = async ({page, boundActionCreators}) => {
  const {createPage} = boundActionCreators

  return new Promise((resolve, reject) => {
    const hasAssignedLayout = assignLayout(page)
    if (hasAssignedLayout) createPage(page)

    resolve()
  })
}

// -------------------------------------------------------------
// Queries.
// -------------------------------------------------------------

const GET_ALL_POSTS = `{
  allMarkdownRemark(
    sort: {order: DESC, fields: [frontmatter___date]}
    limit: 1000
  ) {
    edges {
      node {
        id
        frontmatter {
          path
          title
          date
          readableDate: date(formatString: "DD MMMM YYYY")
          redirectFrom
          excerpt
          excerptQuote {
            name
            quote
          }
        }
        fields {
          path
          slug
        }
        html
      }
    }
  }
}`
