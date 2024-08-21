import { useState } from "react";
import styles from "./mycard.module.scss";
import { Brush } from "../../icon/Add";

export const CardTitleCom = () => {
    const [enable,setEnable] = useState(true);

  return (
    <div className={styles.Card_title}>
    <p>Card Title :</p>
        <div className={styles.inp_brush_combine}>
    <input disabled={enable} type="text" placeholder="Charlene Reed" />
    <span onClick={() => setEnable(!enable)} className="cursor-pointer" ><Brush  /></span>
    </div>
  </div>

  )
}
