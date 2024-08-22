import styles from "./Sign.module.scss"

export const SocialBtn = () => {
  return (
    <div className={styles.social_btn_main}>
        <a className={styles.social_btn} target="_blank"  href="https://www.google.com/">
        <img src="/Google.png" alt="" />
        Google
        </a>
        <a className={styles.social_btn} href="https://www.facebook.com/" target="_blank">
        <img src="/facebook.png" alt="" />
        FaceBook</a>
    </div>

  )
}
