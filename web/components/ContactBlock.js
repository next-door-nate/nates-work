import ContactForm from './ContactForm';
import Container from './Container';
import styles from './ContactBlock.module.scss';
import RichTextRenderer from './RichTextRenderer';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { motionSettings } from '../utils/motionSettings';

export default function ContactBlock({ block }) {
  return (
    <section className={styles.block}>
      <Head>
        <title>{block.title + ` | Nate's Work`}</title>
        <meta property="og:title" content={block.title + ` | Nate's Work`} key="title" />
        <meta
          name="description"
          content="Not sure where to begin? Tell me more about your project, where you're located, and how you heard about me."
          key="description"
        />
      </Head>
      <Container>
        <section className={styles.content}>
          <motion.div
            initial={'hidden'}
            whileInView={'visible'}
            viewport={{ once: true }}
            variants={motionSettings}
            transition={{ duration: motionSettings.transitionDuration }}
            className={styles.copy}
          >
            {block.title && <h1>{block.title}</h1>}
            {block.text && <RichTextRenderer blocks={block.text} />}
          </motion.div>
          <motion.div
            initial={'hidden'}
            whileInView={'visible'}
            viewport={{ once: true }}
            variants={motionSettings}
            transition={{ duration: motionSettings.transitionDuration, delay: 0.3 }}
            className={styles.form}
          >
            <ContactForm />
          </motion.div>
        </section>
      </Container>
    </section>
  );
}
