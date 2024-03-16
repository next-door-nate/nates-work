import Link from "next/link";
import Container from "./Container";

import styles from "./Header.module.scss";
import linkResolver from "../utils/linkResolver";

export default function Header({ header }) {
  return (
    <header className={styles.header} data-element="header">
      <Container>
        <div className={styles.wrap}>
          <Link href="/">
            <span className={styles.logo}>
              <svg
                width="40"
                height="20"
                viewBox="0 0 40 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.277 0L22.4199 19.9999H14.0817L8.97962 11.1142H8.863L7.5802 19.9999H0L2.85715 0H11.1662L16.2974 8.88565H16.414L17.6677 0H25.277Z"
                  fill="black"
                />
                <path
                  d="M40 0.00012207L37.1428 20H28.8046L23.6703 11.0621L25.2552 0.00012207L31.0204 8.88577H31.137L32.3906 0.00012207H40Z"
                  fill="black"
                  fillOpacity="0.6"
                />
              </svg>
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
