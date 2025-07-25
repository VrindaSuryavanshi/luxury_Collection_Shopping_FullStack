import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/homePage/HomePage'
import Product from '../customer/components/product/Product'
import Cart from '../customer/components/cart/Cart'
import ProductDetails from '../customer/components/productDetails/ProductDetails'
import Checkout from '../customer/components/checkout/Checkout'
import Order from '../customer/components/order/Order'
import OrderDetails from '../customer/components/order/OrderDetails'
import Navigation from '../customer/components/navigation/Navigation'
import Footer from '../customer/components/footer/Footer'
import OrderSummary from '../customer/components/checkout/OrderSummary'
import OrderCard from '../customer/components/order/OrderCard'
import PaymentSuccess from '../customer/components/payments/PaymentSuccess'



const CustomerRouters = () => {
  return (
    <div>
        <div className='z-50'>
        <Navigation />
      </div>
        <Routes>
        <Route path='/signUp' element={<HomePage />}></Route>
        <Route path='/signIn' element={<HomePage />}></Route>

            <Route path='/' element={<HomePage />}></Route>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />}></Route>
            <Route path='/product/:productId' element={<ProductDetails />}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/account/order' element={<Order/>}></Route>
            <Route path='/account/order/:OrderId' element={<OrderDetails/>}></Route>
            <Route path='/orderSummary' element={<OrderSummary />}></Route>
            <Route path='/orderCard' element={<OrderCard />}></Route>
            <Route path='/payment/:orderId' element={<PaymentSuccess />}></Route>

        </Routes>
        <div>
        <Footer />
        </div>


    </div>
  )
}

export default CustomerRouters