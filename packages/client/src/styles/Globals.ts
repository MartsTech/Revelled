import { createGlobalStyle } from "styled-components";
import Theme from "./Theme";

const GlobalStyle = createGlobalStyle<{ theme: typeof Theme }>`
  h1,
  h2,
  h3,
  h4,
  p,
  a {
    line-height: 1.6rem;
  }

  h1,
  h2,
  h3,
  h4,
  p.bold {
    font-weight: 700;
  }

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
    --screen-height-reduction: 0px;
    --color-primary-100-translucent: rgba(222, 227, 234, 0.15);

    --tw-ring-offset-width: 0px,
    --tw-ring-color: rgba(59,130,246,0.5)
} 

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 2.8rem;
  }

  h3 {
    font-size: 2rem;
  }

  h4 {
    font-size: 1.4rem;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
  }

  p.small {
    font-size: 0.85rem;
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
    margin: 0;
    padding: 0;
  }

  html {
    position: fixed;
  }

  #__next {
    overflow-y: auto;
  }

    /* for firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: var(--color-primary-700) rgba(0, 0, 0, 0);
  }

  /* for non-firefox */
  ::-webkit-scrollbar {
    overflow: overlay;
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    display: initial;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-primary-700);
    border-radius: 5px;
  }

  ::-webkit-resizer {
    background: var(--color-primary-700);
  }
`;

export default GlobalStyle;
