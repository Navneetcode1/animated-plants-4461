import React from "react";
import styles from "./CartPayment.module.css";
import logoicon from "../pictures/logoicon.png";
import { Link, useNavigate } from "react-router-dom";
import { Stack } from "@chakra-ui/layout";
import { Radio } from "@chakra-ui/radio";
import { Button, useToast } from "@chakra-ui/react";

const FinalPayment = () => {
  const toast = useToast();
  const navigate = useNavigate();

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
                    <td>₹9539</td>
                  </tr>
                  <tr>
                    <td>Discount on MRP</td>
                    <td>₹9539</td>
                  </tr>

                  <tr>
                    <td>Convenience Fee</td>
                    <td>₹9539</td>
                  </tr>
                  <hr />
                  <tr>
                    <td>Total Amount</td>
                    <td>₹9539</td>
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
