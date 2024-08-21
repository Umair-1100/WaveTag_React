import styles from "../Suport/Support.module.scss";


const FeatureRequest = () => {
  return (
    <div className={styles.support_page_full_main}>
    <div className={styles.main_page_support}>
      <h3>Request Feature</h3>
        <p>Do you have an idea for s feature that would make our services even better for you? let us know!</p>
      <h2>Message</h2>
      <textarea
        id="message"
        cols="30"
        rows="10"
        placeholder="Message..........."
      ></textarea>
      <div className="w-full my-4 text-center">
        <button className={styles.Support_btn}>Send Request</button>
      </div>
    </div>
  </div>
  )
}

export default FeatureRequest