import Container from "./Container";

import styles from "./Header.module.scss";

export default function Header({ header }) {
  return (
    <header className={styles.header} data-element="header">
      <Container>
        <h1>Nates Work</h1>
      </Container>
    </header>
  );
}