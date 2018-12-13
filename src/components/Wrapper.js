import React from 'react';
import Helmet from 'react-helmet';
import { css } from 'glamor';
import Waypoint from 'react-waypoint';
import { theme } from '../theme';
import { LogoLetter } from './LogoLetter';
import { StrokeRound } from './Strokes/StrokeRound';
import { Nav } from './Nav';

export class Wrapper extends React.Component {
  state = { navButtonShown: false, navShown: false };

  waypoint = () => (
    <Waypoint
      onEnter={() => this.setState({ navButtonShown: false })}
      onLeave={() => this.setState({ navButtonShown: true })}
    />
  );

  render() {
    const { children } = this.props;
    const { navButtonShown, navShown } = this.state;

    return (
      <>
        <Helmet>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />
        </Helmet>
        <div
          {...css({
            height: '100vh',
            position: navShown ? 'fixed' : 'relative',
            overflow: 'hidden',
            background: theme.color.white,
          })}
        >
          <div
            {...css({
              position: 'fixed',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transform: 'translateX(-50%)',
              zIndex: 300,
              left: '50%',
              top: theme.space.small,
              pointerEvents: navButtonShown ? 'initial' : 'none',
            })}
          >
            <div>
              <button
                onClick={() =>
                  this.setState(({ navShown }) => ({
                    navShown: !navShown,
                  }))
                }
                disabled={!navButtonShown && !navShown}
                {...css({
                  position: 'relative',

                  border: 'none',
                  background: 'none',
                  padding: 0,
                  display: 'flex',
                  justifyContent: 'center',
                  opacity: navButtonShown || navShown ? 100 : 0,
                  cursor: navButtonShown || navShown ? 'pointer' : 'default',
                  transition: 'opacity ease-in-out 200ms',
                  willChange: 'opacity',
                })}
              >
                <StrokeRound
                  {...css({
                    position: 'relative',
                    top: 0,
                    width: 75,
                    [theme.media.medium]: {
                      width: 100,
                    },
                    transition: 'fill ease-in-out 200ms',
                    willChange: 'fill',
                    fill: navShown ? theme.color.black : theme.color.white,
                    ':hover': {
                      fill: navShown ? theme.color.black : theme.color.offWhite,
                    },
                  })}
                />
                <LogoLetter
                  {...css({
                    position: 'absolute',
                    top: '55%',
                    transform: 'translateY(-50%)',
                    width: 45,
                    [theme.media.medium]: {
                      width: 60,
                    },
                    pointerEvents: 'none',
                    transition: 'fill ease-in-out 200ms',
                    willChange: 'fill',
                    fill: navShown ? theme.color.white : theme.color.fuschia,
                  })}
                />
              </button>
            </div>
          </div>
          <div
            {...css({
              position: 'fixed',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transform: 'translateX(-50%)',
              zIndex: 100,
              left: '50%',
              top: 120,
            })}
          >
            <div
              {...css({
                paddingTop: theme.space.medium,
                [theme.media.medium]: {
                  paddingTop: theme.space.large,
                },
                pointerEvents: navShown ? 'initial' : 'none',
              })}
            >
              <Nav />
            </div>
          </div>
          <div
            {...css({
              transform: navShown
                ? 'scale(.9) translateY(410px) perspective(1800px) rotateX(5deg)'
                : 'scale(1)',
              [theme.media.medium]: {
                transform: navShown
                  ? 'scale(.9) translateY(220px) perspective(1800px) rotateX(5deg)'
                  : 'scale(1)',
              },
              transition: 'transform ease-in-out 200ms',
              height: '100vh',
              width: '100vw',
              overflow: 'scroll',
              cursor: navShown ? 'pointer' : 'default',
              position: 'relative',
              zIndex: 200,
              WebkitOverflowScrolling: navShown ? 'auto' : 'touch',
            })}
            onClick={() => this.setState({ navShown: false })}
          >
            {children(this.waypoint)}
          </div>
        </div>
      </>
    );
  }
}
