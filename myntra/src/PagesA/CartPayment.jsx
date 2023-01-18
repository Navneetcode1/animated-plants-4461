import React from "react";
import styles from "./CartPayment.module.css";
// import fashion_mantra as sitelogo "../Pictures/fashion_mantra.png";
import logoicon from "../pictures/logoicon.png";
// import pic from "./pictures/fashion_mantra.png";

const CartPayment = () => {
  return (
    <>
      <div className={styles.maindiv}>
        <div className={styles.container}>
          <div className={styles.logodiv}>
            <img src={logoicon} alt="" />
          </div>
          <div className={styles.threeroutes}>
            <span>BAG ----------</span>
            <span>ADDRESS ----------</span>
            <span>PAYMENT</span>
          </div>
          <div className={styles.secure}>
            <img
              src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
              alt="pic"
              height="30px"
            />
            100% S E C U R E
          </div>
        </div>
        <div className={styles.bagbody}>
          <div className={styles.twosections}>
            <div className={styles.leftdiv}>
              <div className={styles.add_details}>
              name & address details
              </div>
              <div className={styles.avl_offers}>
                avialable offers
              </div>
              <div className={styles.feesdiv}>no convenience fee on this item</div>
            </div>
            <div className={styles.rightdiv}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPayment;
