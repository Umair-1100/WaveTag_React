import { useState } from "react";
import styles from "./Content.module.scss";
import { Close, Plus, Search } from "../../icon/Add";
import { ArraySocialLinks } from "./ArraySocialLinks";

export const ContentModal = ({
  data,
  setFunc,
  cardNumber,
  display,
  heading,
  lenght
}) => {
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
                <h1>Add Social</h1>
                <p>Choose from our extension range of links.</p>
              </div>

              <div className={styles.pic_of_qr_code}>
                <Search />
                <input
                  type="search"
                  placeholder="Search here..."
                  name=""
                  id=""
                />
              </div>

              <div className={styles.close_icon_cross}>
                <button onClick={handleNone}>
                  <Close />
                </button>
              </div>
            </div>

            {Array.from({ length: lenght }, () => {
              return (
                <ArraySocialLinks
                  Number={cardNumber}
                  Visible={display}
                  Header={heading}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
