import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { container, heading, navLinks, navLinkItem, navLinkText, siteTitle } from './layout.module.css'

const Layout = ({ PageTitle, children }) => {

    const data = useStaticQuery(graphql`
        query kkkkkkj {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `)
      
    return (
        <div className={container}>
            <title>
                { PageTitle } | { data.site.siteMetadata.title }
            </title>
            <header className={siteTitle}>{ data.site.siteMetadata.title }</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
                    <li className={navLinkItem}><Link to="/blog" className={navLinkText}>Blog</Link></li>
                    <li className={navLinkItem}><Link to="/___graphql" className={navLinkText}>GraphiQL</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{ PageTitle }</h1>
                { children }
                <p>Descripiton: { data.site.siteMetadata.description }</p>
            </main>
        </div>
    )
}

export default Layout