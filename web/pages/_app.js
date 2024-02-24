import { Suspense } from "react";
import Head from "next/head";
import "../styles/remedy.css";
import "../styles/variables.scss";
import "../styles/typography.scss";
import "../styles/main.scss";
import { mouseEffect } from "../components/Cursor";
import Cursor from "../components/Cursor";
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
        <div onMouseMove={mouseEffect}>
          <Component {...pageProps} />
          <Cursor />
        </div>
        <svg className="svg-filter">
          <defs>
            <filter data-v-56a8a55f="" id="filter">
              <feGaussianBlur
                data-v-56a8a55f=""
                in="SourceGraphic"
                stdDeviation="5.4"
                result="blur"
              ></feGaussianBlur>{" "}
              <feColorMatrix
                data-v-56a8a55f=""
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="filter"
              ></feColorMatrix>{" "}
              <feComposite
                data-v-56a8a55f=""
                in="SourceGraphic"
                in2="filter"
                operator="atop"
              ></feComposite>
            </filter>
          </defs>
        </svg>
      </>
    </Suspense>
  );
}

export default MyApp;
