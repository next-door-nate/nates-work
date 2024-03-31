import styles from "./ImageBlock.module.scss";
import Container from "./Container";
import OptimizedImage from "./OptimizedImage";
import { motion } from "framer-motion";
export default function ImageBlock({ block }) {
  return (
    <section className={styles.block} data-intrinsic-aspect={block.aspect_ratio}>
      <Container type={block.layout}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.image}
        >
          <OptimizedImage image={block.image} blurHash={block.blurHash} />
        </motion.div>
      </Container>
    </section>
  );
}
