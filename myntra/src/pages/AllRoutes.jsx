import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import CartAddress from '../PagesA/CartAddress'
import { CartPayment } from '../PagesA/CartPayment'
import FinalPayment from '../PagesA/FinalPayment'
import Home from './Home'
import Login from './Login'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/checkout' element={<CartPayment />} />
            <Route path='/checkout/address' element={<CartAddress />} />
            <Route path='/checkout/address/payment' element={<FinalPayment />} />

        </Routes>
    )
}

export default AllRoutes