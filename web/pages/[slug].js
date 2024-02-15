import client from "../utils/client";
import Layout from "../components/Layout";
import { globalConfigQuery } from "../utils/queries";
import Container from "../components/Container";

const Page = ({ page, globalConfig }) => {
  return (
    <Layout header={globalConfig.header} footer={globalConfig.footer}>
      <Container>
        <article>{page.title && <h1>{page.title}</h1>}</article>
      </Container>
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
    *[_type == "page" && slug.current == $slug][0]
  `,
    { slug }
  );

  return {
    props: {
      page,
      globalConfig,
    },
  };
}

export default Page;
