import '@styles/globals.css';
// import { GlobalStyles } from 'twin.macro';
import type { AppProps } from 'next/app';
import {SessionProvider} from 'next-auth/react'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
      {/* <GlobalStyles /> */}
    </SessionProvider>
  );
}

export default MyApp;
