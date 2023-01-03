import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;600;800&display=swap'
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
