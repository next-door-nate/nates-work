import styles from "./Container.module.scss";

export default function Container({ children, type }) {
  return (
    <div className={styles.container} data-container={type}>
      {children}
    </div>
  );
}
