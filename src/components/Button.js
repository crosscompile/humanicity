import React from 'react'
import { theme } from '../theme'

export const Button = props => (
  <button
    css={{
      fontFamily: theme.fontFamily,
      boxShadow: `0 4px 8px rgba(22, 22, 22, .2)`,
      borderColor: 'transparent',
      color: theme.color.white,
      background: theme.color.black,
      padding: `${theme.space.xsmall} ${theme.space.medium}`,
      borderRadius: 6,
      display: 'block',
      fontWeight: 'bold',
      fontSize: theme.fontSize.medium,
      lineHeight: 'normal',
      borderWidth: 2,
      borderStyle: 'solid',
      transition: 'all 100ms ease-out',
      textAlign: 'center',
      cursor: 'pointer',
      '&:visited': {
        color: '#fff',
      },
      '&:disabled': {
        boxShadow: 'none',
        background: theme.color.black,
        opacity: 0.25,
        cursor: 'default',
        '&:hover': {
          transform: 'none',
        },
      },
    }}
    {...props}
  />
)
