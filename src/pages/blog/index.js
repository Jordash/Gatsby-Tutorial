import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout PageTitle = "Blog Posts">
      {
        data.allMdx.nodes.map(node => ( 
          <article key={node.id}>
            <Link to={`/blog/${node.slug}`}><h1>{node.frontmatter.title}</h1></Link>
            <p>Posted: {node.frontmatter.date}</p>
            <p>&nbsp;</p>
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
        slug
      }
    }
  }
  
`
export default BlogPage