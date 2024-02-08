import Blocks from "./Blocks";
import styles from "./Section.module.scss";
export default function Section({ blocks }) {
  return (
    <section
      className={styles.section}
      data-section={true}
      data-section-theme={blocks.theme}
      data-block="section"
    >
      <Blocks blocks={blocks.blocks} />
    </section>
  );
}
