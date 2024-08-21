import { Outlet } from "react-router";
import LogoProfile from "../components/Home/LogoProfile";
import { Navbar } from "../components/Home/Navbar";
import SettingNav from "../components/Setting/SettingNav";
import styles from "../components/Setting/Setting.module.scss";
import SettingMain from "../components/Setting/SettingMain";

const SettingLayoutMain = ({ Children }) => {
  return (
    <>
      <LogoProfile />
      <Navbar />
      <div className={styles.setting_page_main}>
        <SettingNav />
        <Outlet />
      </div>
    </>
  );
};

export default SettingLayoutMain;
