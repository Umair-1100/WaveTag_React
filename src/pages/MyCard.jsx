import styles from "../components/My Card/mycard.module.scss";
import { EditNavbar } from "../components/My Card/EditNavbar";
import { Preview } from "../components/Pieview/Preview";
import FormAbout from "../components/My Card/FormAbout";
import MyCardNav from "../components/My Card/MyCardNav";

export const MyCard = () => {
  return (
    <section className={styles.MyCard_section}>
     <MyCardNav/>
      <div className={styles.main_of_edit_and_preview}>
        <div className={styles.First_child_of_edit_and_preview}>
          <EditNavbar />
          <FormAbout/>
        </div>
        <Preview />
      </div>
    </section>
  );
};
