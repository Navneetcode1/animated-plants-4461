import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from './ProductDetail.module.css'
const ProductDetail = ({pro}) => {

    const [count,setCount] = useState(2)
console.log(count)
console.log(pro?.images?.image1)

   

    useEffect(() => {
        axios.get("https://cheerful-trunks-duck.cyclic.app/cart")
        .then((res) => {
            setCount(res.data.length)
            //  
        })
        .catch((err) => {
            console.log(err)
        })
        
    })
    const handleCart =(e) => {
        e.preventDefault();

        axios.post('https://cheerful-trunks-duck.cyclic.app/cart',{pro})
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
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
            <p>{pro.rating} <span>{pro.count}</span> </p>
            <div className={styles.divider}></div>
            <h3>₹{pro.price} <span>{pro.off_price} {pro.discount}</span></h3>

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
            <div>
            <p>
                {pro.description}
            </p>
        </div>
        </div>
        
    </div>
   </>
  )
}

export default ProductDetail