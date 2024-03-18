import client from "../../utils/client";
import Layout from "../../components/Layout";
import Blocks from "../../components/Blocks";
import Container from "../../components/Container";
import styles from "./Project.module.scss";
import { globalConfigQuery, pageQuery, projectQuery } from "../../utils/queries";
import Head from "next/head";
import RichTextRenderer from "../../components/RichTextRenderer";
import Link from "next/link";
import linkResolver from "../../utils/linkResolver";
import FooterCta from "../../components/FooterCta";
import OptimizedImage from "../../components/OptimizedImage";

const Project = ({ project, globalConfig }) => {
  console.log(project);
  return (
    <Layout header={globalConfig.header} footer={globalConfig.footer}>
      <Head>
        <title>{project.title} | Nate&apos;s Work</title>
        <meta property="og:title" content={project.title + ` | Nate's Work`} key="title" />
        <meta name="description" content={project.description} />
      </Head>
      <article>
        <section className={styles.banner}>
          <Container>
            <div className={styles.content}>
              <h5 className="eyebrow">Projects</h5>
              {project.title && <h1>{project.title}</h1>}
              {project.description && (
                <div className={styles.description}>
                  <RichTextRenderer blocks={project.description} />
                </div>
              )}
            </div>

            <div className={styles.meta}>
              <div className={styles.info}>
                <div className={styles.roles}>
                  <h5>Role{project.roles.length > 1 && `s`}:</h5>
                  {project.roles.length > 0 &&
                    project.roles.map((role) => {
                      return <p>{role.title}</p>;
                    })}
                </div>

                <div className={styles.tools}>
                  <h5>Tool{project.tools.length > 1 && `s`}:</h5>
                  {project.tools.length > 0 &&
                    project.tools.map((tool) => {
                      return (
                        <p>
                          <Link title={tool.title} href={tool.link}>
                            {tool.title}
                          </Link>
                        </p>
                      );
                    })}
                </div>
              </div>

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
            </div>
          </Container>
        </section>

        <section className={styles.image}>
          <OptimizedImage image={project.featured_image} />
        </section>
        {project.content && <Blocks blocks={project.content} />}
        <FooterCta
          // prettier-ignore
          title="Let&apos;s talk"
          subtitle="Have something in mind? Reach out and we can talk about what your project looks like."
          button="Start a project"
        />
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
  const globalConfig = await client.fetch(globalConfigQuery);
  const project = await client.fetch(
    `
    *[_type == "project" && slug.current == $slug][0]{
      ${projectQuery},
      ${pageQuery},
    }
  `,
    { slug }
  );

  return {
    props: {
      project,
      globalConfig,
    },
  };
}

export default Project;
