import React from 'react'
import Filters from '../Components/CompnentsT/Filters'
import ProductList from '../Components/CompnentsT/ProductList'
import Sidebar from '../Components/CompnentsT/Sidebar'
import Navbar from '../Components/Navbar'

const Product = () => {
  return (
    <div>
      <Navbar />
      <Filters />
      
        <ProductList />
    </div>
  )
}

export default Product