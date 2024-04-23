import styles from "./ImageSlideshow.module.scss";
import { useState, useEffect } from "react";
import Container from "./Container";
import OptimizedImage from "./OptimizedImage";
export default function ImageSlideshow({ slideshow }) {
  let [active, setActive] = useState(1);
  let [preppedImages, setPreppedImages] = useState();

  let images = [];
  let cycles = 2;

  for (let i = 1; i <= cycles; i++) {
    slideshow.images.forEach((image) => {
      images.push(image);
    });
  }

  function nextImage(slides) {
    console.log("next image");

    var slides = document.querySelectorAll('[data-component="slide"]');

    slides.forEach((slide) => {
      var index = slide.getAttribute("data-order");
      if (index == 5) {
        slide.setAttribute("data-order", 0);
      } else {
        slide.setAttribute("data-order", index * 1 + 1);
      }
    });

    if (active == images.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  }

  function prevImage() {
    console.log("prev image");

    var slides = document.querySelectorAll('[data-component="slide"]');

    slides.forEach((slide) => {
      var index = slide.getAttribute("data-order");
      if (index == 0) {
        slide.setAttribute("data-order", 5);
      } else {
        slide.setAttribute("data-order", index * 1 - 1);
      }
    });

    if (active == 0) {
      setActive(5);
    } else {
      setActive(active - 1);
    }
  }

  return (
    <section className={styles.block} data-intrinsic-aspect={slideshow.aspect_ratio}>
      <Container type={slideshow.layout}>
        <div className={styles.images}>
          {slideshow.images.length > 0 && (
            <section className={styles.slideshow}>
              {images.map((image, i) => {
                return (
                  <div
                    key={image._key + i}
                    className={styles.image}
                    data-order={i}
                    data-active={i == active}
                    data-component="slide"
                  >
                    <OptimizedImage image={image} blurHash={image.blurHash} />
                  </div>
                );
              })}
            </section>
          )}

          <div className={styles.controls}>
            <button onClick={prevImage}>&lt;</button>
            <button onClick={nextImage}>&gt;</button>
          </div>
        </div>
      </Container>
    </section>
  );
}
