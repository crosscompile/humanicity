import React from 'react';
import { Link } from '@reach/router';
import { Accent } from './Accent';
import { css } from 'glamor';
import { theme } from '../theme';
import { StrokeOne } from './Strokes/StrokeOne';
import { StrokeTwo } from './Strokes/StrokeTwo';
import { StrokeThree } from './Strokes/StrokeThree';
import { StrokeFour } from './Strokes/StrokeFour';

export const Nav = () => (
  <div
    {...css({
      display: 'flex',
      flexDirection: 'column',
      [theme.media.medium]: {
        flexDirection: 'row',
      },
      alignItems: 'center',
      justifyContent: 'center',
    })}
  >
    <div
      {...css({
        position: 'relative',
        height: 40,
        width: 160,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      <StrokeOne
        {...css({
          position: 'absolute',
          fill: theme.color.offWhite,
          width: 160,
        })}
      />
      <Link
        to="/"
        {...css({
          position: 'relative',
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
          Home
        </span>
      </Link>
    </div>
    <div
      {...css({
        position: 'relative',
        height: 40,
        width: 160,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: theme.space.medium,
        [theme.media.medium]: {
          marginTop: 0,
          marginLeft: theme.space.medium,
        },
      })}
    >
      <StrokeTwo
        {...css({
          position: 'absolute',
          fill: theme.color.offWhite,
          width: 160,
        })}
      />
      <Link
        to="/about"
        {...css({
          position: 'relative',
          textDecoration: 'none',
          color: 'initial',
        })}
      >
        <Accent
          {...css({
            position: 'relative',
            top: -3,
            marginRight: theme.space.xsmall,
            fill: theme.color.navy,
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
    </div>
    <div
      {...css({
        position: 'relative',
        height: 40,
        width: 160,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: theme.space.medium,
        [theme.media.medium]: {
          marginTop: 0,
          marginLeft: theme.space.medium,
        },
      })}
    >
      <StrokeFour
        {...css({
          position: 'absolute',
          fill: theme.color.offWhite,
          width: 160,
        })}
      />
      <Link
        to="/approach"
        {...css({
          position: 'relative',
          textDecoration: 'none',
          color: 'initial',
        })}
      >
        <Accent
          {...css({
            position: 'relative',
            top: -3,
            marginRight: theme.space.xsmall,
            fill: theme.color.gray,
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
    </div>
    <div
      {...css({
        position: 'relative',
        height: 40,
        width: 160,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: theme.space.medium,
        [theme.media.medium]: {
          marginTop: 0,
          marginLeft: theme.space.medium,
        },
      })}
    >
      <StrokeThree
        {...css({
          position: 'absolute',
          fill: theme.color.offWhite,
          width: 160,
        })}
      />
      <Link
        to="/contact"
        {...css({
          position: 'relative',
          textDecoration: 'none',
          color: 'initial',
        })}
      >
        <Accent
          {...css({
            position: 'relative',
            top: -3,
            marginRight: theme.space.xsmall,
            fill: theme.color.black,
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
);
