import { css } from 'glamor'
import 'whatwg-fetch'
import 'normalize.css'

css.global('html, body, #___gatsby, #___gatsby > div', {
  fontFamily:
    '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
  boxSizing: 'border-box',
  height: '100%',
})

css.global('*', {
  boxSizing: 'inherit',
})
