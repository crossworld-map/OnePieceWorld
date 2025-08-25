import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Umami analytics script (privacidad respetuosa). Configura NEXT_PUBLIC_UMAMI_WEBSITE_ID y NEXT_PUBLIC_UMAMI_SRC en tu entorno de despliegue */}
      {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && process.env.NEXT_PUBLIC_UMAMI_SRC && (
        <Script
          async
          defer
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          src={process.env.NEXT_PUBLIC_UMAMI_SRC}
        />
      )}
      <Component {...pageProps} />
    </>
  );
}