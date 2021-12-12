import NextDocument, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import { APP_DESCRIPTION, APP_NAME, APP_URL } from "utils/constants";

class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await NextDocument.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          {/* HTML Meta Tags */}
          <meta name="application-name" content={APP_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="description" content={APP_DESCRIPTION} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#0b0e11" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta content="en_US" property="og:locale" />
          <meta charSet="utf-8" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="follow, index" name="robots" />
          <meta name="yandex-verification" content="9b2ec89af6a679a8" />
          <meta
            name="google-site-verification"
            content="0v5wkb42rasaONHLyEFaEIdXPdu18kpiTbWP_lPdJMs"
          />
          <meta
            content="/favicons/browserconfig.xml"
            name="msapplication-config"
          />

          {/* Facebook Meta Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={APP_URL} />
          <meta property="og:title" content={APP_NAME} />
          <meta property="og:description" content={APP_DESCRIPTION} />
          <meta
            property="og:image"
            content={`${APP_URL}favicons/icon-512x512.png`}
          />

          {/* Twitter Meta Tags */}
          <meta content="@martstech" name="twitter:site" />
          <meta content="@martstech" name="twitter:creator" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="revelled.vercel.app" />
          <meta property="twitter:url" content={APP_URL} />
          <meta name="twitter:title" content={APP_NAME} />
          <meta name="twitter:description" content={APP_DESCRIPTION} />
          <meta
            name="twitter:image"
            content={`${APP_URL}favicons/icon-512x512.png`}
          />

          {/* Links */}
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={"true"}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
