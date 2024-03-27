import RichTextRenderer from "./RichTextRenderer";
import styles from "./TwoUp.module.scss";
import OptimizedImage from "./OptimizedImage";
import Container from "./Container";

export default function TwoUp({ two_up }) {
  return (
    <section data-block="two-up">
      <Container>
        <div className={styles["two-up"]} data-reverse={two_up.reverse}>
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
        </div>
      </Container>
    </section>
  );
}
