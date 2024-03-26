import styles from "./Banner.module.scss";
import Container from "./Container";
import RichTextRenderer from "./RichTextRenderer";
import SparklingGrid from "./SparklingGrid";

export default function Banner({ banner }) {
  return (
    <div className="noise">
      <section className={styles.banner} data-block={banner._type}>
        {/* <div className="dots" data-dot-size="small"></div> */}
        <Container>
          <h1>{banner.title}</h1>

          {banner.text && (
            <div className={styles.content}>
              <RichTextRenderer blocks={banner.text} />
            </div>
          )}
        </Container>
        <SparklingGrid
          gridSpacing={24}
          maxIntensity={50}
          flickerSpeed={10}
          selector={'[data-block="banner_page"]'}
        />
      </section>
    </div>
  );
}
