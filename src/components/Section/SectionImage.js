import React from 'react';
import Img from 'gatsby-image';
import { css } from 'glamor';
import { theme } from '../../theme';

export const SectionImage = props => (
  <Img
    alt=""
    outerWrapperClassName={css({
      width: '100%',
    })}
    css={{
      height: 400,
      [theme.media.medium]: {
        height: '100%',
        width: '100%',
      },
    }}
    {...props}
  />
);
