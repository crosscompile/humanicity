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

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const structuredData = JSON.stringify({
  '@context': 'http://schema.org',
  '@type': 'Organization',
  name: 'Humanicity',
  url: 'http://www.humanicity.net',
})

const labelStyle = {
  color: '#a11d4c',
  fontSize: '1.1rem',
  marginBottom: '.5rem',
  letterSpacing: '.025em',
}

const inputStyle = {
  display: 'block',
  color: 'white',
  border: 0,
  borderBottom: `1px solid white`,
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

    setTimeout(() => this.setState({ logoAnimated: true }), 1200)
  }
  handleRest = () => {
    setTimeout(() => this.setState({ taglineAnimated: true }), 2100)
  }

  handleSubmit = values => {
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encode({ 'form-name': 'contact', ...values }),
    }).then(() => this.setState({ contactSubmitted: true }))
  }

  render() {
    const {
      data: { splash },
    } = this.props
    const {
      showLogo,
      logoAnimated,
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
            minHeight: '100%',
            fontWeight: 200,
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
              padding: '0 1rem 5rem 1rem',
              color: 'white',
            }}
          >
            {!contactSubmitted ? (
              <>
                <Spring
                  native
                  from={{ opacity: 0, transform: 'translateY(20px)' }}
                  to={{
                    opacity: logoAnimated ? 1 : 0,
                    transform: logoAnimated
                      ? 'translateY(0px)'
                      : 'translateY(20px)',
                  }}
                  onRest={this.handleRest}
                >
                  {style => (
                    <animated.p
                      style={style}
                      css={{
                        color: '#a11d4c',
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
                        <Form
                          name="contact"
                          method="post"
                          data-netlify="true"
                          data-netlify-honeypot="bot-field"
                        >
                          <input
                            type="hidden"
                            name="form-name"
                            value="contact"
                          />
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
                                color: 'white',
                                cursor: 'pointer',
                                border: '1px solid #a11d4c',
                                borderRadius: 3,
                                transition: 'all 100ms ease-in',
                              }}
                            >
                              Submit
                            </button>
                          </div>
                        </Form>
                      </Formik>
                    </animated.div>
                  )}
                </Trail>
              </>
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
                      fontSize: '2rem',
                      margin: '3rem 0',
                    }}
                  >
                    Thank you! We will be in touch.
                  </animated.p>
                )}
              </Spring>
            )}
          </div>
          <div
            css={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: -1,
            }}
          >
            <Img
              sizes={splash.childImageSharp.sizes}
              alt=""
              imgStyle={{
                objectFit: 'cover',
                objectPosition: '50% 50%',
                filter: 'brightness(30%)',
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
