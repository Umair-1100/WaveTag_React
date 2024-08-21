import { useState } from "react";
import Buttons from "../DumpComponent/Button";
import styles from "./home.module.scss";
import { Add, Pen, Share } from "../../icon/Add";
import { ShareCard } from "./ShareCard";
import { useNavigate } from "react-router";

export const CardsHome = () => {
const [isVisible , setIsVisible] = useState(false);
const navigate = useNavigate("");

const handleEditPage = () => {
  navigate('../mycard')
}
const handleShow = () => {
    setIsVisible(!isVisible)
}

  return (
    <>
    <div className={styles.cards_mian_of_cardsHome}>
      <div className={styles.card_of_inside_cardsHome}>
        <div className={styles.img_1_card}>
          <div className={styles.pic_card_profile}>
            <img src="./public/blog-dp.jpg" alt="" />
          </div>
        </div>
        <h1>example@gmail.com</h1>
        <div className={styles.edit_btn_cards_main}>
          <Buttons
          onClick={handleEditPage}
            ariaLabel="Edit"
            type="icon"
            icon={<Pen />}
            className={styles.edit_btn_of_card_1}
          />
      <button onClick={handleShow}>
          <Buttons
            ariaLabel="Share Card"
            type="icon"
            icon={<Share />}
            className={styles.edit_btn_of_card}
          />
          </button>
        </div>
      </div>
      <div className={styles.card_of_inside_cardsHome_2}>
        <Add />
        <h1>Create a card</h1>
      </div>
      <div className={styles.card_of_inside_cardsHome_3}>
        <Add />
        <h1>Create a card</h1>
      </div>

    </div>
    <ShareCard data={isVisible} setFunc={setIsVisible}/>
    </>
  );
};
