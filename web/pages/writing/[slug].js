import client from "../../utils/client";
import Layout from "../../components/Layout";
import Blocks from "../../components/Blocks";
import Container from "../../components/Container";
import styles from "../../components/Blog.module.scss";

const Blog = ({ blog }) => {
  return (
    <Layout header={true} footer={true}>
      <article>
        <section className={styles.banner}>
          <Container>{blog.title && <h1>{blog.title}</h1>}</Container>
        </section>
        {blog.blocks && <Blocks blocks={blog.blocks} />}
      </article>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(`*[_type == "blog" && defined(slug.current)][].slug.current`);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const blog = await client.fetch(
    `
    *[_type == "blog" && slug.current == $slug][0]
  `,
    { slug }
  );

  return {
    props: {
      blog,
    },
  };
}

export default Blog;
