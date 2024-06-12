import Container from './Container';
import linkResolver from '../utils/linkResolver';
import Link from 'next/link';

import styles from './Footer.module.scss';
import InlineSVG from './InlineSvg';

export default function Footer({ footer }) {
  if (footer == false) {
    return null;
  }

  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={styles.footer} data-noise="true">
      <Container>
        <Link href="/" title="Home">
          <span className={styles.logo}>
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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

        {footer.nav && (
          <nav className={styles.links}>
            {footer.nav.map((item) => {
              return (
                <div key={item._key}>
                  <Link
                    href={item.link.external_link ? item.link.external_link : linkResolver(item.link)}
                    title={item.link.title}
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
                    <Link href={platform.link} title={`Follow me on ` + platform.name} target="_blank">
                      <InlineSVG url={platform.icon} />
                      {/* <div className={styles.tooltip}>{platform.name}</div> */}
                    </Link>
                  </div>
                );
              })}
            </nav>
          </div>
        )}

        {footer.copyright && (
          <p className={styles.copyright}>
            This site is built with Sanity, Next.js, and Cloudflare Pages/Workers. It was built on Treaty One territory,
            the original lands of the Anishinaabeg, Cree, Anisininew, Dakota, and Dene peoples, and on the homeland of
            the Red River Métis Nation.
            <br />
            <br />
            &copy; {year} {footer.copyright}
          </p>
        )}
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
