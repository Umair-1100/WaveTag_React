import { useState } from "react";
import styles from "./home.module.scss";
import { Close, Copy, NextTab } from "../../icon/Add";

export const ShareCard = ({ data, setFunc }) => {
  const [none, setNone] = useState(true);
  const [copy, setCopy] = useState("Copy Link");

  const handleNone = () => {
    setNone(!none);
    setFunc(!data);
  };

  let text = "https://wavetag.netlify.app";
  const handleTextCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopy("Copied");
      setTimeout(() => {
        setCopy("Copy Link");
      }, 2000);
    });
  };

  return (
    <>
      {data && (
        <div className={styles.showing_small_div}>
          <div className={styles.showing_small_inside}>
            <div className={styles.scan_to_get_moblie}>
              <div className={styles.text_mobile_for_app}>
                <h1>Scan to get the mobile app</h1>
                <p>
                  Download the Pop! mobile app to share and edit <br /> your
                  digital business card on the go
                </p>
              </div>

              <div className={styles.pic_of_qr_code}>
                <img src="/qrcode.png" alt="qrCode" />
              </div>

              <div className={styles.close_icon_cross}>
                <button onClick={handleNone}>
                  <Close />
                </button>
              </div>
            </div>

            <div className={styles.copy_card_link}>
              <h1>Copy Card Link</h1>
              <div className={styles.copy_icon_parent}>
                <span>{text}</span>
                <button
                  onClick={handleTextCopy}
                  className={styles.copy_clip_path_btn}
                >
                  <Copy />
                  {copy}
                </button>
              </div>
            </div>

            <div className={styles.share_card_inside_small}>
              <h1>Share Card</h1>
              <div className={styles.div_of_social_links_parent}>
                <div className={styles.child_of_social_links_parent}>
                  <h1 className="flex gap-2">
                    <img src="./public/Email.png" alt="Email" /> Email
                  </h1>
                  <a href="http://email.com" target="_blank">
                    <NextTab />
                  </a>
                </div>
                <div className={styles.child_of_social_links_parent}>
                  <h1 className="flex gap-2">
                    <img src="./public/LinkedIn.png" alt="LinkedIn" /> LinkedIn
                  </h1>
                  <a href="http://linkedin.com" target="_blank">
                    <NextTab />
                  </a>
                </div>
                <div className={styles.child_of_social_links_parent}>
                  <h1 className="flex gap-2">
                    <img src="./public/Facebook.png" alt="Facebook" /> Facebook
                  </h1>
                  <a href="http://facebook.com" target="_blank">
                    <NextTab />
                  </a>
                </div>
                <div className={styles.child_of_social_links_parent}>
                  <h1 className="flex gap-2">
                    <img src="./public/Whatsapp.png" alt="Whatsapp" /> Whatsapp
                  </h1>
                  <a href="http://whatsapp.com" target="_blank">
                    <NextTab />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
