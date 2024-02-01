import { Suspense } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";

const Test = ({ hello }) => {
  return (
    <Layout header={false} footer={false}>
      <Head>
        <title>Nate van der Vis | Design 🤝 Engineering</title>
        <meta name="description" content="Serving up a tastier web." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <h1>Page {hello}</h1>
    </Layout>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      hello: "test",
    },
  };
}

export default Test;
