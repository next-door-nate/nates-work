import ContactForm from "./ContactForm";
import Container from "./Container";
import styles from "./ContactBlock.module.scss";
import RichTextRenderer from "./RichTextRenderer";
import Head from "next/head";

export default function ContactBlock({ block }) {
  return (
    <section className={styles.block}>
      {/* <div className={styles.beam + ` noise`}></div> */}
      <Head>
        <title>{block.title} | Nate&apos;s Work</title>
        <meta property="og:title" content={block.title + ` | Nate's Work`} key="title" />
        <meta
          name="description"
          content="Not sure where to begin? Tell me more about your project, where you're located, and how you heard about me."
          key="description"
        />
      </Head>
      <Container>
        <section className={styles.content}>
          <div className={styles.copy}>
            {block.title && <h1>{block.title}</h1>}
            {block.text && <RichTextRenderer blocks={block.text} />}
          </div>
          <div className={styles.form}>
            <ContactForm />
          </div>
        </section>
      </Container>
    </section>
  );
}
