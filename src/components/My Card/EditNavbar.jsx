import styles from "./mycard.module.scss";
import { NavLink } from "react-router-dom";

export const EditNavbar = () => {
  return (
    <div className={styles.edit__navbar_of_pages}>
      <ul>
        <NavLink
          to="/mycard/about"
          className={({isActive}) =>
            isActive ? `${styles.activeYes}` : `${styles.activeNo}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/mycard/content"
          className={({isActive}) =>
            isActive ? `${styles.activeYes}` : `${styles.activeNo}`
          }
        >
          Content
        </NavLink>
        <NavLink
          to="/mycard/blog"
          className={({isActive}) =>
            isActive ? `${styles.activeYes}` : `${styles.activeNo}`
          }
        >
          Blog
        </NavLink>

        <NavLink
          to="/mycard/qrcode"
          className={({isActive}) =>
            isActive ? `${styles.activeYes}` : `${styles.activeNo}`
          }
        >
          QR Code
        </NavLink>
        <NavLink
          to="/mycard/froms"
          className={({isActive}) =>
            isActive ? `${styles.activeYes}` : `${styles.activeNo}`
          }
        >
          Forms
        </NavLink>

        <NavLink
          to="/mycard/themes"
          className={({isActive}) =>
            isActive ? `${styles.activeYes}` : `${styles.activeNo}`
          }
        >
          Themes
        </NavLink>

        <NavLink
          to="/mycard/accessorie"
          className={({isActive}) =>
            isActive ? `${styles.activeYes}` : `${styles.activeNo}`
          }
        >
          Accessories
        </NavLink>
      </ul>
    </div>
  );
};
