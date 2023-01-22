import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import CartAddress from '../PagesA/CartAddress'
import { CartPayment } from '../PagesA/CartPayment'
import FinalPayment from '../PagesA/FinalPayment'
// import Home from './Home'
// import Login from './Login'

import Mens from './Mens'

import {AdminPage} from "../Upage/AdminPage"



import ProductDetail from '../PagesT/ProductDetail'
import SinglePro from '../Components/CompnentsT/SinglePro'
import Home from '../VPages/Home'
import {LoginPage} from "../Upage/LoginPage"
import {SignupPage} from "../Upage/SignupPage"
import {AdminLogin} from "../Upage/AdminLogin"
// import {AdminPage} from "../Upage/AdminPage"
import ProductList from '../Components/CompnentsT/ProductList'
// import SinglePro from "../Components/CompnentsT/SinglePro"



const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/checkout' element={<CartPayment />} />

            <Route path='/mens' element={<Mens />} />

            <Route path="/adminpage" element={<AdminPage/>}/>

            

            <Route path='/checkout/address' element={<CartAddress />} />
            <Route path='/checkout/address/payment' element={<FinalPayment />} />
            <Route path='/mens' element={<Mens />} />
            <Route path='/men/:id' element={<SinglePro />} />
            <Route path="/signup" element={<SignupPage/>}/>
  <Route path="/adminlogin" element={<AdminLogin/>}/>
  <Route path="/adminpage" element={<AdminPage/>}/>
  <Route path="/productlist" element={<ProductList/>}/>
  {/* <Route path="./productlist/singlepage" element={<SinglePro/>}/> */}
        </Routes>
    )
}

export default AllRoutes
