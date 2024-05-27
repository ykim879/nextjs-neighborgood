import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';

export default function Home({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: any }>) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
