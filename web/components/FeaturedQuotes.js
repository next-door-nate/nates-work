import styles from './FeaturedQuotes.module.scss';
import Container from './Container';
import RichTextRenderer from './RichTextRenderer';
import { motion } from 'framer-motion';

export default function FeaturedQuotes({ block }) {
  return (
    <section className={styles.quotes + ` noise`}>
      <Container>
        {block.quotes.length > 0 &&
          block.quotes.map((item) => {
            return (
              <blockquote key={item._key}>
                <motion.div>
                  <RichTextRenderer blocks={item.quote.quote} />
                </motion.div>
                <footer>
                  <h4>{item.quote.name}</h4>
                  <cite>
                    <h5>
                      {item.quote.title}, {item.quote.company.name}
                    </h5>
                  </cite>
                </footer>
              </blockquote>
            );
          })}
      </Container>
    </section>
  );
}
