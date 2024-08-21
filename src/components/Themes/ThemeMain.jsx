import styles from './Themes.module.scss';
import ThemesCard from './ThemesCard';

const ThemeMain = () => {
  return (
      <div className={styles.themes_cards_main}>
        <ThemesCard path="/theme.png" />
        <ThemesCard path="/theme2.png" />
        <ThemesCard path="/theme3.png" />
        <ThemesCard path="/theme4.png" />
        <ThemesCard path="/theme5.png" />
        <ThemesCard path="/theme6.png" />
        <ThemesCard path="/theme3.png" />
        <ThemesCard path="/theme6.png" />
        <ThemesCard path="/theme4.png" />
        <ThemesCard path="/theme7.png" />
      </div>
  )
}

export default ThemeMain