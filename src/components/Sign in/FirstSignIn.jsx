import styles from "./Sign.module.scss"
export const FirstSignIn = () => {
  return (
    <>
      <div className={styles.firstsignin}>
        <div className={styles.circle_wavelogo}>
          <img src="/logo.png" alt="" />
        </div>
        <img className={styles.group_img} src="/group.png" alt="group" />
        <h1 className={styles.wel_text}>Welcome Aboard</h1>
        <p className={styles.para_signin}>One tap tells your social story</p>
        <img className={styles.dots_img} src="/dots.png" alt="dots" />
      </div>
      <img src="/phone.png" className={styles["phone-img"]} alt="phone" />
    </>
  );
};
