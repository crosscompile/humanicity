import React from 'react'
import { css } from 'glamor'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'
import { LogoMaroon } from '../components/Logos/LogoMaroon'
import { Button } from '../components/Button'

const structuredData = JSON.stringify({
  '@context': 'http://schema.org',
  '@type': 'Organization',
  name: 'Humanicity',
  url: 'http://www.humanicity.net',
})

const IndexPage = ({
  data: { firstImage, secondImage, thirdImage, fourthImage },
}) => (
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
    <div>header</div>
    <div css={{ position: 'relative' }}>
      <Img
        sizes={firstImage.childImageSharp.sizes}
        css={{ position: 'absolute', height: '80vh' }}
      />
      <div
        css={{
          position: 'absolute',
          top: 0,
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <LogoMaroon width={500} />
        <Button>Learn More</Button>
      </div>
    </div>
    <div>just text</div>
    <div>Just image</div>
  </>
)

export const query = graphql`
  query IndexQuery {
    firstImage: file(relativePath: { eq: "AdobeStock_131374615.jpeg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
    secondImage: file(relativePath: { eq: "AdobeStock_33925256.jpeg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
    thirdImage: file(relativePath: { eq: "AdobeStock_66406489.jpeg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
    fourthImage: file(relativePath: { eq: "AdobeStock_93912763.jpeg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`

export default IndexPage
