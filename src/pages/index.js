import React from 'react'
import { css } from 'glamor'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'
import { HumanicityLogoMaroon } from '../components/Logos/Maroon'

const structuredData = JSON.stringify({
  '@context': 'http://schema.org',
  '@type': 'Organization',
  name: 'Humanicity',
  url: 'http://www.humanicity.net',
})

const IndexPage = ({ data: { splash } }) => (
  <>
    <Helmet
      title="Humanicity"
      meta={[
        {
          property: 'og:title',
          content: 'Humanicity',
        },
        {
          property: 'og:description',
          content: 'Because customers are people first.',
        },
        {
          property: 'description',
          content: 'Because customers are people first.',
        },
      ]}
    >
      <script type="application/ld+json">{structuredData}</script>
    </Helmet>

    <h1>YO</h1>
  </>
)

export const query = graphql`
  query IndexQuery {
    splash: file(relativePath: { eq: "Final_AdobeStock_131374615.jpeg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`

export default IndexPage
