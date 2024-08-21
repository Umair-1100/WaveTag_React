import {
  PieviewEmail,
  PieviewInstsgram,
  PieviewMusic,
  PieviewYoutube,
  Twitter,
} from "../../icon/Add";
import styles from "./Preview.module.scss";
import { PreviewLinks } from "./PreviewLinks";

export const Preview = () => {
  return (
    <>
    <div className={styles.second_preview_child_main}>
      <h1 className="text-[1.4rem]">Preview</h1>
      <div className={styles.second_preview_child}>
        <div className={styles.bell_of_preview}>
          <img src="/bell_preview.png" alt="bell_preview" />
        </div>

        <div className={styles.dp_preview_arrow}>
          <img
            src="/dp_preview.png"
            alt="dp img"
            className={styles.dp_preview_img}
          />
          <h1 className="flex items-center gap-[0.3rem]">
            AstroFunk <img src="/ON.png" alt="" />
          </h1>
          <p>@astrofunk_93</p>

          <div className={styles.icons_pieview}>
            <a href="http://www.email.com" target="_blank"><PieviewEmail /></a>
            <a href="http://www.music.com" target="_blank"><PieviewMusic /></a>
            <a href="http://www.instagram.com" target="_blank"><PieviewInstsgram /></a>
            <a href="http://www.youtube.com" target="_blank"><PieviewYoutube /></a>
            <a href="http://www.twitter.com" target="_blank"><Twitter /></a>
          </div>

          

          <PreviewLinks/>
        </div>
      </div>
    </div>
    </>
  );
};
