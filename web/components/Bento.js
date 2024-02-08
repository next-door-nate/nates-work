import styles from "./Bento.module.scss";
import Container from "./Container";

export default function Bento({ bento }) {
  return (
    <section className={styles.bento}>
      <Container>
        <h2>{bento.title}</h2>
        <p>Bento</p>

        {bento.box &&
          bento.box.map((item) => {
            return (
              <div className={styles.box}>
                <figure className={styles.graphic}>
                  <div>graphic</div>
                </figure>
                <div className={styles.content}>
                  <h2>{item.title}</h2>
                </div>
              </div>
            );
          })}
      </Container>
    </section>
  );
}
