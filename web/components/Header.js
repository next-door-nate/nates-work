import Link from "next/link";
import Container from "./Container";

import styles from "./Header.module.scss";
import linkResolver from "../utils/linkResolver";

export default function Header({ header }) {
  console.log(header);
  return (
    <header className={styles.header} data-element="header">
      <Container>
        <div className={styles.wrap}>
          <Link href="/">
            <span className={styles.logo}>
              <span>N</span>
              <span>N</span>
            </span>
          </Link>

          {header.nav && (
            <nav>
              {header.nav.map((item) => {
                return (
                  <div key={item._key}>
                    <Link
                      href={
                        item.link.external_link ? item.link.external_link : linkResolver(item.link)
                      }
                    >
                      {item.link.title}
                    </Link>
                  </div>
                );
              })}
            </nav>
          )}
        </div>
      </Container>
    </header>
  );
}
