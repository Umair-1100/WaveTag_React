import styles from "./Accessories.module.scss";
import Buttons from "../DumpComponent/Button";

const AccessoriesComp = () => {
  return (
    <div className={styles.accessoriesComp_main}>
      <div className={styles.access_inside_main}>
        <div className={styles.inside_details_1}>
          <img src="./public/Logo.png" alt="" />
          <h1>Get WaveTag Accessories</h1>
          <p>Don’t Have Any Accessories? Purchase them here.</p>
          <Buttons type="button" label="Order" className="bg-[#1814F3] py-2 px-10 rounded-lg text-white "/>
        </div>
        <div className={`${styles.inside_details_1} ${styles.inside_details_2}`}>
          <img src="./public/waveCard.png" alt="" />
          <h1>Activate WaveTag Accessories</h1>
          <p>If you have all the accessories you need, simply activate them</p>
          <Buttons type="button" label="Activate" className="bg-[#1814F3] py-2 px-10 rounded-lg text-white "/>

        </div>
      </div>
    </div>
  );
};

export default AccessoriesComp;
