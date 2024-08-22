import { Link } from "react-router-dom";
import { FormSign } from "./FormSign";
import { SocialBtn } from "./SocialBtn";
import styles from "./Sign.module.scss"

export const SecSign = () => {

  return (
    <div className={styles["form-main"]}>
      <div className={styles["form-logo"]}>
        <img src="/Signlogo.png" alt="" />
        <h1>Sign In</h1>
      </div>
    <FormSign />
    <div className={styles.or_lines}>
        <h3>Or</h3>
        </div>   
        <SocialBtn />

          <div className={styles.h_with_register_main}>
        <h3 className="text-center text-[0.9rem] my-3 text-[#828282]">Have no account yet?</h3>
        <Link to="/signup"  ><button className={styles.register_btn}>Registration</button> </Link >
          </div>


    </div>

  );
};

