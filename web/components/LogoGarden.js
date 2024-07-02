import styles from './LogoGarden.module.scss';
import Container from './Container';
import OptimizedImage from './OptimizedImage';
import { motion } from 'framer-motion';
import { motionSettings } from '../utils/motionSettings';

export default function LogoGarden({ garden }) {
  return (
    <section className={styles.garden} data-block={garden._type}>
      <Container container="normal">
        <h5>{garden.title}</h5>
        {garden.logos && (
          <motion.div
            initial={'hidden'}
            whileInView={'visible'}
            viewport={{ once: true }}
            variants={motionSettings}
            transition={{ duration: motionSettings.transitionDuration }}
            className={styles.logos}
          >
            {garden.logos.map((company) => {
              return (
                <div key={company._key} className={styles.logo} data-company={company.name}>
                  <OptimizedImage image={company.logo} />
                </div>
              );
            })}
          </motion.div>
        )}
      </Container>
    </section>
  );
}
