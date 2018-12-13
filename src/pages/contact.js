import { css } from 'glamor';
import React from 'react';
import { SectionContainer } from '../components/Section/SectionContainer';
import { StrokeOne } from '../components/Strokes/StrokeOne';
import { Wrapper } from '../components/Wrapper';
import { theme } from '../theme';
import { Nav } from '../components/Nav';
import { Formik, Form, Field } from 'formik';

class ContactPage extends React.Component {
  handleSubmit = values => {
    fetch('https://api.formik.io/v1/form/5bd38b23e6bed80001142e26/submit', {
      method: 'POST',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify(values),
    }).then(() => this.setState({ contactSubmitted: true }));
  };

  render() {
    return (
      <Wrapper>
        {Waypoint => (
          <>
            <div
              {...css({
                position: 'relative',
                background: theme.color.offWhite,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 300,
                width: '100vw',
                overflow: 'hidden',
              })}
            >
              <StrokeOne
                {...css({
                  position: 'absolute',
                  height: '120%',
                  fill: theme.color.white,
                })}
              />
              <h1
                {...css({
                  margin: 0,
                  position: 'absolute',
                  color: theme.color.black,
                  fontSize: theme.fontSize.xxlarge,
                  fontFamily: 'Copernicus',
                })}
              >
                Contact
              </h1>
              <Waypoint />
            </div>

            <SectionContainer
              override={css({
                background: theme.color.navy,
              })}
            >
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
                        <label htmlFor="name">Name</label>
                        <input type="text" required={true} {...field} />
                      </p>
                    )}
                  />

                  <Field
                    id="email"
                    name="email"
                    render={({ field, form }) => (
                      <p css={{ marginBottom: '2rem' }}>
                        <label htmlFor="email">Email</label>
                        <input type="email" required={true} {...field} />
                      </p>
                    )}
                  />

                  <Field
                    id="message"
                    name="message"
                    render={({ field }) => (
                      <p css={{ marginBottom: '2rem' }}>
                        <label htmlFor="message">Message</label>
                        <textarea {...field} />
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
            </SectionContainer>
            <div
              {...css({
                display: 'flex',
                justifyContent: 'center',
                padding: theme.space.xxlarge,
                background: theme.color.white,
              })}
            >
              <Nav />
            </div>
          </>
        )}
      </Wrapper>
    );
  }
}

export default ContactPage;
