import Head from 'next/head';
import '../styles/remedy.css';
import '../styles/variables.scss';
import '../styles/typography.scss';
import '../styles/main.scss';
import { mouseEffect } from '../components/Cursor';
import Cursor from '../components/Cursor';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production' && window.location.host === 'nates.work') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
    person_profiles: 'identified_only',
    // Enable debug mode in development
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug();
    },
  });
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      process.env.NODE_ENV === 'production' &&
      window.location.host === 'nates.work'
    ) {
      // Track page views
      const handleRouteChange = () => {
        posthog?.capture('$pageview');
      };
      router.events.on('routeChangeComplete', handleRouteChange);

      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }
  }, []);

  return (
    <>
      <Head>
        <title key="title">Design 🤝 Engineering | Nate&apos;s Work</title>
        <meta
          name="description"
          content="The Design and Frontend Development work of Nate van der Vis"
          key="description"
        />

        <meta property="og:title" content="Design 🤝 Engineering | Nate's Work" key="og-title" />
        <meta property="og:description" content="The Design and Frontend Development work of Nate van der Vis" />
        <meta property="og:type" content="website" key="og-type" />
        <meta property="og:url" content="https://nates.work" key="og-url" />
        <meta property="og:image" content="/default-og-image.png" key="og-image" />
        <meta property="og:site_name" content="Nate's Work" key="og-site-name" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* <div onMouseMove={mouseEffect}> */}
      <div>
        {' '}
        <PostHogProvider client={posthog}>
          <Component {...pageProps} />
        </PostHogProvider>
        {/* <Cursor /> */}
      </div>
      <svg className="svg-filter">
        <defs>
          <filter data-v-56a8a55f="" id="filter">
            <feGaussianBlur data-v-56a8a55f="" in="SourceGraphic" stdDeviation="5.4" result="blur"></feGaussianBlur>{' '}
            <feColorMatrix
              data-v-56a8a55f=""
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="filter"
            ></feColorMatrix>{' '}
            <feComposite data-v-56a8a55f="" in="SourceGraphic" in2="filter" operator="atop"></feComposite>
          </filter>

          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="19.5" numOctaves="10" result="turbulence" />
            <feComposite operator="in" in="turbulence" in2="SourceAlpha" result="composite" />
            <feColorMatrix in="composite" type="luminanceToAlpha" />
            <feBlend in="SourceGraphic" in2="composite" mode="color-burn" />
          </filter>
        </defs>
      </svg>
    </>
  );
}

export default MyApp;
