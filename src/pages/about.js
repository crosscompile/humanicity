import { css } from 'glamor';
import React from 'react';
import { SectionContainer } from '../components/Section/SectionContainer';
import { SectionText } from '../components/Section/SectionText';
import { StrokeOne } from '../components/Strokes/StrokeOne';
import { Wrapper } from '../components/Wrapper';
import { theme } from '../theme';
import { Nav } from '../components/Nav';

const AboutPage = () => {
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
                color: theme.color.navy,
                fontSize: theme.fontSize.xxlarge,
                fontFamily: 'Copernicus',
              })}
            >
              About
            </h1>
            <Waypoint />
          </div>

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
              summary={
                <>
                  <p>
                    We are a brand agency obsessed with understanding people.
                  </p>
                  <p>
                    We uncover meaningful connections between clients and
                    customers.
                  </p>
                  <p>
                    By focusing on your clients as humans, you will built more
                    sustainable, profitable relationships.
                  </p>
                </>
              }
            />
          </SectionContainer>
          <SectionContainer
            override={css({
              background: theme.color.maroon,
              flexDirection: 'column-reverse',
              [theme.media.medium]: {
                flexDirection: 'row',
              },
            })}
          >
            <SectionText
              summary={
                <>
                  <p>Are you launching a new brand?</p>
                  <p>
                    Or need a new purpose and story to evolve a current brand?
                  </p>
                  <p>
                    See your customers as people first—that’s what matters and
                    what humanicity helps you achieve.
                  </p>
                  <p>
                    Because this is the key to building amazing business
                    success.
                  </p>
                </>
              }
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

export default AboutPage;
