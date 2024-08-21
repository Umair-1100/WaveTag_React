
import { MyCardComp } from "../Home/MyCardComp";
import styles from "./insight.module.scss";
import { Band } from "./Band";
import { PieChart, PieChartSec } from "../../utils/Charts/PieChart";


export const Traffic = () => {
  return (
   
    <div className={styles.traffic}>
    <div className={styles.traffic_type}>
      <MyCardComp
        lable="Traffic Type"
        visible="hidden"
        className="text-sm font-semibold ml-[-2rem]"
      />
      <div className={styles.pie_chart}>
        <div className={styles.pie_chart_main}>
          <p className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#67ddc1]"></div> Direct
            on <span>50%</span>
          </p>
          <p className="flex items-center gap-3 my-2">
            <div className="w-5 h-5 rounded-full bg-[#50bef9]"></div>Direct
            off <span>18%</span>
          </p>
          <p className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#efa4f5]"></div>Share
            <span>100%</span>
          </p>
        </div>
        <div className={styles.pieChart_code}>
          <PieChart />
        </div>
      </div>
    </div>
    <div className={styles.active_access}>
      <MyCardComp
        lable="Most Active Accessories"
        visible="hidden"
        className="text-sm font-semibold ml-[-2rem]"
      />
      <div className={styles.inside_of_active}>
        <Band num="1" title="Band" className="mr-[2rem]" />
        <Band num="6" title="Card" className="mr-[1.5rem]" />
        <Band num="4" title="Keychain" className="mr-[3.5rem]" />
      </div>
    </div>
    <div className={styles.view_type}>
      <MyCardComp
        lable="View Type"
        visible="hidden"
        className="text-sm font-semibold ml-[-2rem]"
      />

      <div className={styles.pie_chart_2}>
        <div className={styles.pie_chart_main_2}>
          <p className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#67ddc1]"></div> Direct
            on <span>50%</span>
          </p>
          <p className="flex items-center gap-3 my-2">
            <div className="w-5 h-5 rounded-full bg-[#50bef9]"></div>Direct
            off <span>18%</span>
          </p>
          <p className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#efa4f5]"></div>Share
            <span>100%</span>
          </p>
        </div>
        <div className={styles.pieChart_code_2}>
          <PieChartSec />
        </div>
      </div>
    </div>
  </div>
  )
}
