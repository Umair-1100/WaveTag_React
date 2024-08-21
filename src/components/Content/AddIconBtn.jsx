import { Plus } from "../../icon/Add"
import styles from "./Content.module.scss";

export const AddIconBtn = ({data}) => {
  return (
    <div className={styles.main_of_add_btn}>
        <button onClick={data} className={styles.add_btn_social}>
          <Plus stroke="#1814F3" /> Add
        </button>
      </div>
  )
}
