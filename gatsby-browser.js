import { css } from 'glamor';
import { theme } from './src/theme';
import copernicus from './src/fonts/GalaxieCopernicus-Book.woff';

import 'whatwg-fetch';
import 'normalize.css';
import './src/utils/focusStyles';

css.global('body', {
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize.root,
});

css.global('@font-face', { fontFamily: 'Copernicus', src: copernicus });
