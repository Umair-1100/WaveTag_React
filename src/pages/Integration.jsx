import LogoProfile from "../components/Home/LogoProfile"
import styles from "../components/Integration/Integration.module.scss";
import { Navbar } from "../components/Home/Navbar"
import IntegrationDescription from "../components/Integration/IntegrationDescription"

const Integration = () => {
  return (
    <section className={styles.integration_main}>
        <LogoProfile/>
        <Navbar/>
        <IntegrationDescription/>
    </section>
  )
}

export default Integration