import React from 'react';
import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { getProduct } from '../Redux/Products/actions';
import { ProductCard } from './ProductCard';

const ProductList = () => {

    const dispatch = useDispatch();
    const products = useDispatch((store) => store.products);

    useEffect(() => {
        dispatch(getProduct)
    },[])

  return (
    <div>
        {
            // products.length > 0 && products.map((el) => {
            //     return <ProductCard key={el.id} item={el} />
            // })
        }
    </div>
  )
}

export default ProductList