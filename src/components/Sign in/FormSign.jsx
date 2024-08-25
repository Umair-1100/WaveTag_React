import { useState } from "react";
import { Email, Eye, Lock } from "../../icon/Add";
import { useNavigate } from "react-router";
import styles from "./Sign.module.scss"


export const FormSign = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hide, setHide] = useState("password");
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    if (!email || !password) {
      alert("Please fill all fields.");
      return;
    }
    if (email || password) {
      if (!email.includes("@gmail.com")) {
        alert("Please include '@' and 'gmail.com' in email address");
        return;
      }
    }

    e.preventDefault();
    const data = { email, password };
    setEmail("");
    setPassword("");
    navigate("/home");
  };

  return (
    <form onSubmit={handleFormSubmit} >
      <div className={styles["email-input"]}>
        <span>
          <Email />
        </span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      <div className={styles["email-input"]}>
        <span>
          <Lock />
        </span>
        <input
          type={hide}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <pre
          className={styles["eye_form-icon"]}
          onClick={() => setHide(hide === "password" ? "text" : "password")}
        >
          <Eye />
        </pre>
      </div>

      <div className={styles["forget-pass"]}>
        <p>Forgot password?</p>
      </div>
      <div className={styles.login_main_btn}>
      <button className={styles.login_btn} type="submit" onClick={handleFormSubmit}>
        Log in
      </button>
      </div>
    </form>
  );
};
