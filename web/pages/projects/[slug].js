import client from "../../utils/client";
import Layout from "../../components/Layout";
import Blocks from "../../components/Blocks";

const Project = ({ project }) => {
  return (
    <Layout header={true} footer={true}>
      <article>
        {project.title && <h1>{project.title}</h1>}
        {project.blocks && 
          <Blocks blocks={project.blocks} />
        }
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
    *[_type == "project" && slug.current == $slug][0]
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
