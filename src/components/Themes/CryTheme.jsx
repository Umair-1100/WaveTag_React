import styles from './Themes.module.scss'
import ThemesCard from './ThemesCard'

export const CryTheme = () => {
  return (
    <div className={styles.themes_cards_main}>
      <ThemesCard path="/theme2.png" />
      <ThemesCard path="/theme5.png" />
      <ThemesCard path="/theme1.png" />
      <ThemesCard path="/theme7.png" />
      <ThemesCard path="/theme3.png" />
      <ThemesCard path="/theme.png" />
    </div>
  )
}
