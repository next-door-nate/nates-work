import Blocks from "./Blocks";
import styles from "./Section.module.scss";
export default function Section({ section, books }) {
  return (
    <section
      className={styles.section + (section.theme === "white" ? `` : ` noise`)}
      data-section={true}
      data-section-theme={section.theme}
      data-block="section"
      data-pad-top={section.pad_top}
      data-pad-bottom={section.pad_bottom}
    >
      <Blocks blocks={section.blocks} books={books} />
    </section>
  );
}
