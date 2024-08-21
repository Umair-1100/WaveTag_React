import { Outlet } from "react-router";
import { EditNavbar } from "../components/My Card/EditNavbar";
import styles from "../components/My Card/mycard.module.scss";
import MyCardNav from "../components/My Card/MyCardNav";
import { Preview } from "../components/Pieview/Preview";

const CardLayout = ({ Children }) => {
  return (
    <section className={styles.MyCard_section}>
      <MyCardNav />
      <div className={styles.main_of_edit_and_preview}>
        <div className={styles.First_child_of_edit_and_preview}>
          <EditNavbar />

          <Outlet />
        </div>
        <Preview />
      </div>
    </section>
  );
};

export default CardLayout;
