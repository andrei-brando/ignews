import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

// este arquivo é como se fosse o index.html de uma aplicação react normal
export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <title>ig.news</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
