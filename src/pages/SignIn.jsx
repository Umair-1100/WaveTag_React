import { FirstSignIn } from "../components/Sign in/FirstSignIn";
import { SecSign } from "../components/Sign in/SecSign";
import styles from  "../components/Sign in/Sign.module.scss";

export const SignIn = () => {
  return (
    <section className={styles.main}>
      <div className={styles.inside_section}>
        <FirstSignIn />
        <SecSign />
      </div>
    </section>
  );
};
