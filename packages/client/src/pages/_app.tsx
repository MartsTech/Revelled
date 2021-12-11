import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/Globals";
import Theme from "styles/Theme";
import { defaultSEO } from "utils/seo";

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
      <DefaultSeo {...defaultSEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
