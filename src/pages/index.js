import React from 'react';
import { graphql } from 'gatsby';
import { css } from 'glamor';
import { theme } from '../theme';
import { Logo } from '../components/Logo';
import { VisuallyHidden } from '../components/VisuallyHidden';
import { SectionImage } from '../components/Section/SectionImage';
import { SectionText } from '../components/Section/SectionText';
import { SectionContainer } from '../components/Section/SectionContainer';

const IndexPage = ({ data: { firstImage, secondImage, thirdImage } }) => (
  <div {...css({ background: theme.color.offWhite })}>
    <div {...css({ position: 'relative' })}>
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
          <Logo {...css({ fill: theme.color.white })} />
          <VisuallyHidden>
            <h1>Humanicity</h1>
          </VisuallyHidden>
        </div>
      </div>
    </div>
    <SectionContainer
      override={css({
        background: theme.color.maroon,
      })}
    >
      <SectionImage
        sizes={firstImage.childImageSharp.sizes}
        imgStyle={{
          objectPosition: '20% center',
        }}
      />
      <SectionText
        accentColor={theme.color.teal}
        accent="Embrace humanicity"
        title="Leverage Your Humanity"
        summary="The belief that leveraging your brand’s humanity results in more sustainable customer relationships."
      />
    </SectionContainer>
    <SectionContainer
      override={css({
        background: theme.color.navy,
        flexDirection: 'column-reverse',
        [theme.media.medium]: {
          flexDirection: 'row',
        },
      })}
    >
      <SectionText
        accentColor={theme.color.maroon}
        accent="Create humanicity"
        title="Uncover Emotions"
        summary="Uncover your customers’ deep emotional motivations for more compelling human expression and engagement."
      />
      <SectionImage sizes={secondImage.childImageSharp.sizes} />
    </SectionContainer>
    <SectionContainer
      override={css({
        background: theme.color.teal,
      })}
    >
      <SectionImage sizes={thirdImage.childImageSharp.sizes} />
      <SectionText
        accentColor={theme.color.navy}
        accent="Our approach"
        title="Motivation. Expression. Engagement."
        summary="Immersive ethnographies that strengthen your purpose and build customer intimacy. Authentic story and empathetic messaging leading stronger customer connections. Your brand’s humanicity engages customers through digital and social technology."
      />
    </SectionContainer>
    <div {...css({ padding: theme.space.xxlarge })} />
  </div>
);

export const query = graphql`
  query IndexQuery {
    firstImage: file(relativePath: { eq: "AdobeStock_33925256.jpeg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
    secondImage: file(relativePath: { eq: "AdobeStock_66406489.jpeg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
    thirdImage: file(relativePath: { eq: "AdobeStock_93912763.jpeg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;

export default IndexPage;
