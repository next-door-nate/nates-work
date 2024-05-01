import client from "../utils/client";
import Layout from "../components/Layout";
import { globalConfigQuery, pageQuery } from "../utils/queries";
import Blocks from "../components/Blocks";
import HeadMeta from "../components/HeadMeta";
import { getBooks } from "../lib/getBooks";

const Page = ({ page, globalConfig, books }) => {
  return (
    <Layout header={globalConfig.header} footer={globalConfig.footer}>
      <HeadMeta meta={page.meta} />
      <article>
        <Blocks blocks={page.blocks} books={books} />
      </article>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(`*[_type == "page" && defined(slug.current)][].slug.current`);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"

  const { slug = "" } = context.params;
  const globalConfig = await client.fetch(globalConfigQuery);
  const page = await client.fetch(
    `
    *[_type == "page" && slug.current == $slug][0]{
      ${pageQuery}
    }
  `,
    { slug }
  );

  const books = await getBooks();

  return {
    props: {
      books,
      page,
      globalConfig,
    },
  };
}

export default Page;
