import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../My Card/mycard.module.scss";

const ThemeNavbar = () => {
  return (
    <div className={`${styles.edit__navbar_of_pages} ${styles.theme_nav_main}`}>
      <ul>
        <NavLink className={({isActive}) => isActive ? "text-[blue] border-b-2 border-[blue] mb-[-0.4rem]" : `${styles.noactive}`} to="/mycard/themes">All</NavLink>
        <NavLink className={({isActive}) => isActive ? "text-[blue] border-b-2 border-[blue] mb-[-0.4rem]" : `${styles.noactive}`} to="/mycard/themes/free-themes">Free</NavLink>
        <NavLink className={({isActive}) => isActive ? "text-[blue] border-b-2 border-[blue] mb-[-0.4rem]" : `${styles.noactive}`} to="/mycard/themes/professional-themes">Professional</NavLink>
        <NavLink className={({isActive}) => isActive ? "text-[blue] border-b-2 border-[blue] mb-[-0.4rem]" : `${styles.noactive}`} to="/mycard/themes/business-themes">Business</NavLink>
        <NavLink className={({isActive}) => isActive ? "text-[blue] border-b-2 border-[blue] mb-[-0.4rem]" : `${styles.noactive}`} to="/mycard/themes/crypto-themes">Crypto /NFT</NavLink>
      </ul>
    </div>
  );
};

export default ThemeNavbar;
