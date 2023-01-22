import React from 'react';
import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { getProduct } from '../../Redux/Products/actions';
import { ProductCard } from './ProductCard';
import styles from './Product.module.css';
import Sidebar from './Sidebar';
import { useLocation, useSearchParams } from 'react-router-dom';
import Filters from './Filters';

const ProductList = () => {

    const dispatch = useDispatch();
    const products = useSelector((store) => store.productDatareducer.products);
    // console.log(products)
    const isLoading = useSelector((store) => store.productDatareducer.isLoading)
    const location = useLocation();
    const [searchParams] = useSearchParams()


    useEffect(() => {

        let paramObj = {
            params: {
                color: searchParams.getAll('color')
            }
        }
        // dispatch()
        dispatch(getProduct(paramObj))
    },[location.search])

    if(isLoading) {
        return (
                <>
                    <div className={styles.loading}>
                        <img src="https://www.downgraf.com/wp-content/uploads/2019/05/Loader-animation-principle-freebie.gif?x34408" alt="" />
                    </div>
                </>
            )
    }

  return (
    <>
        <Filters />
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