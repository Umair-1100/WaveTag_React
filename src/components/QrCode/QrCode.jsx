import { useState } from "react";
import { ChildOneInside } from "../My Card/ChildOneInside";
import styles from "./QrCode.module.scss";
import {QrcodeProfile} from "./QrcodeProfile";

const QrCode = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleShow = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={styles.qrcode_edit_main}>
      <div className={styles.qrcode_text_main}>
        <button onClick={handleShow}>Create Badge</button>
        <p className="my-4 text-[1.2rem]">Add Logo</p>
        <div className={styles.qrcode_text}>
          <ChildOneInside className={styles.qrcode_upload_logo} />
          <p>Add custom logo to be displayed in the middle of the QRCode.</p>
        </div>

        <p className="my-4 mt-8 text-[1.2rem]">Choose Color</p>
        <div className={styles.qrcode_colors}>
          <div className={styles.black}></div>
          <div className={styles.green}></div>
          <div className={styles.shyblue}></div>
          <div className={styles.purple}></div>
          <div className={styles.pink}></div>
        </div>
      </div>
      <div className={styles.qrcode_img}>
        <img src="/barcode.png" alt="" />
        <button>Update</button>
      </div>

      <QrcodeProfile data={isVisible} setFunc={setIsVisible}/>
    </div>
  );
};

export default QrCode;
