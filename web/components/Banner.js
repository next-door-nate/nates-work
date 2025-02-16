import styles from './Banner.module.scss';
import Container from './Container';
import RichTextRenderer from './RichTextRenderer';
import { motion } from 'framer-motion';
import { motionSettings } from '../utils/motionSettings';

export default function Banner({ banner }) {
  return (
    <div>
      <section className={styles.banner + ` noise`} data-block={banner._type}>
        {/* <div className="dots" data-dot-size="small"></div> */}
        <Container>
          <motion.div
            initial={'hidden'}
            whileInView={'visible'}
            viewport={{ once: true }}
            variants={motionSettings}
            transition={{ duration: motionSettings.transitionDuration }}
          >
            {banner.eyebrow && <h5 className="eyebrow">{banner.eyebrow}</h5>}

            <hgroup>
              <h1>{banner.title}</h1>

              {banner.text && (
                <div className={styles.content}>
                  <RichTextRenderer blocks={banner.text} />
                </div>
              )}
            </hgroup>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
