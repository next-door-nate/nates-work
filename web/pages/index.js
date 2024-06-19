import Head from 'next/head';
import client from '../utils/client';
import Layout from '../components/Layout';
import { globalConfigQuery, pageQuery } from '../utils/queries';
import Blocks from '../components/Blocks';
import { getBooks } from '../lib/getBooks';
import usePartySocket from 'partysocket/react';
import { useState, useEffect } from 'react';

const Home = ({ page, globalConfig, books }) => {
  const [count, setCount] = useState(0);
  // connect to our server
  const ws = usePartySocket({
    // usePartySocket takes the same arguments as PartySocket.
    host: process.env.NODE_ENV === 'development' ? 'localhost:1999' : 'https://nates-work.next-door-nate.partykit.dev', // or localhost:1999 in dev
    room: 'home',

    // in addition, you can provide socket lifecycle event handlers
    // (equivalent to using ws.addEventListener in an effect hook)
    onOpen() {
      console.log('connected');
      console.log(`${this.count}`);
    },
    onMessage(e) {
      console.log('message', e.data);
    },
    onClose() {
      console.log('closed');
    },
    onError(e) {
      console.log('error');
    },
  });

  ws.addEventListener('message', (event) => {
    setCount(event.data);
    console.log(event.data);
  });

  function increment() {
    ws.send('increment');
  }
  function decrement() {
    ws.send('decrement');
  }

  return (
    <Layout header={globalConfig.header} footer={globalConfig.footer}>
      <Head>
        <title>Nate van der Vis | Design 🤝 Engineering</title>
        <meta name="description" content="Serving up a tastier web." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <article>
        <h1>{count}</h1>
        <button onClick={increment} className="increment">
          Increment
        </button>
        <button onClick={decrement} className="decrement">
          Decrement
        </button>
        <Blocks blocks={page.blocks} books={books} />
      </article>
    </Layout>
  );
};

export async function getStaticProps(context) {
  const books = await getBooks();

  const globalConfig = await client.fetch(globalConfigQuery);

  // It's important to default the slug so that it doesn't return "undefined"
  const page = await client.fetch(
    `
    *[_type == "page" && slug.current == "home"][0]{
      ${pageQuery}
    }
  `,
  );

  return {
    props: {
      books,
      page,
      globalConfig,
    },
  };
}

export default Home;
