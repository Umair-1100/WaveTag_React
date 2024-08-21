import styles from "./Content.module.scss";
import { Delete, Dots } from "../../icon/Add";
import { Toggle } from "../DumpComponent/Toggle";

export const Vidgits = () => {
  const vidgits = [
    {
      title: "Email",
      img_url: "/Email.png",
    },
    {
      title: "LinkedIn",
      img_url: "/LinkedIn.png",
    },
    {
      title: "Call",
      img_url: "/Call.png",
    },
    {
      title: "Message",
      img_url: "/Phone.png",
    },
    {
      title: "Instagram",
      img_url: "/Instagram.png",
    },
    {
      title: "Snapchat",
      img_url: "/Snapchat.png",
    },
  ];
  return (
    <>
      {vidgits.map(({ title, img_url }) => {
        return (
          <div className={styles.vidgits_of_social}>
            <div className={styles.mix_of_dots_icon_text}>
              <Dots />
              <img src={img_url} alt="Email" />
              <h1>{title}</h1>
            </div>
            <div className={styles.mix_of_toggle_delete}>
              <Toggle />
              <Delete />
            </div>
          </div>
        );
      })}
    </>
  );
};
