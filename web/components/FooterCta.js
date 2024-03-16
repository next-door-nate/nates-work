import Link from "next/link";
import styles from "./FooterCta.module.scss";

export default function FooterCta({ title, subtitle, link, button }) {
  return (
    <section className={styles.cta}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <Link href={"/contact"} className="button" title={button}>
        {button}
      </Link>
    </section>
  );
}
