import Head from "next/head";
import client from "../utils/client";

const Home = ({ page }) => {
  return (
    <article>
      <Head>
        <title>Nate van der Vis | Design 🤝 Engineering</title>
        <meta name="description" content="Serving up a tastier web." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <h1>{page.title}</h1>
    </article>
  );
};

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const page = await client.fetch(
    `
    *[_type == "page" && slug.current == "home"][0]{
      title,
    }
  `
  );

  return {
    props: {
      page,
    },
  };
}

export default Home;
