import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Hello World!</h1>
        <p>Yes, React again with Gatsby</p>
        <p>Now go build something great.</p>
        <Link to="/video">Watch the video</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
