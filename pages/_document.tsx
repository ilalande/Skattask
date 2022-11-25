import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700;900&display=swap'
          rel='stylesheet'
        />
        <Html lang='fr'></Html>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
