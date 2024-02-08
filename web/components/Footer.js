import Container from "./Container";

import styles from "./Footer.module.scss";

export default function Footer({ footer }) {
  if (footer == false) {
    return null;
  }

  return (
    <footer className={styles.footer} data-noise="true">
      <Container>
        <h3>Nates Work</h3>
      </Container>
    </footer>
  );
}
