import { createGlobalStyle } from "styled-components";
import blackout from "../../Blackout.woff";

const GlobalStyles = createGlobalStyle`
  :root{
  --bg-front: ${({ theme }) => theme.backgroundContent};
  --bg-back: ${({ theme }) => theme.background};
  --primary: ${({ theme }) => theme.primary};
  --text-color-1: ${({ theme }) => theme.color};
  --text-color-2: ${({ theme }) => theme.color2};
  --text-color-3: ${({ theme }) => theme.color3};
  --transparent: ${({ theme }) => theme.transparent};
  --semi-transparent: ${({ theme }) => theme.semiTransparent};

  }
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
  body{
    background-color: var(--bg-back);

  }
  #root{
      max-width: 1200px;
      margin: auto;
  }

  main{
    background-color: var(--bg-back);
    padding-bottom: 30px;
    &>*{
        background: white;
      }
    }
  @media (min-width: 1050px) {
    main{
      display: flex;
      gap: 10px;
      &>*{
        background: var(--bg-front);
        border-radius: 50px;
      }
    }
  }
`;

export default GlobalStyles;
