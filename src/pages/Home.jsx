import { CardsHome } from "../components/Home/CardsHome"
import styles from "../components/Home/home.module.scss"
import LogoProfile from "../components/Home/LogoProfile"
import { MyCardComp } from "../components/Home/MyCardComp"
import { Navbar } from "../components/Home/Navbar"

export const Home = () => {
  return (
    <section className={`${styles["home-main"]}`}>
      <LogoProfile />
      <Navbar />
      <MyCardComp lable="My Card"/>
      <CardsHome />
    </section>
  )
}
