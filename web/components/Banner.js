import styles from "./Banner.module.scss";
import Container from "./Container";
import RichTextRenderer from "./RichTextRenderer";
import SparklingGrid from "./SparklingGrid";
import { motion } from "framer-motion";
import { motionSettings } from "../utils/motionSettings";

export default function Banner({ banner, books }) {
  return (
    <div className="noise">
      <section className={styles.banner} data-block={banner._type}>
        {/* <div className="dots" data-dot-size="small"></div> */}
        <Container>
          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true }}
            variants={motionSettings}
            transition={{ duration: motionSettings.transitionDuration }}
          >
            {banner.eyebrow && <h5 className="eyebrow">{banner.eyebrow}</h5>}

            <h1>{banner.title}</h1>

            {banner.text && (
              <div className={styles.content}>
                <RichTextRenderer blocks={banner.text} />
              </div>
            )}
          </motion.div>
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
