import { Suspense } from "react";
import Head from "next/head";
import client from "../utils/client";
import Layout from "../components/Layout";
import { globalConfigQuery, headerQuery, pageQuery } from "../utils/queries";
import Blocks from "../components/Blocks";

const Home = ({ page, globalConfig }) => {
  console.log(page, globalConfig);

  return (
    <Layout header={globalConfig.header} footer={globalConfig.footer}>
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
  const globalConfig = await client.fetch(globalConfigQuery);

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
      globalConfig,
    },
  };
}

export default Home;
