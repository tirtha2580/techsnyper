import React from 'react';  
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Add any other meta tags or stylesheets */}
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* <link rel="icon" href="/logoa.png" type="image/png" /> */}
        <link rel="stylesheet" href="https://your-custom-stylesheet.com" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap" rel="stylesheet"/>


      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
