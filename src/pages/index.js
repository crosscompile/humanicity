import React from 'react'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'
import { LogoMaroon } from '../components/Logos/LogoMaroon'
import { Button, AnchorButton } from '../components/Button'
import { theme } from '../theme'
import { HumansTalking } from '../components/Logos/HumansTalking'
import { HumanWalkingLeft } from '../components/Logos/HumanWalkingLeft'
import { HumanWalkingRight } from '../components/Logos/HumanWalkingRight'

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
    <div
      css={{
        position: 'absolute',
        top: '-50%',
        left: '-100%',
        height: '100%',
        width: '200%',
        background: theme.color.white,
        transform: 'rotate(-5deg)',
      }}
    />
    <div
      css={{
        width: '100%',
        backgroundColor: theme.color.offWhite,
        overflow: 'hidden',
      }}
    >
      <div
        css={{
          maxWidth: 1200,
          margin: '0 auto',
          height: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          css={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <HumanWalkingLeft
            css={{ position: 'absolute', left: -360, bottom: -100 }}
          />
          <HumanWalkingRight
            css={{ position: 'absolute', right: -420, bottom: -250 }}
          />
          <LogoMaroon width={500} css={{ marginBottom: theme.space.medium }} />
          <AnchorButton href="#learn-more">learn more</AnchorButton>
        </div>
      </div>
    </div>

    <div
      css={{
        maxWidth: 700,
        margin: `${theme.space.xxlarge} auto`,
        textAlign: 'center',
        padding: `0 ${theme.space.xlarge}`,
      }}
    >
      <h1 id="learn-more" css={{ fontSize: theme.fontSize.xxlarge }}>
        embrace. engage. motivate.
      </h1>
      <p
        css={{
          fontSize: theme.fontSize.large,
          lineHeight: theme.lineHeight.content,
        }}
      >
        we are a brand strategy, messaging and design agency obsessed with
        understanding people. we identify the powerful human connections to
        propel your brand’s growth. humanicity helps you build more sustainable,
        profitable relationships with your customers.
      </p>
    </div>
    <Img
      sizes={firstImage.childImageSharp.sizes}
      css={{
        height: 600,
        width: 'calc(100% + 10px)',
        left: -5,
        maxWidth: 1200,
        margin: '0 auto',
        borderRadius: theme.borderRadius,
      }}
    />
    <div
      css={{
        maxWidth: 900,
        margin: `${theme.space.xxlarge} auto`,
        padding: `0 ${theme.space.xlarge}`,
      }}
    >
      <h1
        css={{
          fontSize: theme.fontSize.xxlarge,
          marginBottom: theme.space.xxlarge,
          textAlign: 'center',
        }}
      >
        why humanicity?
      </h1>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          [theme.media.medium]: {
            flexDirection: 'row',
          },
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <HumansTalking
          css={{
            flexShrink: 0,
            marginBottom: theme.space.xxlarge,
            [theme.media.medium]: { marginBottom: 0 },
          }}
        />
        <div
          css={{
            marginLeft: 0,
            [theme.media.medium]: { marginLeft: theme.space.xxlarge },
          }}
        >
          <div>
            <h2 css={{ fontSize: theme.fontSize.xlarge }}>human motivation</h2>
            <p
              css={{
                fontSize: theme.fontSize.large,
                lineHeight: theme.lineHeight.content,
              }}
            >
              everything starts with building your purpose, promise and point of
              difference.
            </p>
          </div>
          <div>
            <h2 css={{ fontSize: theme.fontSize.xlarge }}>human expression</h2>
            <p
              css={{
                fontSize: theme.fontSize.large,
                lineHeight: theme.lineHeight.content,
              }}
            >
              developing brand authentic visuals and language to connect your
              brand to your customers.
            </p>
          </div>
          <div>
            <h2 css={{ fontSize: theme.fontSize.xlarge }}>human engagement</h2>
            <p
              css={{
                fontSize: theme.fontSize.large,
                lineHeight: theme.lineHeight.content,
              }}
            >
              putting your brand’s humanicity into the world leading with
              digital and social technology.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Img
      sizes={secondImage.childImageSharp.sizes}
      css={{
        height: 600,
        width: 'calc(100% + 10px)',
        left: -5,
        maxWidth: 1200,
        margin: '0 auto',
        borderRadius: theme.borderRadius,
      }}
      imgStyle={{ objectPosition: 'top center' }}
    />
    <div
      css={{
        maxWidth: 700,
        margin: `${theme.space.xxlarge} auto`,
        padding: `0 ${theme.space.xlarge}`,
        textAlign: 'center',
      }}
    >
      <h1
        css={{
          fontSize: theme.fontSize.xxlarge,
        }}
      >
        tell us your story
      </h1>
      <p
        css={{
          fontSize: theme.fontSize.large,
          lineHeight: theme.lineHeight.content,
          marginBottom: theme.space.xlarge,
        }}
      >
        are you launching a new brand? do you need a new purpose and story to
        evolve a current brand? as creators of human connections, we’ll have
        ideas on what humanicity can do for your brand.
      </p>
      <div
        css={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button>let's talk</Button>
      </div>
    </div>

    <div
      css={{
        width: '100%',
        backgroundColor: theme.color.navy,
      }}
    >
      <div
        css={{
          maxWidth: 900,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          [theme.media.medium]: {
            flexDirection: 'row',
          },
          alignItems: 'center',
          justifyContent: 'center',
          padding: `${theme.space.large} 0`,
          fontSize: theme.fontSize.xlarge,
        }}
      >
        <div
          css={{
            padding: theme.space.xxlarge,
          }}
        >
          <a
            href="https://linkedin.com"
            css={{
              ':not(:hover)': {
                textDecoration: 'none',
              },
              color: theme.color.white,
            }}
          >
            tina ingall
          </a>
        </div>

        <div
          css={{
            padding: theme.space.xxlarge,
          }}
        >
          <a
            href="https://linkedin.com"
            css={{
              ':not(:hover)': {
                textDecoration: 'none',
              },
              color: theme.color.white,
            }}
          >
            melinda cross
          </a>
        </div>
      </div>
    </div>
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
