import { FirstSignIn } from "../components/Sign in/FirstSignIn";
import styles from '../components/Sign in/Sign.module.scss'
import { SecSignUp } from "../components/SignUp/SecSignUp";

export const SignUp = () => {
  return (
    <section className={styles.main}>
      <div className={styles.inside_section}>
        <FirstSignIn />
        <SecSignUp />
      </div>
    </section>
  )
}
