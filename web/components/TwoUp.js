import RichTextRenderer from "./RichTextRenderer";
import styles from "./TwoUp.module.scss";
import OptimizedImage from "./OptimizedImage";
import Container from "./Container";
import { motionSettings } from "../utils/motionSettings";
import { motion } from "framer-motion";

export default function TwoUp({ two_up }) {
  return (
    <section data-block="two-up">
      <Container>
        <motion.div
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
          variants={motionSettings}
          transition={{ duration: motionSettings.transitionDuration }}
          className={styles["two-up"]}
          data-reverse={two_up.reverse}
        >
          <div className={styles.content}>
            {two_up.eyebrow && <h5>{two_up.eyebrow}</h5>}
            <h2>{two_up.title}</h2>
            {two_up.text && <RichTextRenderer blocks={two_up.text} />}
          </div>
          {two_up.image && (
            <div className={styles.image} data-intrinsic-height={two_up.intrinsic_height}>
              <OptimizedImage image={two_up.image} blurHash={two_up.blurHash} />
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
