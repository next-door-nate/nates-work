import Head from "next/head";
import "../styles/remedy.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title key="title">Nate van der Vis | Design 🤝 Engineering</title>
        <meta name="description" content="Serving up a tastier web." key="title" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
