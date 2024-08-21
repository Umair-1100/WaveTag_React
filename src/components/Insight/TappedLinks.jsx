import { MyCardComp } from "../Home/MyCardComp";
import styles from "./insight.module.scss";
import SocialLinks from "./SocialLinks";

export const TappedLinks = () => {
  return (
   
    <div className={styles.tapped_links_parnet}>
    <MyCardComp
      lable="Top Tapped Links"
      visible="hidden"
      className="text-4xl font-semibold ml-[-1rem]"
    />
    <div className={styles.tapped_links_main}>
      <SocialLinks 
      title="Email" 
      tapped="12" 
      img="./public/Email.png" />
      <SocialLinks
       title="Phone"
       tapped="10"
       img="./public/Phone.png" />
      <SocialLinks
        title="LinkedIn"
        tapped="9"
        img="./public/LinkedIn.png"
      />
      <SocialLinks
        title="Instagram"
        tapped="13"
        img="./public/Instagram.png"
      />
      <SocialLinks title="Call" tapped="11" img="./public/Call.png" />
      <SocialLinks
        title="Snapchat"
        tapped="15"
        img="./public/Snapchat.png"
      />
    </div>
  </div>

  )
}
