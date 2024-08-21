import styles from "./Content.module.scss";
import { Vidgits } from "./Vidgits";
import { AddSocialBtns } from "./AddSocialBtns";
import { IconPlace } from "./IconPlace";
import { ContentModal } from "./ContentModal";
import { useState } from "react";
import { AddIconBtn } from "./AddIconBtn";

const ContentMain = () => {
const [isVisible , setIsVisible] = useState(false);
const handleShow = () => {
  setIsVisible(!isVisible)
}
  return (
    <div className={styles.content_main_page}>
      <AddSocialBtns />

       <AddIconBtn  data={handleShow} /> 
      <div className={styles.parent_of_social_add}>
        <Vidgits />
      </div>
      <div className="ml-5">
        <IconPlace/>
      </div>
      <ContentModal lenght={1} cardNumber={25} display="hidden" data={isVisible} setFunc={setIsVisible}/>
    </div>
  );
};

export default ContentMain;
