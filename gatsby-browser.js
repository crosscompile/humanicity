import { css } from 'glamor';
import { theme } from './src/theme';

import 'whatwg-fetch';
import 'normalize.css';

css.global('body', {
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize.root,
});
