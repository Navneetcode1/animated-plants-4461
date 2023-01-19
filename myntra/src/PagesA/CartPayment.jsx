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
            {/*-------------- left section start----------------------*/}
            <div className={styles.leftdiv}>
              <div className={styles.add_details}>
                <div className={styles.addresscontent}>
                  <div>
                    <p>
                      Deliver to: <b>Cx name here</b>
                    </p>
                  </div>
                  <div>
                    <p>Cx : whole address in detail in pincode here</p>
                  </div>
                </div>
                <div className={styles.addressbtn}>
                  <button>CHANGE ADDRESS</button>
                </div>
              </div>

              <div className={styles.avl_offers}>
                <div className={styles.offershead}>Available Offers</div>
                <div className={styles.offersheadcre}>
                  10% instant discount on credit cards
                </div>
                <div className={styles.offersheadcre}>
                  <button>Show More</button>
                </div>
              </div>

              <div className={styles.feesdiv}>
                <div className={styles.conhead}>
                  {" "}
                  Yay! <b>No convenience fee</b> on this item
                </div>
              </div>

              <div className={styles.proditemcardlist}>
                <div className={styles.proditemcardcard}>
                  <div className={styles.actualcard}>
                    <div className={styles.brandname}>Hrx by hritik</div>
                    <div className={styles.productname}>mens tshirt</div>
                    <div className={styles.soldby}>sold by: arttees</div>
                    <div className={styles.itemaincontainer}>
                      <div>
                        <div>
                          <div>Size: eg.5</div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div>Qty: eg.2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*-------------- left section end----------------------*/}

            {/*-------------- right section start----------------------*/}

            <div className={styles.rightdiv}>
              <div className={styles.coupondiv}>
                <div className={styles.couponhead}>
                  <p> COUPONS</p>
                </div>
                <div className={styles.couponbasecontent}>
                  <div className={styles.contenttext}>Apply coupons</div>
                  <div className={styles.applybtn}>
                    <button>Apply</button>
                  </div>
                </div>
              </div>
              <div className={styles.coupondiv}>
                <div className={styles.gifthead}>
                  <p>GIFTING AND PERSONALIZATION</p>
                </div>
              </div>
            </div>
            {/*-------------- right section end----------------------*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPayment;
