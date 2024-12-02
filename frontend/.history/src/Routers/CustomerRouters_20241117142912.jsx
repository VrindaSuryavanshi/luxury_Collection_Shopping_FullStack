import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/homePage'
import Product from '../customer/components/product'
import Cart from '../customer/components/cart'
import ProductDetails from '../customer/components/productDetails'
import Checkout from '../customer/components/checkout'
import Order from '../customer/components/order'
import OrderDetails from '../customer/components/order'




const CustomerRouters = () => {
  return (
    <div>
        <div className='z-50'>
        <Navigation />
      </div>
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />}></Route>
            <Route path='/' element={<ProductDetails />}></Route>
            <Route path='/' element={<Cart/>}></Route>
            <Route path='/' element={<Checkout/>}></Route>
            <Route path='/' element={<Order/>}></Route>
            <Route path='/' element={<OrderDetails/>}></Route>
        </Routes>
        <div>
        <Footer />
        </div>


    </div>
  )
}

export default CustomerRouters