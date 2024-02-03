import { Suspense } from "react";
import Head from "next/head";
import "../styles/remedy.css";
import "../styles/variables.scss";
import "../styles/typography.scss";
import "../styles/main.scss";


function MyApp({ Component, pageProps }) {
  return (
    <Suspense fallback={<h2>🌀 Loading</h2>}>
      <>
        <Head>
          <title key="title">Nate van der Vis | Design 🤝 Engineering</title>
          <meta name="description" content="Serving up a tastier web." key="title" />
          <link rel="icon" href="/favicon.png" />

          {process.env.NODE_ENV == "production" && (
            <script defer data-domain="nates.work" src="https://plausible.io/js/script.js"></script>
          )}
        </Head>

        <Component {...pageProps} />
      </>
    </Suspense>
  );
}

export default MyApp;
