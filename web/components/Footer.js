import Container from "./Container";
import linkResolver from "../utils/linkResolver";
import Link from "next/link";

import styles from "./Footer.module.scss";
import InlineSVG from "./InlineSvg";

export default function Footer({ footer }) {
  if (footer == false) {
    return null;
  }

  return (
    <footer className={styles.footer} data-noise="true">
      <Container>
        <Link href="/">
          <span className={styles.logo}>
            <span>N</span>
            <span>N</span>
          </span>
        </Link>

        {footer.nav && (
          <nav>
            {footer.nav.map((item) => {
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

        {footer.social && (
          <div className={styles.social}>
            <nav>
              {footer.social.map((platform) => {
                return (
                  <div key={platform._key}>
                    <Link
                      href={platform.link}
                      title={`Follow me on ` + platform.name}
                      target="_blank"
                    >
                      <InlineSVG url={platform.icon} />
                      {/* <div rclassName={styles.tooltip}>{platform.name}</div> */}
                    </Link>
                  </div>
                );
              })}
            </nav>
          </div>
        )}

        {footer.copyright && <p className={styles.copyright}>&copy; {footer.copyright}</p>}
      </Container>

      <div className={styles.background}>
        <span className={styles.name}>
          <div className={styles.first}>
            <span>N</span>
            <span>a</span>
            <span>t</span>
            <span>e</span>
          </div>
          <div className={styles.space}>
            <span>&nbsp;</span>
          </div>
          <div className={styles.last}>
            <span>v</span>
            <span>a</span>
            <span>n</span>
            <span>&nbsp;</span>
            <span>d</span>
            <span>e</span>
            <span>r</span>
            <span>&nbsp;</span>
            <span>V</span>
            <span>i</span>
            <span>s</span>
            <span>
              <sup>&reg;</sup>
            </span>
          </div>
        </span>
      </div>
    </footer>
  );
}
