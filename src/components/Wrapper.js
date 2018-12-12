import React from 'react';
import { css } from 'glamor';
import Waypoint from 'react-waypoint';
import Link from 'gatsby-link';
import { theme } from '../theme';
import { Logo } from './Logo';
import { LogoLetter } from './LogoLetter';
import { VisuallyHidden } from './VisuallyHidden';
import { Stroke } from './Stroke';
import { Accent } from './Accent';

export class Wrapper extends React.Component {
  state = { navButtonShown: false, navShown: false };

  render() {
    const { children } = this.props;
    const { navButtonShown, navShown } = this.state;
    return (
      <>
        <div
          {...css({
            position: 'fixed',
            zIndex: 200,
            left: '50%',
            transform: 'translateX(-50%)',
            top: theme.space.small,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          })}
        >
          <button
            onClick={() =>
              this.setState(({ navShown }) => ({
                navShown: !navShown,
              }))
            }
            disabled={!navButtonShown}
            {...css({
              border: 'none',
              background: 'none',
              padding: 0,
              display: 'flex',
              justifyContent: 'center',
              opacity: navButtonShown ? 100 : 0,
              cursor: navButtonShown ? 'pointer' : 'default',
              transition: 'opacity ease-in-out 200ms',
            })}
          >
            <LogoLetter
              {...css({
                width: 60,
                height: 60,
                fill: theme.color.white,
                background: theme.color.black,
                padding: theme.space.small,
              })}
            />
          </button>

          <div
            {...css({
              display: 'flex',
              paddingTop: theme.space.large,
              opacity: navShown ? 1 : 0,
              transition: 'opacity ease-in-out 200ms',
              pointerEvents: navShown ? 'initial' : 'none',
            })}
          >
            <Link
              to="/about"
              {...css({
                textDecoration: 'none',
                color: 'initial',
              })}
            >
              <Accent
                {...css({
                  position: 'relative',
                  top: -3,
                  marginRight: theme.space.xsmall,
                  fill: theme.color.fuschia,
                })}
              />
              <span
                {...css({
                  fontSize: theme.fontSize.medium,
                  fontFamily: 'Copernicus',
                })}
              >
                About
              </span>
            </Link>
            <Link
              to="/approach"
              {...css({
                marginLeft: theme.space.medium,
                textDecoration: 'none',
                color: 'initial',
              })}
            >
              <Accent
                {...css({
                  position: 'relative',
                  top: -3,
                  marginRight: theme.space.xsmall,
                  fill: theme.color.fuschia,
                })}
              />
              <span
                {...css({
                  fontSize: theme.fontSize.medium,
                  fontFamily: 'Copernicus',
                })}
              >
                Approach
              </span>
            </Link>
            <Link
              to="/contact"
              {...css({
                marginLeft: theme.space.medium,
                textDecoration: 'none',
                color: 'initial',
              })}
            >
              <Accent
                {...css({
                  position: 'relative',
                  top: -3,
                  marginRight: theme.space.xsmall,
                  fill: theme.color.fuschia,
                })}
              />
              <span
                {...css({
                  fontSize: theme.fontSize.medium,
                  fontFamily: 'Copernicus',
                })}
              >
                Contact
              </span>
            </Link>
          </div>
        </div>
        <div
          {...css({
            transform: navShown ? 'scale(.9) translateY(30%)' : 'scale(1)',
            transition: 'transform ease-in-out 200ms',
            height: '100vh',
            width: '100vw',
            overflow: 'scroll',
            position: 'relative',
          })}
        >
          <div
            {...css({
              position: 'relative',
              background: theme.color.black,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100vh',
              width: '100vw',
            })}
          >
            <Stroke
              {...css({
                position: 'absolute',
                width: '120%',
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
            <Waypoint
              onEnter={() => this.setState({ navButtonShown: false })}
              onLeave={() => this.setState({ navButtonShown: true })}
            />
          </div>
          {children}
        </div>
      </>
    );
  }
}
