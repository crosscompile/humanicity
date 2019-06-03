import { $ } from 'glamor'

const zeroFocusOutline = $('& *:focus', { outline: 0 }).toString()

function addFocusOutline() {
  const html = document.querySelector('html')
  if (html) {
    html.classList.remove(zeroFocusOutline)
  }
}

function removeFocusOutline() {
  const html = document.querySelector('html')
  if (html) {
    html.classList.add(zeroFocusOutline)
  }
}

removeFocusOutline()

// add focus outline when tab key is used
window.addEventListener('keyup', ({ keyCode }) => {
  if (keyCode === 9) {
    addFocusOutline()
  }
})

// remove focus outline when mouse used
window.addEventListener('click', () => {
  removeFocusOutline()
})
