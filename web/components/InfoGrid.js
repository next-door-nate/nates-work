import styles from "./InfoGrid.module.scss";
import Container from "./Container";
import RichTextRenderer from "./RichTextRenderer";
import OptimizedImage from "./OptimizedImage";
import { motion } from "framer-motion";
import { motionSettings } from "../utils/motionSettings";

export default function InfoGrid({ infogrid }) {
  return (
    <section className={styles.infogrid} data-block="info-grid">
      <Container>
        {infogrid.title && <h2>{infogrid.title}</h2>}
        {infogrid.text && <RichTextRenderer blocks={infogrid.text} />}

        {infogrid.items && (
          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true }}
            variants={motionSettings}
            transition={{ duration: motionSettings.transitionDuration }}
            className={styles.grid}
          >
            {infogrid.items.map((item) => {
              return (
                <div className={styles.item} key={item._key}>
                  <OptimizedImage image={item.icon} />
                  <h4>{item.title}</h4>
                  <RichTextRenderer blocks={item.rich_text} />
                </div>
              );
            })}
          </motion.div>
        )}
      </Container>
    </section>
  );
}
