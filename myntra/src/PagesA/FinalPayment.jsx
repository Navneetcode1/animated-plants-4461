import React, { useEffect, useState } from "react";
import styles from "./CartPayment.module.css";
import logoicon from "../pictures/logoicon.png";
import { Link, useNavigate } from "react-router-dom";
import { Stack } from "@chakra-ui/layout";
import { Radio } from "@chakra-ui/radio";
import { Button, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import usergetdataaction from "../Redux/Auth/UserSignup/usergetdataaction";
import axios from "axios";

const FinalPayment = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const userId = JSON.parse(localStorage.getItem("userId")) || "";
  // console.log(userId)
  const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
  const totalmrp = cartData?.reduce((ac, i) => ac + i.off_price, 0);
  const totaloff = cartData?.reduce((ac, i) => ac + Number(i.price), 0);
  console.log(totaloff);

  const dispatch = useDispatch();
  const userData = useSelector((store) => store.usergetdatareducer.userdata);
  console.log("user", userData);

  useEffect(() => {
    dispatch(usergetdataaction());
    const loginUserData = userData?.filter((ele) => ele.id == userId);
    console.log("loginUserData", loginUserData);
  }, []);

  // const getUserData = () => {
  //   axios
  //     .get(" https://awful-fly-shoulder-pads.cyclic.app/admin_signup")
  //     .then((res) => {
  //       setCurrUser(res.data[0].admin_name);
  //     });
  // };
  // // https://awful-fly-shoulder-pads.cyclic.app/admin_signup

  // useEffect(() => {
  //   getUserData();
  // }, []);

  const handleclickhome = () => {
    localStorage.setItem("cartData", JSON.stringify([]));
    toast({
      title: "Order Placed successfully",
      description: "Delivery estimates within 2 days",
      status: "success",
      duration: 6000,
      isClosable: true,
    });
    navigate("/");
  };

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
                <h1>Select Payment Mode</h1>
              </div>
              <div>
                <Stack>
                  <Radio size="sm" name="1" colorScheme="gray" defaultChecked>
                    Cash on delivery
                  </Radio>
                  <Radio size="sm" name="1" colorScheme="gray">
                    PhonePay/Googlepay/BhimUpi
                  </Radio>

                  <Radio size="sm" name="1" colorScheme="gray">
                    Credit/Debit Card
                  </Radio>

                  <Radio size="sm" name="1" colorScheme="gray">
                    Paytm/Wallets
                  </Radio>
                  <Radio size="sm" name="1" colorScheme="gray">
                    Net Banking
                  </Radio>
                  <Radio size="sm" name="1" colorScheme="gray">
                    EMI/ PayLater
                  </Radio>
                </Stack>
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
                    <td>₹{totalmrp}</td>
                  </tr>
                  <tr>
                    <td>Discount on MRP</td>
                    <td>₹{totalmrp - totaloff}</td>
                  </tr>

                  <hr />
                  <tr>
                    <td>Total Amount</td>
                    <td>₹{totaloff}</td>
                  </tr>
                </table>
                <div className={styles.btndiv}>
                  <div className={styles.subpaybtn}>
                    <div className={styles.subpaybtn}>
                      <Button
                        onClick={() => {
                          handleclickhome();
                        }}
                      >
                        Continue
                      </Button>
                    </div>
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

export default FinalPayment;
