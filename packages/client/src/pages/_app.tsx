import type { AppProps } from "next/app";
import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Theme from "../styles/Theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;

const GlobalStyle = createGlobalStyle<{ theme: typeof Theme }>`
  html, html > body, body {
    background: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white};
    margin: 0;
    padding: 0;
  }
`;
