import React from 'react'
import { css } from 'glamor'
import Img from 'gatsby-image'
import Vivus from 'vivus'
import { HumanicityLogoMaroon } from '../components/Logos/Maroon'

const __SERVER__ = typeof window === 'undefined'

class IndexPage extends React.Component {
  state = {
    logoDrawn: false,
    showLogo: false,
  }

  componentDidMount() {
    this.setState({ showLogo: true })

    new Vivus(
      'logo',
      {
        duration: 100,
        animTimingFunction: Vivus.EASE_IN,
      },
      () => this.setState({ logoDrawn: true })
    )
  }

  render() {
    const {
      data: { splash },
    } = this.props
    const { showLogo, logoDrawn } = this.state

    return (
      <>
        <div
          css={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <HumanicityLogoMaroon
            id="logo"
            css={{
              ...(showLogo ? {} : { display: 'none' }),
              width: '90%',
              height: 'auto',
              maxWidth: 700,
              transition: 'all 1s',
            }}
            fillOpacity={logoDrawn ? 1 : 0}
            stroke="#a11d4c"
            strokeWidth={logoDrawn ? 0 : 2}
          />
        </div>
        <div
          css={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <Img
            sizes={splash.childImageSharp.sizes}
            alt=""
            imgStyle={{
              objectFit: 'cover',
              objectPosition: '25% 50%',
              filter: 'brightness(40%)',
            }}
            outerWrapperClassName={css({ height: '100%' })}
            css={{
              height: '100%',
            }}
          />
        </div>
      </>
    )
  }
}

export const query = graphql`
  query IndexQuery {
    splash: file(
      relativePath: { eq: "christopher-campbell-28567-unsplash.jpg" }
    ) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`

export default IndexPage
