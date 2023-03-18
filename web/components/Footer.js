import Container from "./Container";

import styles from "./Footer.module.scss";

export default function Footer({ footer }) {
  return (
    <footer className={styles.footer}>
      <Container>
        <h1>Nates Footer</h1>
      </Container>
    </footer>
  );
}
