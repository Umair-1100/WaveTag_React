import LogoProfile from "../Home/LogoProfile";
import { MyCardComp } from "../Home/MyCardComp";
import { Navbar } from "../Home/Navbar";
import { ContactNavbar } from "./ContactNavbar";
import styles from "./contacts.module.scss";
import { ContactTable } from "./ContactTable";

export const Contacts = () => {
  return (
    <section className={styles.contacts_section}>
      <LogoProfile />
      <Navbar />
      <MyCardComp lable="Forms" visible="hidden" className="font-semibold" />

      <div className={styles.contacts_main}>
        <ContactNavbar />
        <ContactTable/>
      </div>
    </section>
  );
};
