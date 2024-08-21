import styles from './Themes.module.scss'
import ThemesCard from './ThemesCard'

export const ProfessTheme = () => {
  return (
    <div className={styles.themes_cards_main}>
      <ThemesCard path="/theme2.png" />
      <ThemesCard path="/theme4.png" />
      <ThemesCard path="/theme1.png" />
      <ThemesCard path="/theme7.png" />
      <ThemesCard path="/theme4.png" />
      <ThemesCard path="/theme1.png" />
    </div>
  )
}
