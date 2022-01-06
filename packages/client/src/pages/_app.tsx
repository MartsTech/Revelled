import type { AppProps } from "next/app";
import Head from "next/head";
import { store, StoreContext } from "stores/store";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/Globals";
import Theme from "styles/Theme";
import "react-toastify/dist/ReactToastify.min.css";
import { SessionProvider } from "next-auth/react";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <StoreContext.Provider value={store}>
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
      </StoreContext.Provider>
    </SessionProvider>
  );
};

export default App;
