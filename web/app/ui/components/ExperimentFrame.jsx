import styles from './ExperimentFrame.module.scss';

export default function ExperimentFrame({ children, itemId }) {
  return (
    <section className={styles.experiment}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>UI Collection</h1>
        </div>
        <div className={styles.meta}>
          <h3>{itemId}</h3>
        </div>
      </header>

      <div className={styles.frame}>{children}</div>

      <div className={styles.grid}></div>
      <div className={styles.gridlet}></div>
    </section>
  );
}
