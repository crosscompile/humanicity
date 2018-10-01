import React from 'react'
import { css } from 'glamor'
import Img from 'gatsby-image'
import Vivus from 'vivus'
import { Formik, Form, Field } from 'formik'
import { Spring, animated } from 'react-spring'
import { HumanicityLogoMaroon } from '../components/Logos/Maroon'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const labelStyle = {
  color: '#a11d4c',
  textTransform: 'uppercase',
  fontSize: '1rem',
  fontWeight: 500,
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

const AnimateAfter = ({ condition, from, to, children }) => {
  if (!condition) {
    return <div style={from}>{children}</div>
  }
  return (
    <Spring native from={from} to={to}>
      {style => <animated.div style={style}>{children}</animated.div>}
    </Spring>
  )
}

class IndexPage extends React.Component {
  state = {
    logoDrawn: false,
    showLogo: false,
    contactSubmitted: false,
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
    const { showLogo, logoDrawn, contactSubmitted } = this.state

    return (
      <div css={{ position: 'relative', minHeight: '100%' }}>
        <div
          css={{
            width: '100%',
            maxWidth: 700,
            padding: '5rem 1rem',
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
              maxWidth: 700,
              transition: 'all 1s',
            }}
            fillOpacity={logoDrawn ? 1 : 0}
            stroke="#a11d4c"
            strokeWidth={logoDrawn ? 0 : 2}
          />
          {contactSubmitted ? (
            <Spring
              native
              from={{ opacity: 0, transform: 'translateY(20px)' }}
              to={{ opacity: 1, transform: 'translateY(0px)' }}
            >
              {styles => (
                <animated.div style={styles}>
                  <p
                    css={{
                      textAlign: 'center',
                      color: '#a11d4c',
                      fontSize: '2rem',
                      fontWeight: 600,
                      margin: '3rem 0',
                    }}
                  >
                    Thank you! We will be in touch.
                  </p>
                </animated.div>
              )}
            </Spring>
          ) : (
            <AnimateAfter
              condition={logoDrawn}
              from={{ opacity: 0, transform: 'translateY(20px)' }}
              to={{ opacity: 1, transform: 'translateY(0px)' }}
            >
              <p
                css={{
                  color: '#a11d4c',
                  fontSize: '2rem',
                  fontWeight: 600,
                  marginBottom: '3rem',
                }}
              >
                Because customers are people first.
              </p>
              <p
                css={{
                  fontSize: '1.1rem',
                  marginBottom: '3rem',
                  lineHeight: '1.5rem',
                }}
              >
                While we put the finishing touches on our website, send us a
                hello to learn more about our Human Immersion branding approach.
              </p>
              <div>
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
                    <input type="hidden" name="form-name" value="contact" />
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
                    <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <button
                        type="submit"
                        css={{
                          background: 'transparent',
                          padding: '.6rem 1.5rem',
                          color: '#a11d4c',
                          cursor: 'pointer',
                          border: '1px solid #a11d4c',
                          borderRadius: 3,
                          fontWeight: 600,
                          transition: 'all 100ms ease-in',
                          ':hover': {
                            color: 'white',
                            background: '#a11d4c',
                          },
                        }}
                      >
                        Send
                      </button>
                    </div>
                  </Form>
                </Formik>
              </div>
            </AnimateAfter>
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
