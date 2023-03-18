import client from "../../utils/client";
import Layout from "../../components/Layout";

const Project = ({ project }) => {
  return (
    <Layout header={1} footer={1}>
      <article>
        <h1>{project.title}</h1>
      </article>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(`*[_type == "project" && defined(slug.current)][].slug.current`);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const project = await client.fetch(
    `
    *[_type == "project" && slug.current == $slug][0]{
      ...
    }
  `,
    { slug }
  );

  return {
    props: {
      project,
    },
  };
}

export default Project;