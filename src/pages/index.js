import React from 'react'
import { css } from 'glamor'
import Img from 'gatsby-image'
import Vivus from 'vivus'
import { Formik, Form, Field } from 'formik'
import { Helmet } from 'react-helmet'
import { Trail, Spring, animated } from 'react-spring'
import { HumanicityLogoMaroon } from '../components/Logos/Maroon'

css.global('html, body, #___gatsby, #___gatsby > div', {
  fontFamily:
    '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
  boxSizing: 'border-box',
  height: '100%',
})

css.global('*', {
  boxSizing: 'inherit',
})

const structuredData = JSON.stringify({
  '@context': 'http://schema.org',
  '@type': 'Organization',
  name: 'Humanicity',
  url: 'http://www.humanicity.net',
})

const labelStyle = {
  fontSize: '1.1rem',
  marginBottom: '.5rem',
  letterSpacing: '.025em',
}

const inputStyle = {
  display: 'block',
  border: 0,
  color: '#fff',
  borderBottom: `1px solid #fff`,
  borderRadius: 0,
  outline: 0,
  padding: '.5rem 0',
  background: 'transparent',
  fontSize: '1.1rem',
  lineHeight: '1.5rem',
  width: '100%',
}

class IndexPage extends React.Component {
  state = {
    logoAnimated: false,
    logoFilled: false,
    taglineAnimated: false,
    showLogo: false,
    contactSubmitted: false,
  }

  componentDidMount() {
    this.setState({ showLogo: true })

    new Vivus('logo', {
      duration: 100,
      animTimingFunction: Vivus.EASE_IN,
    })

    setTimeout(() => this.setState({ logoAnimated: true }), 670)
    setTimeout(() => this.setState({ logoFilled: true }), 2000)
  }

  handleRest = () => {
    setTimeout(() => this.setState({ taglineAnimated: true }), 2200)
  }

  handleSubmit = values => {
    fetch('https://api.formik.io/v1/form/5bd38b23e6bed80001142e26/submit', {
      method: 'POST',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify(values),
    }).then(() => this.setState({ contactSubmitted: true }))
  }

  render() {
    const {
      data: { splash },
    } = this.props
    const {
      showLogo,
      logoAnimated,
      logoFilled,
      taglineAnimated,
      contactSubmitted,
    } = this.state

    return (
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
            position: 'relative',
            height: '100%',
            width: '100%',
            fontWeight: 200,
            margin: 0,
            '@media(min-width: 700px)': {
              width: '70%',
              minWidth: 700,
              margin: '0 0 0 auto',
            },
          }}
        >
          <div
            css={{
              width: '100%',
              maxWidth: 700,
              padding: '5rem 0 0 0',
              margin: '0 auto',
              color: 'white',
            }}
          >
            <HumanicityLogoMaroon
              id="logo"
              role="img"
              css={{
                ...(showLogo ? {} : { opacity: 0 }),
                width: '100%',
                height: 'auto',
                transition: 'all 1s',
              }}
              fillOpacity={logoAnimated ? 1 : 0}
              strokeWidth={logoAnimated ? 0 : 2}
              stroke="#a11d4c"
            />
          </div>
          <div
            css={{
              width: '100%',
              maxWidth: 555,
              margin: '0 auto',
              padding: '0 1rem 4rem 1rem',
              color: 'white',
            }}
          >
            <>
              <Spring
                native
                from={{ opacity: 0, transform: 'translateY(20px)' }}
                to={{
                  opacity: logoFilled ? 1 : 0,
                  transform: logoFilled
                    ? 'translateY(0px)'
                    : 'translateY(20px)',
                }}
                onRest={this.handleRest}
              >
                {style => (
                  <animated.p
                    style={style}
                    css={{
                      textAlign: 'center',
                      margin: '0 auto 5rem auto',
                      fontSize: '1.8rem',
                      '@media(min-width: 555px)': {
                        fontSize: '2.3rem',
                      },
                    }}
                  >
                    Because customers are people first.
                  </animated.p>
                )}
              </Spring>
              {!contactSubmitted ? (
                <Trail
                  native
                  from={{ opacity: 0, transform: 'translateY(20px)' }}
                  to={{
                    opacity: taglineAnimated ? 1 : 0,
                    transform: taglineAnimated
                      ? 'translateY(0px)'
                      : 'translateY(20px)',
                  }}
                  keys={['tagline', 'directions', 'form']}
                >
                  {style => (
                    <animated.p
                      style={style}
                      css={{
                        fontSize: '1.1rem',
                        marginBottom: '3rem',
                        lineHeight: '1.5rem',
                      }}
                    >
                      While we put the finishing touches on our website, send us
                      a hello to learn more about our Human Immersion branding
                      approach.
                    </animated.p>
                  )}
                  {style => (
                    <animated.div style={style}>
                      <Formik
                        initialValues={{ name: '', email: '', message: '' }}
                        onSubmit={this.handleSubmit}
                      >
                        <Form>
                          <Field
                            id="name"
                            name="name"
                            render={({ field }) => (
                              <p css={{ marginBottom: '2rem' }}>
                                <label htmlFor="name" css={labelStyle}>
                                  Name
                                </label>
                                <input
                                  type="text"
                                  required={true}
                                  css={inputStyle}
                                  {...field}
                                />
                              </p>
                            )}
                          />

                          <Field
                            id="email"
                            name="email"
                            render={({ field, form }) => (
                              <p css={{ marginBottom: '2rem' }}>
                                <label htmlFor="email" css={labelStyle}>
                                  Email
                                </label>
                                <input
                                  type="email"
                                  required={true}
                                  css={inputStyle}
                                  {...field}
                                />
                              </p>
                            )}
                          />

                          <Field
                            id="message"
                            name="message"
                            render={({ field }) => (
                              <p css={{ marginBottom: '2rem' }}>
                                <label htmlFor="message" css={labelStyle}>
                                  Message
                                </label>
                                <textarea css={inputStyle} {...field} />
                              </p>
                            )}
                          />
                          <div
                            css={{
                              display: 'flex',
                              justifyContent: 'flex-end',
                            }}
                          >
                            <button
                              type="submit"
                              css={{
                                background: '#a11d4c',
                                padding: '.6rem 1.5rem',
                                color: '#fff',
                                cursor: 'pointer',
                                border: '1px solid #a11d4c',
                                borderRadius: 3,
                                transition: 'all 100ms ease-in',
                              }}
                            >
                              Send
                            </button>
                          </div>
                        </Form>
                      </Formik>
                    </animated.div>
                  )}
                </Trail>
              ) : (
                <Spring
                  native
                  from={{ opacity: 0, transform: 'translateY(20px)' }}
                  to={{ opacity: 1, transform: 'translateY(0px)' }}
                >
                  {styles => (
                    <animated.p
                      style={styles}
                      css={{
                        textAlign: 'center',
                        color: '#a11d4c',
                        marginTop: '8em',
                        fontSize: '1.8rem',
                        '@media(min-width: 555px)': {
                          fontSize: '2.3rem',
                        },
                      }}
                    >
                      Thank you! We will be in touch.
                    </animated.p>
                  )}
                </Spring>
              )}
            </>
          </div>
          <div
            css={{
              position: 'fixed',
              zIndex: -1,
              top: 0,
              left: 0,
              right: 0,
              height: '100vh',
              // yesssss the hack works
              transition: 'height 999999s',
              '& img': {
                filter: 'brightness(40%)',
              },
              '@media(min-width: 1000px)': {
                '& img': {
                  filter: 'brightness(80%)',
                },
              },
            }}
          >
            <Img
              sizes={splash.childImageSharp.sizes}
              alt=""
              imgStyle={{
                position: 'absolute',
                top: '0',
                left: '-50%',
                transition: 'opacity 0.5s ease 0s',
                width: '150%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: '20% 50%',
              }}
              outerWrapperClassName={css({ height: '100%' })}
              css={{
                height: '100%',
              }}
            />
          </div>
        </div>
      </>
    )
  }
}

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
