const color = {
  black: '#111111',
  white: '#ffffff',
  offWhite: '#DCEAEF',
  maroon: '#601736',
  fuschia: '#a01e4b',
  navy: '#131F2A',
  teal: '#1b465a',
  gray: '#586B78',
  blue: '#09f',
  red: '#f44',
  green: 'rgb(70, 178, 117)',
};

const boxShadow = {
  card: `rgba(22, 22, 22, 0.15) 0px 4px 12px`,
  primary: `0 0 0 1px ${color.blue}, 0 0 0 3px rgba(0, 153, 255, .3)`,
  error: `0 0 0 1px ${color.red}, 0 0 0 3px rgba(255, 68, 68, .3)`,
};

const borderRadius = 5;

const media = {
  small: '@media(min-width: 400px)',
  medium: '@media(min-width: 800px)',
  large: '@media(min-width: 1200px)',
  xlarge: '@media(min-width: 1600px)',
};

const fontSize = {
  root: '14px',
  xsmall: '0.85rem',
  small: '1rem',
  medium: '1.25rem',
  large: '2rem',
  xlarge: '2.5rem',
  xxlarge: '3rem',
};

const fontWeight = {
  medium: 400,
  bold: 800,
};

const fontFamily =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif, ' +
  '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'; // emoji fonts

const lineHeight = 1.3125;

const space = {
  xxsmall: '0.25rem',
  xsmall: '0.5rem',
  small: '1rem',
  medium: '1.5rem',
  large: '2rem',
  xlarge: '3rem',
  xxlarge: '4.5rem',
};

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
};
