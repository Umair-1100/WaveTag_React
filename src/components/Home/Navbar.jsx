import { NavLink } from "react-router-dom";
import styles from "./home.module.scss";
import {
  Bubble,
  Cards,
  ContactsIcon,
  Download,
  HomeIcon,
  Insight,
  Integration,
  Setting,
} from "../../icon/Add";

export const Navbar = () => {
  return (
    <div className={styles.main_of_navbar_items}>
      <div className={styles.navbar_of_home}>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? `${styles.activeYes} ${styles.links_of_navbar}`
              : `${styles.activeNo} ${styles.links_of_navbar}`
          }
        >
          <HomeIcon stroke={styles.icon_active_stroke} /> Home
        </NavLink>

        <NavLink
          to="/mycard"
          className={({ isActive }) =>
            isActive
              ? `${styles.activeYes} ${styles.links_of_navbar}`
              : `${styles.activeNo} ${styles.links_of_navbar}`
          }
        >
          <Cards fill={styles.icon_active} /> My Cards
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? `${styles.activeYes} ${styles.links_of_navbar}`
              : `${styles.activeNo} ${styles.links_of_navbar}`
          }
        >
          <ContactsIcon fill={styles.icon_active} /> Contacts
        </NavLink>

        <NavLink
          to="/accessories"
          className={({ isActive }) =>
            isActive
              ? `${styles.activeYes} ${styles.links_of_navbar}`
              : `${styles.activeNo} ${styles.links_of_navbar}`
          }
        >
          <Bubble stroke={styles.icon_active_stroke} /> Accessories
        </NavLink>

        <NavLink
          to="/insight"
          className={({ isActive }) =>
            isActive
              ? `${styles.activeYes} ${styles.links_of_navbar}`
              : `${styles.activeNo} ${styles.links_of_navbar}`
          }
        >
          <Insight fill={styles.icon_active} /> Insight
        </NavLink>

        <NavLink
          to="/integration"
          className={({ isActive }) =>
            isActive
              ? `${styles.activeYes} ${styles.links_of_navbar}`
              : `${styles.activeNo} ${styles.links_of_navbar}`
          }
        >
          <Integration fill={styles.icon_active} /> Integrations
        </NavLink>

        <NavLink
          to="/setting/edit"
          className={({ isActive }) =>
            isActive
              ? `${styles.activeYes} ${styles.links_of_navbar}`
              : `${styles.activeNo} ${styles.links_of_navbar}`
          }
        >
          <Setting fill="#718EBF" /> Settings
        </NavLink>

          <span onClick={() => alert("Sorry App is not avaible!")} className={`${styles.download_span} ${styles.links_of_navbar}`}>
            Download App <Download fill="#1814F3" />
          </span>
      </div>
    </div>
  );
};
