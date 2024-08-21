import styles from "./Integration.module.scss";

const IntegrationDescription = () => {
  return (
    <div className={styles.integrationDescription_main}>
      <div className={styles.integra_text}>
        <h1>Stay tune</h1>
        <p>
          We are bringing some exciting third party integration very soon.....
        </p>
        <img src="./public/Arrow.png" alt="" />
      </div>
      <div className={styles.integra_img}>
        <img src="./public/Apps.png" alt="" />
      </div>
    </div>
  );
};

export default IntegrationDescription;
