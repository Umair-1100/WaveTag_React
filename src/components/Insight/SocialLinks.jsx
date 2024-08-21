import styles from './insight.module.scss'
const SocialLinks = ({title , tapped, img}) => {
  return (
    <div className={styles.tapped_links_child}>
    <div className="flex items-center gap-2 text-lg">
    <img src={img} alt="" />
    <p>{title}</p>
    </div>
    <p>{tapped}</p>
  </div>
  )
}

export default SocialLinks