import React from 'react';
import { css } from 'glamor';
import { theme } from '../../theme';

export const SectionContainer = props => (
  <div
    {...css(
      {
        display: 'flex',
        flexDirection: 'column',
        [theme.media.medium]: {
          padding: theme.space.medium,
          flexDirection: 'row',
          height: 630,
        },
        color: theme.color.white,
      },
      props.override
    )}
  >
    {props.children}
  </div>
);
