import styles from "./contacts.module.scss";
import { NavLink } from "react-router-dom";



export const ContactNavbar = () => {
  return (
    
    <div className={styles.contact_navbar}>
    <ul>
      <NavLink
        to=""
        className={(isActive) =>
          isActive ? `${styles.activeYes}` : `${styles.activeNo}`
        }
      >
        Popup Lead
      </NavLink>
      <NavLink
        to=""
        className={(isActive) =>
          isActive ? `${styles.activeYes}` : `${styles.activeNo}`
        }
      >
        Contact Form
      </NavLink>
      <NavLink
        to=""
        className={(isActive) =>
          isActive ? `${styles.activeYes}` : `${styles.activeNo}`
        }
      >
        Subscribes
      </NavLink>
    </ul>
  </div>

  )
}
