import React from 'react'
import Navigation from '../customer/components/navigation/Navigation'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/homePage/HomePage'

const CustomerRouters = () => {
  return (
    <div>
        <div>
            <Navigation />
        </div>
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
        </Routes>
        <div>

        </div>
    </div>
  )
}

export default CustomerRouters