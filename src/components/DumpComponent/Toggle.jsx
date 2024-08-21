import styles from "./Toggle.module.scss";

export const Toggle = () => {
  return (
    <label className={styles.switch}>
      <input type="checkbox" />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
};
