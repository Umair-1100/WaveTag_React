import React from 'react'
import styles from "./Content.module.scss";
import { NavLink } from 'react-router-dom'

export const AddSocialBtns = () => {
  return (
    <div className={styles.content_main_btns}>
    <div className={styles.btns_add_social_content}>
      <NavLink
        to="/mycard/content"
        className={({ isActive }) =>
          isActive
            ? `${styles.ContentMain_btn_navlink_active}`
            : `${styles.ContentMain_btn_navlink}`
        }
      >
        Add Social
      </NavLink>
      <NavLink
        to="/mycard/content/contentSec"
        className={({ isActive }) =>
          isActive
            ? `${styles.ContentMain_btn_navlink}`
            : `${styles.ContentMain_btn_navlink}`
        }
      >
        Add Content
      </NavLink>
    </div>
  </div>
  )
}
