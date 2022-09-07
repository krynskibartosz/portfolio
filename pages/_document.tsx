import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html className="dark">
        <Head>
          {/* <link rel="shortcut icon" href="/static/umengo.png" /> */}
        </Head>
        <body>
          <>
            <Main />
            <NextScript />
          </>
        </body>
      </Html>
    );
  }
}
