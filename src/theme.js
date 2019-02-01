const color = {
  white: '#fff',
  offWhite: '#F7FBFB',
  darken: 'rgba(0,0,0,.25)',
  black: '#000',
  opaque: 'rgba(255,255,255,.6)',
  blue: '#09f',
  red: '#f44',
  green: 'rgb(70, 178, 117)',
  lightblue: '#8df',
  deepblue: '#05f',
  oil: '#222',
  metal: '#444',
  aluminum: '#666',
  ash: '#888',
  gray: '#aaa',
  platinum: '#bbb',
  silver: '#ccc',
  cloud: '#ddd',
}

const boxShadow = {
  card: `rgba(22, 22, 22, 0.15) 0px 4px 12px`,
  primary: `0 0 0 1px ${color.blue}, 0 0 0 3px rgba(0, 153, 255, .3)`,
  error: `0 0 0 1px ${color.red}, 0 0 0 3px rgba(255, 68, 68, .3)`,
}

const borderRadius = '5px'

const media = {
  small: '@media(min-width: 400px)',
  medium: '@media(min-width: 800px)',
  large: '@media(min-width: 1200px)',
  xlarge: '@media(min-width: 1600px)',
}

const fontSize = {
  root: '14px',
  small: '0.85rem',
  medium: '1rem',
  large: '1.25rem',
  xlarge: '2rem',
  xxlarge: '3rem',
}

const fontWeight = {
  medium: 400,
  bold: 800,
}

const fontFamily =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif, ' +
  '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' // emoji fonts

const lineHeight = 1.3125

const space = {
  xxsmall: '0.25rem',
  xsmall: '0.5rem',
  small: '1rem',
  medium: '1.5rem',
  large: '2rem',
  xlarge: '3rem',
  xxlarge: '4.5rem',
}

const stacking = {
  Modal: 400,
  Toast: 500,
}

export const theme = {
  color,
  borderRadius,
  boxShadow,
  media,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  space,
  stacking,
}
