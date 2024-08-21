import styles from "./Themes.module.scss";
import ThemesCard from "./ThemesCard";

const ThemesFree = () => {
  return (
    <div className={styles.themes_cards_main}>
      <ThemesCard path="/theme3.png" />
      <ThemesCard path="/theme.png" />
      <ThemesCard path="/theme5.png" />
      <ThemesCard path="/theme3.png" />
      <ThemesCard path="/theme.png" />
      <ThemesCard path="/theme5.png" />
    </div>
  );
};

export default ThemesFree;
