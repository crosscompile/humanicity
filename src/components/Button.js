import React from 'react'
import { css } from 'glamor'
import { theme } from '../theme'

const buttonStyles = css({
  fontFamily: theme.fontFamily,
  boxShadow: `0 4px 8px rgba(22, 22, 22, .2)`,
  borderColor: 'transparent',
  color: theme.color.white,
  background: theme.color.maroon,
  padding: `${theme.space.xsmall} ${theme.space.medium}`,
  borderRadius: 6,
  display: 'block',
  fontWeight: 'bold',
  fontSize: theme.fontSize.large,
  lineHeight: 'normal',
  borderWidth: 2,
  borderStyle: 'solid',
  transition: 'all 100ms ease-out',
  textAlign: 'center',
  textDecoration: 'none',
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
})

export const Button = props => <button css={buttonStyles} {...props} />

export const AnchorButton = props => <a css={buttonStyles} {...props} />
