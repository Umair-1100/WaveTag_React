import { array } from "yup";
import { Check } from "../../icon/Add";
import styles from "./Subscription.module.scss";

const Subscription = () => {
  const cardsData = [
    {
      title: "Free",
      price: "$0",
      text: "Voice message anywhere",
      button: "Already Using",
    },
    {
      id:2,
      title: "Premium",
      price: "$12.00",
      text: "Voice message anywhere",
      button: "Buy Now",
    },
    {
      id:3,
      title: "Business",
      price: "$32.00",
      text: "Voice message anywhere",
      button: "Buy Now",
    },
  ];

  return (
    <div className={styles.subscription_main_page}>
      <div className={styles.subscription_btns_main}>
        <button>Monthly</button>
        <button>Yearly</button>
      </div>

      <div className={styles.cards_full_main}>
        {cardsData.map(({ title, id, price, button, text }) => {
          return (
            <div className={`${styles.subscription_cards_main} ${id === 2 ? styles.middle_card_ab : "" } ${id === 3 ? styles.last_card_bg : "" }`}>
              <div className={styles.cards_main_one}>
                <h3>{title}</h3>
                <span>
                  <h1>{price}</h1>/mo
                </span>
                <p>
                  <Check />
                  {text}
                </p>
                <p>
                  <Check />
                  {text}
                </p>
                <p>
                  <Check />
                  {text}
                </p>
              </div>
              <div className={styles.cards_main_btns}>
                <button>{button}</button>
              </div>
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default Subscription;
