import { MyCardComp } from "../Home/MyCardComp";
import styles from "./insight.module.scss";

export const RecentActivity = () => {
  return (
    <div className={styles.recent_activity}>
      <MyCardComp
        lable="Recent Activity"
        visible="hidden"
        className="text-sm font-semibold ml-[-2rem]"
      />
      <div className={styles.recent_main}>
        {Array.from({ length: 11 }, () => {
          return (
            <div className={styles.recent_activity_table}>
              <img src="./public/dp_preview.png" alt="" />
              <div className={styles.recent_text}>
                <h2>John Doe</h2>
                <p>Card was Taped</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
