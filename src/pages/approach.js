import { css } from 'glamor';
import React from 'react';
import { SectionContainer } from '../components/Section/SectionContainer';
import { SectionText } from '../components/Section/SectionText';
import { StrokeOne } from '../components/Strokes/StrokeOne';
import { Wrapper } from '../components/Wrapper';
import { theme } from '../theme';
import { Nav } from '../components/Nav';

const ApproachPage = () => {
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
                color: theme.color.gray,
                fontSize: theme.fontSize.xxlarge,
                fontFamily: 'Copernicus',
              })}
            >
              Approach
            </h1>
            <Waypoint />
          </div>

          <SectionContainer
            override={css({
              background: theme.color.maroon,
            })}
          >
            <SectionText
              title="Human Motivation"
              summary="Everything starts with building your purpose, promise and point of difference."
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
              title="Human Expression"
              summary="Use your brand’s humanicity to develop authentic visuals and messaging that lead to the strongest customer connections."
            />
          </SectionContainer>
          <SectionContainer
            override={css({
              background: theme.color.gray,
            })}
          >
            <SectionText
              title="Human Engagement"
              summary="The intersection of your brand’s humanicity and digital and social technology creates powerful connections."
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

export default ApproachPage;
