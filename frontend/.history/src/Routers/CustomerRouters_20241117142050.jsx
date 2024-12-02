import React from 'react'
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/pages/homePage/HomePage';
import Footer from './customer/components/footer/Footer';
import Product from './customer/components/product/Product';
import ProductDetails from './customer/components/productDetails/ProductDetails';
import Cart from './customer/components/cart/Cart';
import Checkout from './customer/components/checkout/Checkout';
import Order from './customer/components/order/Order';
import OrderDetails from './customer/components/order/OrderDetails'
;import { Route, Routes } from 'react-router-dom'


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