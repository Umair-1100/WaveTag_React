import { Add } from "../../icon/Add";
import Heading from "../DumpComponent/Heading";
import styles from "./home.module.scss";

export const MyCardComp = ({ lable, visible,className }) => {
  return (
    <div className={styles.text_my_card}>
      <h1 className={`${styles.text_icon_plus} ${className}`}>
        <Heading title={lable} /> <Add hide={visible} />
      </h1>
    </div>
  );
};
