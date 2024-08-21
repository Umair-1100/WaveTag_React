import styles from "./Content.module.scss";

import { Plus } from "../../icon/Add";

export const ArraySocialLinks = ({ Number, Visible, Header }) => {
  return (
      <span>
      <h1 className={`${Visible} ml-8 my-4 text-lg`}>{Header}</h1>
        <div className={styles.card_content_social_tag_add}>
          {Array.from({ length: Number }, () => {
            return (
              <div className={styles.card_social_main}>
                <div className={styles.card_social_icon_text}>
                  <img src="/Email.png" alt="email" />
                  <h2>Email</h2>
                </div>
                <Plus stroke="#949494" />
              </div>
            );
          })}
        </div>
      </span>
  );
};
