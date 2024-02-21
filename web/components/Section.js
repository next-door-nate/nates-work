import Blocks from "./Blocks";
import styles from "./Section.module.scss";
export default function Section({ section }) {
  return (
    <section
      className={styles.section}
      data-section={true}
      data-section-theme={section.theme}
      data-block="section"
      data-pad-top={section.pad_top}
      data-pad-bottom={section.pad_bottom}
    >
      <Blocks blocks={section.blocks} />
    </section>
  );
}
