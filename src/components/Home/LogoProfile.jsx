import { useState } from "react";
import { WaveLogo, Setting, Bell } from "../../icon/Add";
import styles from "./home.module.scss";

export default function LogoProfile() {
  const [hide, setHide] = useState(false);

  const handleHide = () => {
    setHide(!hide);
  };

  return (
    <div className={styles.logo_profile}>
      <div className={styles.logo_of_card}>
        <WaveLogo />
      </div>
      <div className={styles.profile_setting}>
        <Setting fill="#718ebf" />
        <Bell fill="#FE5C73" click={handleHide} />
        <img
          src="/blog-dp.jpg"
          alt="profile pic"
          className={styles.profile_picture}
        />

        {hide && (
          <div className={styles.notification_hidden}>
            <div className={styles.notification_text}>
              <p>New Notification</p>
              <p>Mark as Read</p>
            </div>

           {Array.from({length:2 },() => {
            return (
              <div className={styles.inner_notificaiton}>
              <Bell fill="#4d4d4d" />
              <span>
                <h2>Lorem ipsum diont</h2>
                <p>Lorem ipsum diont</p>
                <h3>1 hour ago</h3>
              </span>
            </div>
            )
           })}
            
          </div>
        )}
      </div>
    </div>
  );
}
