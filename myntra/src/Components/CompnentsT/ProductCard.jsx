import React from 'react';
import styles from './ProductCard.module.css';

export const ProductCard = ({item}) => {

    // console.log(item.images.image1)
    // console.log(item.id)
  return (
    <div className={styles.card}  >
        <img src={item.images.image1} alt="" />
        <div className={styles.brand}>
        <h5>{item.brand}</h5>
        <p>{item.title}</p>
        </div>
    
        <div className={styles.price}>
        <h6>Rs. {item.price} <span className={styles.offPrice}>{item.off_price}</span> </h6>
        </div>
        <div className={styles.wishlist}>
          <button>Whishlist</button>
        </div>
    </div>
  )
}
