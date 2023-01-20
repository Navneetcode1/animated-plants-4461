import React, { useEffect } from 'react'
import styles from './ProductDetail.module.css'
const ProductDetail = () => {


    useEffect(() => {
        
    })
    const handleCart =() => {
        
    }

  return (
   <>
    <div className={styles.main}>
        <div className={styles.images}>
    <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14350098/2021/6/18/8e12d936-e770-48d3-a285-b72c4c1c74391623996957697-Mast--Harbour-Men-Tshirts-3781623996957278-4.jpg" alt="" />
    <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14350098/2021/6/18/8e12d936-e770-48d3-a285-b72c4c1c74391623996957697-Mast--Harbour-Men-Tshirts-3781623996957278-4.jpg" alt="" />
    <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14350098/2021/6/18/8e12d936-e770-48d3-a285-b72c4c1c74391623996957697-Mast--Harbour-Men-Tshirts-3781623996957278-4.jpg" alt="" />
    <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14350098/2021/6/18/8e12d936-e770-48d3-a285-b72c4c1c74391623996957697-Mast--Harbour-Men-Tshirts-3781623996957278-4.jpg" alt="" />
        </div>
        <div className={styles.details}>
            <h3 >Brand</h3>
            <p>Name</p>
            <p>Rating and review</p>
            <div className={styles.divider}></div>
            <h3>Price</h3>

            <h5>Select Size</h5>
            <div className={styles.buttons}>
                <button>38</button>
                <button>40</button>
                <button>42</button>
                <button>44</button>
            </div>
            <div className={styles.cartAdd}>
                <button onClick={handleCart}>ADD TO BAG</button>
                <button>Wishlist</button>
            </div>
         
        </div>
    </div>
   </>
  )
}

export default ProductDetail