import { useState } from "react";
import styles from "./QrCode.module.scss";
import {
  Close,
  FrameBadge,
  FrameSquare,
  FrameTag,
} from "../../icon/Add";

export const QrcodeProfile = ({ data, setFunc }) => {
  const [none, setNone] = useState(true);

  const handleNone = () => {
    setNone(!none);
    setFunc(!data);
  };

  let text = "https://www.wavetag.netlify.app";
  const handleTextCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert("text Copied");
    });
  };

  const frames = [
    {
      icon: <FrameBadge />,
      title: "Badge",
    },
    {
      icon: <FrameTag />,
      title: "Name Tag",
    },
    {
      icon: <FrameSquare />,
      title: "Square",
    },
  ];
  const checkboxs = [
    {
      id: 1,
      headig: "Profile Photo",
    },
    {
      id: 2,
      headig: "Name",
    },
    {
      id: 3,
      headig: "Job Title",
    },
    {
      id: 4,
      headig: "Company",
    },
  ];
  const checkboxsSec = [
    {
      id: 5,
      headig: "Location",
    },
    {
      id: 6,
      headig: "Qr Code",
    },
    {
      id: 7,
      headig: "Call To Action",
    },
    {
      id: 8,
      headig: "Qr Code Logo",
    },
  ];

  return (
    <>
      {data && (
        <div className={styles.showing_small_div}>
          <div className={styles.showing_small_inside}>
            <div className={styles.full_main_first}>
              <div className={styles.scan_to_get_moblie}>
                <div className={styles.text_mobile_for_app}>
                  <h1>Event Badges</h1>
                  <p>
                    Download the Pop! mobile app to share and edit your digital
                    business card on the goDownload the Pop! mobile app to share
                    and edit your digital business card on the go
                  </p>
                </div>
              </div>
              <div className={styles.qrcode_main_screen}>
                {frames.map(({ icon, title }) => {
                  return (
                    <div className={styles.qrcode_main_badge}>
                      {icon}
                      <h3>{title}</h3>
                      <input
                        type="checkbox"
                        className="w-5 h-5 bg-[#dcdcdc] border-[#dcdcdc]"
                      />
                    </div>
                  );
                })}
              </div>
              <div className={styles.share_card_inside_small}>
                <div className="Add_card_inside_main">
                  {checkboxs.map(({ headig, id }) => {
                    return (
                      <div
                        className={`${styles.add___card} flex items-center gap-2`}
                      >
                        <input
                          type="checkbox"
                          id={`check${id}`}
                          className="w-5 h-5 rounded-md border-[#dcdcdc] outline-none shadow-none"
                        />
                        <label
                          htmlFor={`check${id}`}
                          className="flex items-center gap-2"
                        >
                          {headig}
                        </label>
                      </div>
                    );
                  })}
                </div>
                <div className="Add_card_inside_main">
                  {checkboxsSec.map(({ headig, id }) => {
                    return (
                      <div
                        className={`${styles.add___card} flex items-center gap-2`}
                      >
                        <input
                          type="checkbox"
                          id={`check${id}`}
                          className="w-5 h-5 cursor-pointer rounded-md border-[#dcdcdc] outline-none shadow-none"
                        />
                        <label htmlFor={`check${id}`}>{headig}</label>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles.Call_action_copy_main}>
                <h2>Call To Action Text</h2>
                <p onClick={handleTextCopy}>{text}</p>
              </div>
              <div className={styles.buttons_all_main}>
                <button className={styles.button_all_one}>Cancel</button>
                <button>Download</button>
                <button>Print</button>
              </div>
            </div>
            <div className={styles.showing_small_div_sec}>
              <div className={styles.close_icon_cross}>
                <button onClick={handleNone}>
                  <Close />
                </button>
              </div>
              <div className={styles.showing_all_data_main}>
                <img
                  className={styles.showing_img_one}
                  src="/badgedp.jpg"
                  alt=""
                />
                <h1>Muntaha Zahid</h1>
                <p>UI UX Design</p>
                <h2>Thinker's</h2>
                <img
                  className={styles.showing_img_sec}
                  src="/barcode.png"
                  alt=""
                />
                <h3>Scan to Connect</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
