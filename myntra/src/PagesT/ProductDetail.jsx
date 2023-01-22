import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import usergetdataaction from '../Redux/Auth/UserSignup/usergetdataaction';
import cartaction from '../Redux/Cartrr/cartaction';
import styles from './ProductDetail.module.css'
const ProductDetail = ({pro}) => {

    const [clicked,setClicked] = useState(false);
    const [count,setCount] = useState(2)
console.log(count)
console.log(pro)

   const dispatch = useDispatch()

    useEffect(() => {
        // axios.get("https://cheerful-trunks-duck.cyclic.app/cart")
        // .then((res) => {
        //     setCount(res.data.length)
        //     //  
        // })
        // .catch((err) => {
        //     console.log(err)
        // })
        console.log(clicked)

        // dispatch(usergetdataaction());
       
        
    },[clicked])
    const userData = useSelector(store => store.usergetdatareducer.userdata)

    console.log(userData);


    const userId = JSON.parse(localStorage.getItem("userId")) || "";

    

    const handleCart =(e) => {
        e.preventDefault();

        // axios.post('https://cheerful-trunks-duck.cyclic.app/cart',{pro})
        // .then((res) => {
        //     console.log(res)
        // })
        // .catch((err) => {
        //     console.log(err)
        // })

            // const newUserData = userData.filter(el => el.id == userId)
            // console.log(newUserData[0].cart.push(newUserData));

            
            setClicked(true)
            // dispatch(cartaction(userId,pro))
    }
    

  return (
   <>
    <div className={styles.main}>
        <div className={styles.images}>
            <div>
            <img src={pro?.images?.image1} alt="" />  
            </div>
            <div>
            <img src={pro?.images?.image2} alt="" />
            </div>
            <div>
            <img src={pro?.images?.image3} alt="" />
            </div>
            <div>
            <img src={pro?.images?.image4} alt="" />
            </div>
    
          </div>
        <div className={styles.details}>
            <h3 >{pro.brand}</h3>
            <p>{pro.title}</p>
            <p>Rating:-{pro.rating} <span>Review:-{pro.count}</span> </p>
            <div className={styles.divider}></div>
            <h3>₹{pro.price} <span className={styles.off_price}>{pro.off_price} </span><span className={styles.dis}> {pro.discount}% off</span></h3>

            <h5>Select Size</h5>
            <div className={styles.buttons}>
                <button>38</button>
                <button>40</button>
                <button>42</button>
                <button>44</button>
            </div>
            <div className={styles.cartAdd}>
                <button onClick={handleCart} disabled={clicked} >ADD TO BAG</button>
                <button className={styles.wish}>Wishlist</button>
            </div>
            <div>
            <p className={styles.discription}>
                {pro.description}
            </p>
        </div>
        <div>
            <h5>Dilevery options</h5>
            <input type="text" placeholder='Enter your pincode'/>
            <p className={styles.opt}>
            100% Original Products
            <br />
Pay on delivery might be available
<br />
Easy 30 days returns and exchanges
<br />
Try & Buy might be available
            </p>
        </div>
        </div>
        
    </div>
   </>
  )
}

export default ProductDetail