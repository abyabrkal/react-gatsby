import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave';

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Hello to the <br/>world of React apps</h1>
        <p>Yes, React again <br />with Gatsby and Netify <br/>and lets go build something great.</p>
        <Link to="/video">Watch the video</Link>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50" />
          <img src={require('../images/logo-figma.png')} width="50" />
          <img src={require('../images/logo-studio.png')} width="50" />
          <img src={require('../images/logo-framer.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-swift.png')} width="50" />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>React features, more coming</h2>  
      <div className="CardGroup">
        <Card 
          title="JSX"
          text="10 sections"
          image={require('../images/wallpaper.jpg')} />
        <Card 
          title="Components and Props"
          text="11 sections"
          image={require('../images/wallpaper2.jpg')} />
        <Card 
          title="State and Lifecycle"
          text="5 sections"
          image={require('../images/wallpaper3.jpg')} />
        <Card 
          title="Events and Rendering"
          text="10 sections"
          image={require('../images/wallpaper4.jpg')} />
      </div>
    </div>

    <Section 
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify." 
    />
  </div>
)

export default IndexPage
