import React from 'react';
import { css } from 'glamor';
import { Accent } from '../Accent';
import { theme } from '../../theme';

export const SectionText = ({ accent, accentColor, title, summary }) => (
  <div
    {...css({
      margin: `${theme.space.xxlarge} ${theme.space.large}`,
      [theme.media.medium]: {
        margin: `auto ${theme.space.large}`,
        width: '80%',
        maxWidth: 600,
      },
    })}
  >
    {accent && (
      <>
        <Accent
          {...css({
            position: 'relative',
            top: -3,
            marginRight: theme.space.xsmall,
            fill: accentColor,
          })}
        />
        <span
          {...css({
            fontSize: theme.fontSize.medium,
            fontFamily: 'Copernicus',
          })}
        >
          {accent}
        </span>
      </>
    )}
    {title && (
      <h1
        {...css({
          marginTop: 0,
          fontSize: theme.fontSize.xlarge,
          fontWeight: theme.fontWeight.bold,
        })}
      >
        {title}
      </h1>
    )}
    <div
      {...css({
        lineHeight: 1.4,
        fontSize: theme.fontSize.medium,
        fontFamily: 'Copernicus',
      })}
    >
      {summary}
    </div>
  </div>
);
