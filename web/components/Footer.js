import Container from "./Container";

import styles from "./Footer.module.scss";

export default function Footer({ footer }) {
  return (
    <Container>
      <footer className={styles.footer} data-noise="true">
        <h3>Nates Work</h3>
      </footer>
    </Container>
  );
}
