import { createGlobalStyle } from 'styled-components';
import PALETTE from './constants/palette';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    color: ${PALETTE.BLACK[400]};
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyle;
