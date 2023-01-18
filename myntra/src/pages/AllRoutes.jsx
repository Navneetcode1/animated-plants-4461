import React from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}

export default AllRoutes