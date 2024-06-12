import Document, { Html, Head, Main, NextScript } from 'next/document';

import { PostHogProvider } from 'posthog-js/react';

const posthogOptions = {
  api_host: process.env.REACT_APP_PUBLIC_POSTHOG_HOST,
};

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/png" href="/favicon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Pathway+Extreme:ital,opsz,wght@0,8..144,300;0,8..144,400;0,8..144,600;0,8..144,800;1,8..144,300;1,8..144,400;1,8..144,600;1,8..144,800&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wdth,wght@87.5,100..900&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wdth,wght@0,90,640;0,90,900;0,100,400;0,100,520;1,90,640;1,100,400;1,100,520&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          {process.env.NODE_ENV == 'production' ? (
            <PostHogProvider apiKey={process.env.REACT_APP_PUBLIC_POSTHOG_KEY} options={posthogOptions}>
              <Main />
            </PostHogProvider>
          ) : (
            <Main />
          )}

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
