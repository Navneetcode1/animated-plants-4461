import React from 'react';
import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { getProduct } from '../../Redux/Products/actions';
import { ProductCard } from './ProductCard';
import styles from './Product.module.css';
import Sidebar from './Sidebar';

const ProductList = () => {

    const dispatch = useDispatch();
    const products = useSelector((store) => store.productDatareducer.products);
    // console.log(products)
    const isLoading = useSelector((store) => store.productDatareducer.isLoading)

    useEffect(() => {
        // dispatch()
        dispatch(getProduct)
    },[])

    if(isLoading) {
        return <h1>...Loading</h1>
    }

  return (
    <>
    <Sidebar />
    <div className={styles.productList}>
        {
            products.length > 0 && products.map((el) => {
                return (
                    // <div className={styles.productList}>
                        <ProductCard key={el.id+Math.random()} item={el} />
                    // </div>
                )

                
            })
        }
    </div>
    </>
  )
}

export default ProductList