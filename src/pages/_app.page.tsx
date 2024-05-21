import { AppProps } from 'next/app';
import '../styles/style.global.scss';

import { SplashScreen } from '../components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <div id="modal"></div>
      {process.env.NODE_ENV === 'production' && <SplashScreen />}
    </>
  )
}