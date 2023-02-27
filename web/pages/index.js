import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nate van der Vis | Design 🤝 Engineering</title>
        <meta name="description" content="Serving up a tastier web." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <h1>Nates Work</h1>
      </main>

      <footer>
        <p>&copy; 2023 - Ride or die</p>
      </footer>
    </div>
  );
}
