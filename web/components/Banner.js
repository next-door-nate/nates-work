import styles from "./Banner.module.scss";
import Container from "./Container";
import RichTextRenderer from "./RichTextRenderer";

export default function Banner({ banner }) {
  return (
    <div className="noise">
      <section className={styles.banner}>
        <div className="dots" data-dot-size="small"></div>
        <Container>
          <h1>{banner.title}</h1>
          {banner.text && <RichTextRenderer blocks={banner.text} />}
        </Container>
      </section>
    </div>
  );
}
