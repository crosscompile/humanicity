import { css } from 'glamor'
import { theme } from './src/theme'

import 'whatwg-fetch'
import 'normalize.css'
import './src/utils/focusStyles'

css.global('html, body', {
  margin: 0,
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize.root,
  lineHeight: theme.lineHeight.app,
  color: theme.color.black,
})
