import LogoProfile from "../components/Home/LogoProfile"
import { MyCardComp } from "../components/Home/MyCardComp"
import { Navbar } from "../components/Home/Navbar"
import styles from '../components/Accessories/Accessories.module.scss'
import AccessoriesComp from "../components/Accessories/AccessoriesComp"

const Accessories = () => {
  return (
    <section className={styles.accessories_main}>
        <LogoProfile/>
        <Navbar/>
        <MyCardComp lable="Accessories" visible="hidden"/>
        <AccessoriesComp/>
    </section>
  )
}

export default Accessories