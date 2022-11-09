import { css } from 'styled-components'

const cdsPath = import.meta.env.VITE_CDS_PATH ?? ''

const WebFonts = css`
  @font-face {
    font-family: ubuntu-light;
    src:
      url("${cdsPath}fonts/Ubuntu/Ubuntu-Light.woff2") format("woff2"),
      url("${cdsPath}fonts/Ubuntu/Ubuntu-Light.woff") format("woff");
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }
  @font-face {
    font-family: ubuntu-regular;
    src:
      url("${cdsPath}fonts/Ubuntu/Ubuntu-Regular.woff2") format("woff2"),
      url("${cdsPath}fonts/Ubuntu/Ubuntu-Regular.woff") format("woff");
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }
  @font-face {
    font-family: ubuntu-medium;
    src:
      url("${cdsPath}fonts/Ubuntu/Ubuntu-Medium.woff2") format("woff2"),
      url("${cdsPath}fonts/Ubuntu/Ubuntu-Medium.woff") format("woff");
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }
  @font-face {
    font-family: ubuntu-bold;
    src:
      url("${cdsPath}fonts/Ubuntu/Ubuntu-Bold.woff2") format("woff2"),
      url("${cdsPath}fonts/Ubuntu/Ubuntu-Bold.woff") format("woff");
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }
  @font-face {
    font-family: evogria-regular;
    src:
      url("${cdsPath}fonts/Evogria/Evogria-Regular.woff2") format("woff2"),
      url("${cdsPath}fonts/Evogria/Evogria-Regular.woff") format("woff");
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }
  @font-face {
    font-family: evogria-italic;
    src:
      url("${cdsPath}fonts/Evogria/Evogria-Italic.woff2") format("woff2"),
      url("${cdsPath}fonts/Evogria/Evogria-Italic.woff") format("woff");
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }
`

export default WebFonts
