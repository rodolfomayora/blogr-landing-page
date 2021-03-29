import { AppProps } from 'next/app';
import '../styles/style.global.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <div id="modal"></div>
    </>
  )
}