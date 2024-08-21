import styles from "./Content.module.scss";
import { AddSocialBtns } from "./AddSocialBtns";
import { Delete, Dots, EditPen, Search } from "../../icon/Add";
import { AddIconBtn } from "./AddIconBtn";
import { ContentModal } from "./ContentModal";
import { useState } from "react";
import { TextDropDownContent } from "./TextDropDownContent";

const ContentSec = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isEnable, setIsEnable] = useState(true);
  const [empty, setEmpty] = useState("");

  const handleShow = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className={styles.main_of_Add_content_sec}>
      <AddSocialBtns />
      <AddIconBtn data={handleShow} />
      <div className={styles.heading_title_input}>
        <div className={styles.dot_input_pen}>
          <Dots />
          <input
            type="text"
            value={empty}
            onChange={(e) => setEmpty(e.target.value)}
            disabled={isEnable}
            placeholder="Heading Title"
          />
        </div>
        <div className={styles.delete_icone_content}>
          <span onClick={() => setIsEnable(!isEnable)}>
            <EditPen />
          </span>
          <span onClick={() => setEmpty("")}>
            <Delete />
          </span>
        </div>
      </div>
      <div className={styles.title_url_inputs}>
        <div className={styles.dots_title_url}>
          <Dots />
          <div className={styles.input_title_url}>
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="URL" />
          </div>
        </div>
        <div className={styles.sec_delete_icon}>
          <span className="flex flex-col gap-4">
            <EditPen />
            <EditPen />
          </span>
          <Delete />
        </div>
      </div>
      <TextDropDownContent />
      <ContentModal
        lenght={2}
        heading="Share Your Content"
        Visible="hidden"
        cardNumber={7}
        data={isVisible}
        setFunc={setIsVisible}
      />
    </div>
  );
};

export default ContentSec;
