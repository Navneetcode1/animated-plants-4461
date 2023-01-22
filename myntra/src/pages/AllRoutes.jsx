import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import CartAddress from '../PagesA/CartAddress'
import { CartPayment } from '../PagesA/CartPayment'
import FinalPayment from '../PagesA/FinalPayment'
import Home from './Home'
import Login from './Login'

import Mens from './Mens'

import {AdminPage} from "../Upage/AdminPage"



import ProductDetail from '../PagesT/ProductDetail'
import SinglePro from '../Components/CompnentsT/SinglePro'



const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/checkout' element={<CartPayment />} />

            <Route path='/mens' element={<Mens />} />

            <Route path="/adminpage" element={<AdminPage/>}/>

            

            <Route path='/checkout/address' element={<CartAddress />} />
            <Route path='/checkout/address/payment' element={<FinalPayment />} />
            <Route path='/mens' element={<Mens />} />
            <Route path='/men/:id' element={<SinglePro />} />


        </Routes>
    )
}

export default AllRoutes
