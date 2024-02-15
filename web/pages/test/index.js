import { Suspense } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import Blocks from "../../components/Blocks";

const Test = ({ hello, blocks }) => {
  return (
    <Layout header={false} footer={false}>
      <Head>
        <title>Design 🤝 Engineering | Nate van der Vis</title>
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
      hello: "test",
      blocks:[
        {
          _type: "banner",
          title: "Design Engineering",
        },
        {
          _type: "info_grid",
          title: "This is what I'm about",
          grid: [
            {
              title: 'Lorem Ipsum',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
            },
            {
              title: 'Lorem Ipsum',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
            },
            {
              title: 'Lorem Ipsum',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
            },
            {
              title: 'Lorem Ipsum',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
            },
          ]
        },
        {
          _type: "bento",
          title: "Packed all neatly in a box",
          bento: [
            {
              size: 1,
              theme: "light",
              title: 'Lorem ipsum',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
              size: 2,
              theme: "dark",
              title: 'Lorem ipsum',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
              size: 2,
              theme: "colorful-1",
              title: 'Lorem ipsum',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
              size: 1,
              theme: "colorful-2",
              title: 'Lorem ipsum',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
          ]
        },
      ]
    },
  };
}

export default Test;
