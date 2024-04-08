import Container from "./Container";
import RichTextRenderer from "./RichTextRenderer";
import styles from "./RichTextBlock.module.scss";
import { motion } from "framer-motion";

export default function RichTextBlock({ block }) {
  return (
    <section>
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={styles.rich}
          data-stack={block.classic}
        >
          <div className={styles.title}>
            {block.eyebrow && <h5 className="eyebrow">{block.eyebrow}</h5>}
            <h2>{block.title}</h2>
          </div>
          <div className={styles.content}>
            <RichTextRenderer blocks={block.rich_text} />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
