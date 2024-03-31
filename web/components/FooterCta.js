import Link from "next/link";
import styles from "./FooterCta.module.scss";
import Container from "./Container";
import { motion } from "framer-motion";
import { motionSettings } from "../utils/motionSettings";

export default function FooterCta({ title, subtitle, link, button }) {
  return (
    <section className={styles.cta}>
      <Container>
        <motion.div
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
          variants={motionSettings}
          transition={{ duration: motionSettings.transitionDuration }}
        >
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <Link href={"/contact"} className="button" title={button}>
            {button}
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
