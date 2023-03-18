import Head from "next/head";
import client from "../utils/client";
import Layout from "../components/Layout";
import { pageQuery } from "../utils/queries";
import Blocks from "../components/Blocks";

const Home = ({ page }) => {
  console.log(page);

  return (
    <Layout header={1} footer={1}>
      <Head>
        <title>Nate van der Vis | Design 🤝 Engineering</title>
        <meta name="description" content="Serving up a tastier web." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <article>
        <Blocks blocks={page.blocks} />
      </article>
    </Layout>
  );
};

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const page = await client.fetch(
    `
    *[_type == "page" && slug.current == "home"][0]{
      ${pageQuery}
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
