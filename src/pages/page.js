import * as React from 'react'
import { Link } from 'gatsby'

const Page = () => {
    return (
        <div>
            <h1>This is a page title</h1>
            <p>Here is a paragraph for the page page.</p>
            <p>Here is a <Link to="/">link</Link> to get to the home page.</p>
        </div>
    )
}

export default Page