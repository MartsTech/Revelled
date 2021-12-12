import { createGlobalStyle } from "styled-components";
import Theme from "./Theme";

const GlobalStyle = createGlobalStyle<{ theme: typeof Theme }>`
  :root {
    font-size: 0.875rem;

    --color-button-text: #fff;
    --color-primary-100: #dee3ea;
    --color-primary-200: #b2bdcd;
    --color-primary-300: #5d7290;
    --color-primary-600: #323d4d;
    --color-primary-700: #242c37;
    --color-primary-800: #151a21;
    --color-primary-900: #0b0e11;
    --color-secondary-washed-out: #879eed;
    --color-secondary: #5575e7;
    --color-accent-glow: rgba(253, 77, 77, 0.3);
    --color-accent: #fd4d4d;
    --color-accent-hover: #fd6868;
    --color-accent-disabled: #f5bfbf;
  }

  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
    font: inherit;
  }
 
  html,
  body,
  #__next {
    background-color: var(--color-primary-900);
    color:  var(--color-button-text);
    font-family: ${(props) => props.theme.fontFamily.sans.join()};
    height: 100%;
    width: 100%;
    display: flex;
    text-rendering: optimizeLegibility;
  }

  html {
    position: fixed;
  }

  #__next {
    overflow-y: auto;
  }

  a {
    text-decoration: none;
  }

    /* for firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: var(--color-primary-700) rgba(0, 0, 0, 0);
  }

  /* for non-firefox */
  ::-webkit-scrollbar {
    overflow: overlay;
  }

  ::-webkit-scrollbar-track {
    display: initial;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-primary-700);
  }

  ::-webkit-resizer {
    background: var(--color-primary-700);
  }
`;

export default GlobalStyle;
