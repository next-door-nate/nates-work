import styles from "./ImageBlock.module.scss";
import Container from "./Container";
import OptimizedImage from "./OptimizedImage";
export default function ImageBlock({ block }) {
  return (
    <section className={styles.block} data-intrinsic-aspect={block.aspect_ratio}>
      <Container type={block.layout}>
        <div className={styles.image}>
          <OptimizedImage image={block.image} />
        </div>
      </Container>
    </section>
  );
}
