import styles from "./ImageSlideshow.module.scss";
import Container from "./Container";
import OptimizedImage from "./OptimizedImage";
export default function ImageSlideshow({ slideshow }) {
  function changeImage() {
    console.log("change Image!!!1!");
  }

  return (
    <section
      className={styles.block}
      data-intrinsic-aspect={slideshow.aspect_ratio}
      onClick={changeImage}
    >
      <Container type={slideshow.layout}>
        <div className={styles.images}>
          {slideshow.images.length > 0 && (
            <section className={styles.slideshow}>
              {slideshow.images.map((image, i) => {
                return (
                  <div key={image._key} className={styles.image} data-order={i}>
                    <OptimizedImage image={image} blurHash={image.blurHash} />
                  </div>
                );
              })}
            </section>
          )}
        </div>
      </Container>
    </section>
  );
}
