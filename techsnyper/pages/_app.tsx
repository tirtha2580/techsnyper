import '../src/styles/global.css'; 
import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Techsnyper</title>
        <meta name="description" content="A brief description of your app" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap" rel="stylesheet"/>


      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

