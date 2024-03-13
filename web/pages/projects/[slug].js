import client from "../../utils/client";
import Layout from "../../components/Layout";
import Blocks from "../../components/Blocks";
import Container from "../../components/Container";
import styles from "./Project.module.scss";
import { globalConfigQuery } from "../../utils/queries";
import Head from "next/head";
import RichTextRenderer from "../../components/RichTextRenderer";
import Link from "next/link";
import linkResolver from "../../utils/linkResolver";

const Project = ({ project, globalConfig }) => {
  console.log(project);
  return (
    <Layout header={globalConfig.header} footer={globalConfig.footer}>
      <Head>
        <title>{project.title} | Nate's Work</title>
        <meta
          property="og:title"
          content={project.title + ` | Nate's Work`}
          key="title"
        />

        <meta name="description" content={project.description} />
      </Head>
      <article>
        <Container>
          <section className={styles.banner}>
            <h5 className="eyebrow">Projects</h5>
            {project.title && <h1>{project.title}</h1>}
            {project.description && (
              <div className={styles.description}>
                <RichTextRenderer blocks={project.description} />
              </div>
            )}
            {project.link && (
              <Link
                className="button"
                href={linkResolver(project.link)}
                title="View Project"
                target="_blank"
              >
                View Project
              </Link>
            )}
          </section>
        </Container>
        {project.content && <Blocks blocks={project.content} />}
      </article>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "project" && defined(slug.current)][].slug.current`,
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const globalConfig = await client.fetch(globalConfigQuery);
  const project = await client.fetch(
    `
    *[_type == "project" && slug.current == $slug][0]
  `,
    { slug },
  );

  return {
    props: {
      project,
      globalConfig,
    },
  };
}

export default Project;
