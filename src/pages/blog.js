import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout PageTitle = "Blog Posts">
      {
        data.allMdx.nodes.map(node => ( 
          <article key={node.id}>
            <h1>{node.frontmatter.title}</h1>
            <p>Posted: {node.frontmatter.date}</p>
            <MDXRenderer>
              {node.body}
            </MDXRenderer>
          </article>
        )
        )
      }
    </Layout>
  )
}

export const query = graphql`
query sdsg{
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          author
          title
          date(formatString: "MMMM D, YYYY")
        }
        id
        body
      }
    }
  }
  
`
export default BlogPage