import { TriangleIcon } from "../../icon/Add";
import Api from "../../Api/Insight_card.json";
import styles from "./insight.module.scss";


export const InsightCards = () => {
  return (
    <div className={styles.insight_cards}>
        {Api.map(({ img_url, title, rating }) => {
          return (
            <div className={styles.insight_inner_cards}>
              <div className={styles.circle_insight_card}>
                <img src={img_url} alt="" />
              </div>
              <div className={styles.text_insight_card}>
                <h1>{title}</h1>
                <p className="flex items-center">
                  <pre>{rating}</pre>
                  <TriangleIcon />
                  <span>100%</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
  )
}
