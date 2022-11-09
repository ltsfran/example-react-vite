import { createGlobalStyle } from 'styled-components'
import WebFonts from './fonts'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'ubuntu-regular', sans-serif;
  }

  html, body {
    width: 100%;
    font-size: 16px;
  }

  ${WebFonts}
`

export default GlobalStyle
