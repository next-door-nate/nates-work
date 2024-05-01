import { Suspense } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import Blocks from "../../components/Blocks";

const Test = ({ blocks, books }) => {
  return (
    <Layout header={true} footer={true}>
      <Head>
        <title>Bookshelf | Nate van der Vis</title>
        <meta name="description" content="Serving up a tastier web." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Blocks blocks={blocks} />
    </Layout>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      blocks: [
        {
          _type: "banner_page",
          title: "Test",
          subitle:
            "A nonexhaustive list of the books I've been reading, have read, or bought for some reason or another.",
        },
      ],
    },
  };
}

export default Test;
