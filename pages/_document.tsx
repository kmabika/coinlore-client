import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

interface DocProps {
  isProduction?: any;
}

export default class MyDocument extends Document<DocProps> {
  static async getInitialProps(ctx: any) {
    const styledComponentsSheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            styledComponentsSheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <React.Fragment>
            {initialProps.styles}
            {styledComponentsSheet.getStyleElement()}
          </React.Fragment>
        ),
      };
    } finally {
      styledComponentsSheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta property="og:type" content="website" />
          <link rel="stylesheet" href="https://use.typekit.net/zyk6vpa.css"/>
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
