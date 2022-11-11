import { createGlobalStyle } from "styled-components";
import blackout from "../../Blackout.woff";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Blackout;
    src: url(${blackout});
    font-weight: normal;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
