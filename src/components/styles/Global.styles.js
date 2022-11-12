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
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;

export default GlobalStyles;
