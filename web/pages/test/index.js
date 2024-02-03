import { Suspense } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";

import PartySocket from "partysocket";


const Test = ({ hello }) => {

  // connect to our server
const partySocket = new PartySocket({
  host: "192.168.0.195:1999",
  room: "my-room"
});

// send a message to the server
partySocket.send("Hello everyone");

// print each incoming message from the server to console
partySocket.addEventListener("message", (e) => {
  console.log(e.data);
});

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
