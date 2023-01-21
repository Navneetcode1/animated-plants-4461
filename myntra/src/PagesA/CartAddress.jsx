import React from "react";
import styles from "./CartPayment.module.css";
import logoicon from "../pictures/logoicon.png";
import { Link } from "react-router-dom";

const CartAddress = () => {
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
            {/*-------------- left section start----------------------*/}
            <div className={styles.leftdiv}>
              <div className={styles.add_details}>
                <h1>Delivery Address</h1>
              </div>
              <div className={styles.conhead}>DEFAULT ADDRESS</div>
              <div className={styles.addresscontent_two}>
                <p>
                  Survey No. 5/6, 42 street, skyline Apartment
                  <br />
                  Mobile: 98222 55555
                </p>
              </div>
            </div>
            {/*-------------- left section end----------------------*/}

            {/*-------------- right section start----------------------*/}

            <div className={styles.rightdiv}></div>
            {/*-------------- right section end----------------------*/}
            <div>
              <hr />
              <div className={styles.gifthead}>
                <p>
                  {" "}
                  <b> PRICE DETAILS</b>
                </p>
              </div>
              <div className={styles.gifthead}>
                <table>
                  <tr>
                    <td>Total MRP</td>
                    <td>₹9539</td>
                  </tr>
                  <tr>
                    <td>Discount on MRP</td>
                    <td>₹9539</td>
                  </tr>
                  <tr>
                    <td>Coupon Discount</td>
                    <td>₹9539</td>
                  </tr>
                  <tr>
                    <td>Convenience Fee</td>
                    <td>₹9539</td>
                  </tr>
                  <tr>
                    <td>Total Amount</td>
                    <td>₹9539</td>
                  </tr>
                </table>
                <div className={styles.btndiv}>
                  <div className={styles.subpaybtn}>
                    <Link to="/checkout/address/payment">
                      {" "}
                      <div className={styles.subpaybtn}>
                        <button>Continue</button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartAddress;
