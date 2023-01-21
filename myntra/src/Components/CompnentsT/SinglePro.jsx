import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import ProductDetail from '../../PagesT/ProductDetail';

const SinglePro = () => {
    const {id} = useParams();
    const products = useSelector((store) => store.productDatareducer.products);
    const [data,setData] = useState({});

    useEffect(() => {
        let productData = products.find((el) => el.id === +id);
        productData && setData(productData);
    },[]);

    console.log(data)
  return (
    <div>
        <h1>
            <ProductDetail pro={data} />
        </h1>
    </div>
  )
}

export default SinglePro