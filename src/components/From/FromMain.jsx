import { Warning } from "../../icon/Add";
import styles from "./Froms.module.scss";
import { Toggle } from "../DumpComponent/Toggle";

const FromMain = () => {
  const input = [
    {
      name: "Full Name",
      type: "text",
    },
    {
      name: "Email",
      type: "email",
    },
    {
      name: "Phone",
      type: "number",
    },
    {
      name: "Job Title",
      type: "text",
    },
    {
      name: "Company",
      type: "text",
    },
    {
      name: "Note",
      type: "text",
    },
  ];

  return (
    <div className={styles.from_main_inputs}>
      <div className={styles.feature_btn_blog}>
        <h1>Lead Capture: </h1>
        <Toggle />
      </div>
      <div className={styles.header_input_main}>
        <label htmlFor="input">Form Header</label>
        <input
          id="input"
          placeholder="Share your info back with Thinker's"
          type="text"
        />
      </div>
      <div className={styles.header_input_Text}>
        <p>Input Field</p>
        <button>Add Field</button>
      </div>

      <div className={styles.input_check_main}>
        {input.map(({ name, type }) => {
          return (
            <div className={styles.input_check}>
              <input type={type} placeholder={name} />
              <label className={styles.switch}>
                <input type="checkbox" />
                <span className={`${styles.slider} ${styles.round}`}></span>
              </label>
            </div>
          );
        })}
      </div>

      <div className={styles.from_disclaimer_main}>
        <h1>
          From Disclaimer <Warning />
        </h1>
        <textarea
          rows="5"
          placeholder="Share your info back with Thinker's"
        ></textarea>
      </div>
      <div className={styles.From_main_update_btn}>
        <button>Update</button>
      </div>
    </div>
  );
};

export default FromMain;
