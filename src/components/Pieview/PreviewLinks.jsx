import styles from "./Preview.module.scss";

export const PreviewLinks = () => {
  return (
    <>
      <h3>Thumbnail Preview</h3>
      <div className={styles.preview_join_links}>
        <img src="/Thumbnail.png" alt="" />
        <p>Join Me On Twitch</p>
      </div>
      <h3>Sample Links</h3>
      <div className={`${styles.preview_join_links} ${styles.preview_join_2}`}>
        <img src="/Thumbnail2.png" alt="" />
        <p className="ml-5">astrofunk.lol</p>
      </div>
      <div className={`${styles.preview_join_links} ${styles.preview_join_2}`}>
        <img src="/Thumbnail3.png" alt="" />
        <p>Latest Youtube Video</p>
      </div>
    </>
  );
};
