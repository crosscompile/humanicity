import { graphql } from 'gatsby';
import { css } from 'glamor';
import React from 'react';
import { Logo } from '../components/Logo';
import { SectionContainer } from '../components/Section/SectionContainer';
import { SectionImage } from '../components/Section/SectionImage';
import { SectionText } from '../components/Section/SectionText';
import { StrokeOne } from '../components/Strokes/StrokeOne';
import { VisuallyHidden } from '../components/VisuallyHidden';
import { Wrapper } from '../components/Wrapper';
import { theme } from '../theme';
import { Nav } from '../components/Nav';

const IndexPage = ({ data: { firstImage, secondImage, thirdImage } }) => {
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
              height: '50vh',
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
            <Logo
              {...css({
                fill: theme.color.fuschia,
                width: '80%',
                maxWidth: 700,
                height: 'auto',
                position: 'absolute',
              })}
            />
            <VisuallyHidden>
              <h1>Humanicity</h1>
            </VisuallyHidden>
            <Waypoint />
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
              accentColor={theme.color.gray}
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
              background: theme.color.gray,
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
};

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
