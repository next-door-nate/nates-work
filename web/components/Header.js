import Container from "./Container";

import styles from "./Header.module.scss";

export default function Header({ header }) {
  return (
    <header className={styles.header} data-element="header">
      <Container>
        <span className={styles.logo}>
          <span>N</span>
          <span>N</span>
        </span>
      </Container>
    </header>
  );
}
