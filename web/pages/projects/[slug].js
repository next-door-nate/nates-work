import client from "../../client";

const Project = ({ project }) => {
  return (
    <article>
      <h1>{project?.slug?.current}</h1>
    </article>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(`*[_type == "project" && defined(slug.current)][].slug.current`);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
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
