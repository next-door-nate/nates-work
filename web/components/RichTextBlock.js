import Container from "./Container";
import RichTextRenderer from "./RichTextRenderer";
import styles from "./RichTextBlock.module.scss";

export default function RichTextBlock({ block }) {
  return (
    <section>
      <Container>
        <div className={styles.rich}>
          <div className={styles.title}>
            {block.eyebrow && <h5 className="eyebrow">{block.eyebrow}</h5>}
            <h2>{block.title}</h2>
          </div>
          <div className={styles.content}>
            <RichTextRenderer blocks={block.rich_text} />
          </div>
        </div>
      </Container>
    </section>
  );
}
