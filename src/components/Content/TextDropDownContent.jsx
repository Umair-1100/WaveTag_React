import { Toggle } from "../DumpComponent/Toggle";
import Dropdown from 'react-dropdown'; import 'react-dropdown/style.css';
import { Delete, Dots, EditPen, Search } from "../../icon/Add";
import styles from "./Content.module.scss";


export const TextDropDownContent = () => {
  const options = [ '#StandWithGaza', '#StandWithPakistan' ];
  const defaultOption = options[0];
  return (
    <>

<div className={styles.snapchat_vidgits_main}>
        <div className={styles.dots_edit_text}>
          <Dots />
          <div className={styles.edit_text_div}>
            <h1 className="flex ml-6 gap-4">
              My Snapchat <EditPen />
            </h1>
            <p className="flex ml-6 gap-4">
              https://snapchat.com/username231 <EditPen />
            </p>
          </div>
        </div>

        <div className={styles.toggle_delete_icon}>
          <Toggle />
          <Delete />
        </div>
      </div>
      <div className={styles.support_banner}>
        <h1>Support Banner</h1>

        <div className={styles.main_of_support_banner}>
          <div className={styles.show_support_banner}>
            <h1>Show Your Support</h1>
            <p>
              Show Your Support for important causes with a profile banner.Only
              one banner can be active at a time.
            </p>
          </div>

          <div className={styles.toggle_of_support_banner}>
            <Toggle />
          </div>
        </div>
      </div>

      <div className={styles.drop_down_div_cause}>
        <h1>Choose a Cause</h1>
      <Dropdown
        options={options}
        value={defaultOption}
        placeholder="Select an option"
        className="outline-none border-none"
        arrowClassName={styles.myArrowClassName}
      />
        </div> 

    </>
  )
}
