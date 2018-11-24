import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from 'glamor';
import { theme } from '../theme';
import { HumanicityLogoWhite } from '../components/Logos/White';
import { VisuallyHidden } from '../components/VisuallyHidden';
import { AccentMaroon } from '../components/icons/AccentMaroon';
import { AccentNavy } from '../components/icons/AccentNavy';
import { AccentTeal } from '../components/icons/AccentTeal';

const IndexPage = ({ data: { splash } }) => (
  <div>
    <div {...css({ position: 'relative' })}>
      <Img
        sizes={splash.childImageSharp.sizes}
        alt=""
        imgStyle={{
          objectPosition: 'center 20%',
        }}
        outerWrapperClassName={css({
          position: 'absolute !important',
          height: '100%',
          width: '100%',
        })}
        css={{
          position: 'absolute !important',
          height: '100%',
          width: '100%',
        }}
      />
      <div
        {...css({
          position: 'relative',
          padding: `${theme.space.xxlarge} ${theme.space.small}`,
        })}
      >
        <div
          {...css({
            background: theme.color.black,
            margin: '0 auto',
            padding: theme.space.xsmall,
            maxWidth: 450,
          })}
        >
          <HumanicityLogoWhite />
          <VisuallyHidden>
            <h1>Humanicity</h1>
          </VisuallyHidden>
        </div>
      </div>
    </div>
    <div
      {...css({
        background: theme.color.maroon,
      })}
    >
      <div
        {...css({
          color: theme.color.white,
          margin: '0 auto',
          padding: `calc(${theme.space.xxlarge} + ${theme.space.large}) ${
            theme.space.small
          }`,
          maxWidth: 800,
        })}
      >
        <span
          {...css({
            display: 'flex',
            alignItems: 'center',
            fontSize: theme.fontSize.medium,
          })}
        >
          <AccentTeal
            {...css({
              marginRight: theme.space.xsmall,
            })}
          />
          Embrace humanicity
        </span>
        <h1
          {...css({
            marginTop: 0,
            fontSize: theme.fontSize.xlarge,
            fontWeight: theme.fontWeight.bold,
          })}
        >
          Leverage Your Humanity
        </h1>
        <p {...css({ lineHeight: 1.4, fontSize: theme.fontSize.medium })}>
          The belief that leveraging your brand’s humanity results in more
          sustainable customer relationships.
        </p>
      </div>
    </div>
    <div
      {...css({
        background: theme.color.navy,
      })}
    >
      <div
        {...css({
          color: theme.color.white,
          margin: '0 auto',
          padding: `calc(${theme.space.xxlarge} + ${theme.space.large}) ${
            theme.space.small
          }`,
          maxWidth: 800,
        })}
      >
        <span
          {...css({
            display: 'flex',
            alignItems: 'center',
            fontSize: theme.fontSize.medium,
          })}
        >
          <AccentMaroon
            {...css({
              marginRight: theme.space.xsmall,
            })}
          />
          Create Humanicity
        </span>
        <h1
          {...css({
            marginTop: 0,
            fontSize: theme.fontSize.xlarge,
            fontWeight: theme.fontWeight.bold,
          })}
        >
          Uncover Emotions
        </h1>
        <p {...css({ lineHeight: 1.4, fontSize: theme.fontSize.medium })}>
          Uncover your customers’ deep emotional motivations for more compelling
          human expression and engagement.
        </p>
      </div>
    </div>
    <div
      {...css({
        background: theme.color.teal,
      })}
    >
      <div
        {...css({
          color: theme.color.white,
          margin: '0 auto',
          padding: `calc(${theme.space.xxlarge} + ${theme.space.large}) ${
            theme.space.small
          }`,
          maxWidth: 800,
        })}
      >
        <div>
          <span
            {...css({
              display: 'flex',
              alignItems: 'center',
              fontSize: theme.fontSize.medium,
            })}
          >
            <AccentNavy
              {...css({
                marginRight: theme.space.xsmall,
              })}
            />
            Our approach
          </span>
        </div>
        <h1
          {...css({
            marginTop: 0,
            fontSize: theme.fontSize.xlarge,
            fontWeight: theme.fontWeight.bold,
          })}
        >
          Motivation. Expression. Engagement.
        </h1>
        <p {...css({ lineHeight: 1.4, fontSize: theme.fontSize.medium })}>
          Immersive ethnographies that strengthen your purpose and build
          customer intimacy. Authentic story and empathetic messaging leading
          stronger customer connections. Your brand’s humanicity engages
          customers through digital and social technology.
        </p>
      </div>
    </div>
    <div
      {...css({ background: theme.color.black, padding: theme.space.xxlarge })}
    />
  </div>
);

export const query = graphql`
  query IndexQuery {
    splash: file(relativePath: { eq: "AdobeStock_33925256.jpeg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;

export default IndexPage;
