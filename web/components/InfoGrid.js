import styles from "./InfoGrid.module.scss";
import Container from "./Container";
import RichTextRenderer from "./RichTextRenderer";
import OptimizedImage from "./OptimizedImage";

export default function InfoGrid({ infogrid }) {
  return (
    <section className={styles.infogrid} data-block="info-grid">
      <Container>
        <h2>{infogrid.title}</h2>
        {infogrid.text && <RichTextRenderer blocks={infogrid.text} />}

        {infogrid.items && (
          <div className={styles.grid}>
            {infogrid.items.map((item) => {
              return (
                <div className={styles.item} key={item._key}>
                  <OptimizedImage image={item.icon} />
                  <h4>{item.title}</h4>
                  <RichTextRenderer blocks={item.rich_text} />
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}
