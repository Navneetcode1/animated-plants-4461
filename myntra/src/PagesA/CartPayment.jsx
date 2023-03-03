//cartpage
import React, { useEffect, useState } from "react";
import styles from "./CartPayment.module.css";
import { MdOutlineDeleteForever } from "react-icons/md";

// import fashion_mantra as sitelogo "../Pictures/fashion_mantra.png";
import logoicon from "../pictures/logoicon.png";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import usergetdataaction from "../Redux/Auth/UserSignup/usergetdataaction";
import EmptyCart from "../PagesA/EmptyCart";
// import pic from "./pictures/fashion_mantra.png";

export const CartPayment = () => {
  const [count, setCount] = useState(1);
  const [cartArr, setCartArr] = useState([]);
  const [currUser, setCurrUser] = useState("");
  // const [totalmrp, setTotalmrp] = useState(0);

  const userId = JSON.parse(localStorage.getItem("userId")) || "";
  // console.log(userId)
  const cartData = JSON.parse(localStorage.getItem("cartData")) || [];

  const totalmrp = cartData?.reduce((ac, i) => ac + Number(i.off_price), 0);

  const totaloff = cartData?.reduce((ac, i) => ac + Number(i.price), 0);
  console.log(totaloff);

  const dispatch = useDispatch();
  const userData = useSelector((store) => store.usergetdatareducer.userdata);
  console.log("user", userData);

  const handledeleteprod = (id) => {
    let arr = cartData.filter((el) => el.id !== id);
    localStorage.setItem("cartData", JSON.stringify(arr));
    console.log("id:", id, "arr:", arr);
  };

  useEffect(() => {
    dispatch(usergetdataaction());
    const loginUserData = userData?.filter((ele) => ele.id == userId);
    console.log("loginUserData", loginUserData);
  }, [handledeleteprod]);

  // const discountedprice = totalmrp - offp;
  // setTotalmrp(ans);
  // function ManualClose() {
  //   const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate();
  const arr = [1, 2, 3];

  // useEffect(() => {
  //   getCartData();
  // }, []);

  const getUserData = () => {
    axios
      .get(" https://awful-fly-shoulder-pads.cyclic.app/admin_signup")
      .then((res) => {
        // console.log(
        //   "res_user.data.data",
        //   typeof res.data,
        //   res.data[0].admin_name
        // );
        // console.log("res.data", typeof res.data, res.data);
        setCurrUser(res.data[0].admin_name);
        // setCartArr([...res.data]);
        // console.log("cartArr", typeof cartArr, cartArr);
      });
  };
  // https://awful-fly-shoulder-pads.cyclic.app/admin_signup

  useEffect(() => {
    getUserData();
  }, []);

  if (cartData == 0) {
    return (
      <>
        <EmptyCart />
      </>
    );
  }
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
                      Deliver to: <b>{currUser}</b>
                    </p>
                  </div>
                  <div>
                    <p>
                      Delivery Address : Bunglow no.1, High Street, Varanasi
                    </p>
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
                  <details>
                    <summary>
                      <button>Show More</button>
                    </summary>
                    <p>
                      10% instant discount on Citi Credit and Debit Cards on a
                      min spend of Rs.3000
                      <br />
                      10% instant discount on ICICI Credit and Debit Cards on a
                      min spend of Rs.4000
                      <br />
                      5% cashback on Paytm Wallet and Postpaid transactions
                    </p>
                  </details>
                </div>
              </div>

              <div className={styles.feesdiv}>
                <div className={styles.conhead}>
                  {" "}
                  Yay! <b>No convenience fee</b> on this item
                </div>
              </div>

              <div className={styles.proditemcardlist}>
                {cartData.length
                  ? cartData.map((item, ind) => {
                      return (
                        <div
                          key={Math.random()}
                          className={styles.proditemcardcard}
                        >
                          <img
                            // src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/8988247/2020/10/22/c89c54cc-de70-4815-9108-fa1f5d01ad171603366379751-HRX-by-Hrithik-Roshan-Men-Grey-Out-Back-Outdoor-Shoes-195160-1.jpg"
                            alt=""
                            src={item.images?.image1}
                          />
                          <div className={styles.actualcard}>
                            <div className={styles.brandname}>{item.brand}</div>
                            <div className={styles.productname}>
                              {item.title}
                            </div>
                            <div className={styles.soldby}>
                              sold by: arttees
                            </div>
                            <div className={styles.itemaincontainer}>
                              <div>
                                <div>
                                  <div>Size: {item.sizes && item.sizes[1]}</div>
                                  {/* <div>Size: {item.sizes && item.sizes[1]}</div> */}
                                </div>
                              </div>
                              <div>
                                <div style={{ display: "flex", gap: "15px" }}>
                                  <div> Qty:</div>
                                  <div>
                                    {/* ------------------------------------------------ */}
                                    <button
                                      disabled={count == 1}
                                      onClick={() =>
                                        setCount((prev) => prev - 1)
                                      }
                                    >
                                      -
                                    </button>
                                    {/* ----------------------------------------------------- */}
                                  </div>
                                  <div>{count}</div>
                                  <div>
                                    {" "}
                                    <button
                                      style={{ border: "none" }}
                                      onClick={() =>
                                        setCount((prev) => prev + 1)
                                      }
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div style={{ display: "flex", gap: "10px" }}>
                              <div className={styles.brandname}>
                                {" "}
                                <b> ₹{item.price}</b>
                              </div>
                              <div className={styles.brandname}>
                                <s>₹{item.off_price}</s>
                              </div>
                              <div className={styles.brandname}>
                                {item.discount}% off
                              </div>
                            </div>

                            <div className={styles.brandname}>
                              30 days return available
                            </div>
                            <div className={styles.expressdelivery}>
                              Express delivery in 2 days
                            </div>
                          </div>
                          <div style={{ position: "relative" }}>
                            <MdOutlineDeleteForever
                              size="35px"
                              padding={4}
                              display="flex"
                              onClick={() => handledeleteprod(item.id)}
                            />
                          </div>
                        </div>
                      );
                    })
                  : "Cart is Empty"}
              </div>
            </div>
            {/*-------------- left section end----------------------*/}

            {/*-------------- right section start----------------------*/}

            <div className={styles.rightdiv}>
              <div>
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

                  <div className={styles.gifthead}>
                    <p>
                      {" "}
                      <b> Buying for a loved one? </b>
                    </p>
                    <p>Add Gift Wrap @25Rs</p>
                  </div>
                </div>
                <hr />
                <div className={styles.gifthead}>
                  <p>
                    {" "}
                    <b> PRICE DETAILS</b>
                  </p>
                </div>
                <div className={styles.gifthead}>
                  <table>
                    <thead></thead>
                    <tbody>
                      <tr>
                        <td>Total MRP</td>
                        <td>₹{totalmrp}</td>
                      </tr>
                      <tr>
                        <td>Discount on MRP</td>
                        <td>₹{totalmrp - totaloff}</td>
                      </tr>
                      <tr>
                        <td>Coupon Discount</td>
                        <td>₹0</td>
                      </tr>
                      <tr>
                        <td>Convenience Fee</td>
                        <td>₹0</td>
                      </tr>
                      <tr>
                        <td>Total Amount</td>
                        <td>₹{totaloff}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className={styles.btndiv}>
                    <Link to="/checkout/address">
                      {" "}
                      <div className={styles.subpaybtn}>
                        <button> PLACE ORDER</button>
                      </div>
                    </Link>
                  </div>
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
