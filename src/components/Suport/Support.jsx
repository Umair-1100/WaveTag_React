import styles from "./Support.module.scss";

const Support = () => {
  return (
    <div className={styles.support_page_full_main}>
      <div className={styles.main_page_support}>
        <h1>Subject</h1>
        <input type="text" id="subject" placeholder="Write your subject" />
        <h2>Message</h2>
        <textarea
          id="message"
          cols="30"
          rows="10"
          placeholder="Write your message..."
        ></textarea>
        <div className="w-full my-4 text-center">
          <button className={styles.Support_btn}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Support;
