import { Toggle } from "../DumpComponent/Toggle";
import styles from "./Setting.module.scss";

const SettingMain = () => {
  const Notification = [
    {
      heading: "Recevie email notifications",
    },
    {
      heading: "Recevie monthly report via email",
    },
    {
      heading: "Send me promotional and informative content",
    },
  ];

  return (
    <div className={styles.setting_main_page_data}>
      <div className={styles.setting_main_inputs_text}>
        <div className={`${styles.inputs_data} mt-4`}>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="mymail@example.com" id="email" />
        </div>
        <div className={`${styles.inputs_data} mt-4`}>
          <label htmlFor="pass">Password</label>
          <input type="password" placeholder="**********" id="pass" />
        </div>
        <h2 className="text-xl my-3 text-[#718ebf]">Notification</h2>
        <div className={styles.notifications_main}>
          {Notification.map(({ heading }) => {
            return (
              <div className="flex gap-4 items-center justify-center">
                <Toggle/>
                <p>{heading}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.main_save_btn}>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
};

export default SettingMain;
