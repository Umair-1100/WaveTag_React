import styles from "./insight.module.scss";

export const Band = ({title, num, className}) => {
  return (
    <div className={styles.band}>
    <h3>{title}</h3>
    <p className={className}>----------------------------------------</p>
    <h2>{num}</h2>
  </div>
  )
}
