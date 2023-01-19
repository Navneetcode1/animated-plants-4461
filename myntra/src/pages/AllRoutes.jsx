import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import CartPayment from '../PagesA/CartPayment'
import Home from './Home'
import Login from './Login'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/checkout' element={<CartPayment />} />
        </Routes>
    )
}

export default AllRoutes