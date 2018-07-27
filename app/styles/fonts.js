// eslint-disable
import { injectGlobal } from 'styled-components';
import FFKievit from 'fonts/FFKievitWebPro.woff2';
/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
  font-family: "FFKievit";
  font-weight: 400;
  font-style: normal;

  src: url(${FFKievit}) format("woff2");
}`;
