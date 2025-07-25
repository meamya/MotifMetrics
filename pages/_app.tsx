import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';


import '../styles/globals.css'
import type { AppProps } from 'next/app';


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

