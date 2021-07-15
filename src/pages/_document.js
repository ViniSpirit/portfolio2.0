import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pt">
        <Head>
          <script
            src="https://kit.fontawesome.com/96e462c92b.js"
            crossOrigin="anonymous"
          ></script>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/fav/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/fav/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/fav/favicon-16x16.png"
          />
          <link rel="manifest" href="/fav/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
