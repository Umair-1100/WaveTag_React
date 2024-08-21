import { useEffect, useState } from "react";
import LogoProfile from "../Home/LogoProfile";
import { Navbar } from "../Home/Navbar";
import { MyCardComp } from "../Home/MyCardComp";
import styles from "./insight.module.scss";
import LineChart from "../../utils/Charts/LineChart";
import { InsightCards } from "./InsightCards";
import { TappedLinks } from "./TappedLinks";
import { RecentActivity } from "./RecentActivity";
import { Traffic } from "./Traffic";
import { Calender } from "../../icon/Add";

export const InsightMain = () => {
  const [today, setToday] = useState();

  useEffect(() => {
    const newDate = new Date();
    const date = newDate.toLocaleDateString();
    setToday(date);
  }, []);

  return (
    <section className={styles.insight_main}>
      <LogoProfile />
      <Navbar />
      <div className={styles.insight_heading}>
        <MyCardComp
          lable="Insight"
          visible="hidden"
          className="font-semibold"
        />
        <div className={styles.insight_date_calender}>
          <Calender />
          <h1>
            Last 30 Days <span>August 12,2023 - {today}</span>
          </h1>
        </div>
      </div>
      <InsightCards />
      <div className={styles.charts_parent_div}>
        <div className={styles.charts_main}>
          <div className={styles.charts_upper_div}>
            <div className={styles.charts_line_1}>
              <MyCardComp
                lable="Views Over Times"
                visible="hidden"
                className="text-sm font-semibold ml-[-2rem]"
              />
              <LineChart color="#ffb732" />
            </div>
            <div className={styles.charts_line_2}>
              <MyCardComp
                lable="Leads Generated"
                visible="hidden"
                className="text-sm font-semibold ml-[-1rem]"
              />
              <LineChart color="#16DBCC" />
            </div>
          </div>
          <TappedLinks />
        </div>
        <RecentActivity />
      </div>
      <Traffic />
    </section>
  );
};
