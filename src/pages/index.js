import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Hello to the <br/>world of React apps</h1>
        <p>Yes, React again <br />with Gatsby and Netify <br/>and lets go build something great.</p>
        <Link to="/video">Watch the video</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
