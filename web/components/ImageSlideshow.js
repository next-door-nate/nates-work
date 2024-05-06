import styles from "./ImageSlideshow.module.scss";
import { useState, useEffect } from "react";
import Container from "./Container";
import OptimizedImage from "./OptimizedImage";
export default function ImageSlideshow({ slideshow }) {
  let [active, setActive] = useState(1);
  let [activeDot, setActiveDot] = useState(0);

  let images = [];
  let cycles = 2;

  for (let i = 1; i <= cycles; i++) {
    slideshow.images.forEach((image) => {
      images.push(image);
    });
  }

  function nextImage(slides) {
    var slides = document.querySelectorAll('[data-component="slide"]');

    slides.forEach((slide) => {
      var index = slide.getAttribute("data-order");
      if (index == slides.length - 1) {
        slide.setAttribute("data-order", 0);
      } else {
        slide.setAttribute("data-order", parseInt(index) + 1);
      }
    });

    if (active == images.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }

    if (activeDot == 0) {
      setActiveDot(slideshow.images.length - 1);
    } else {
      setActiveDot(activeDot - 1);
    }
  }

  function prevImage() {
    var slides = document.querySelectorAll('[data-component="slide"]');

    slides.forEach((slide) => {
      var index = slide.getAttribute("data-order");
      if (index == 0) {
        slide.setAttribute("data-order", parseInt(slides.length) - 1);
      } else {
        slide.setAttribute("data-order", parseInt(index) - 1);
      }
    });

    if (active == 0) {
      setActive(slides.length - 1);
    } else {
      setActive(active - 1);
    }

    if (activeDot == slideshow.images.length - 1) {
      setActiveDot(0);
    } else {
      setActiveDot(activeDot + 1);
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
                    onClick={prevImage}
                  >
                    <OptimizedImage image={image} blurHash={image.blurHash} />
                  </div>
                );
              })}
            </section>
          )}

          <div className={styles.controls}>
            <div className={styles.buttons}>
              <button className="button" data-button="outline-dark" onClick={nextImage}>
                <span className={styles.triangle} data-triangle="left"></span> Prev
              </button>
              <button className="button" data-button="outline-dark" onClick={prevImage}>
                Next <span className={styles.triangle} data-triangle="right"></span>
              </button>
            </div>
            <div className={styles.dots}>
              {slideshow.images.map((dot, i) => {
                return (
                  <div
                    key={i + `-dot`}
                    className={styles.dot}
                    data-active-dot={i == activeDot}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
