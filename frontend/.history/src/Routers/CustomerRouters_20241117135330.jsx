import React from 'react'
import Navigation from '../customer/components/navigation/Navigation'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/homePage/HomePage'
import Footer from '../customer/components/footer/Footer'

const CustomerRouters = () => {
  return (
    <div>
        <div className='z-50'>
        <Navigation />
      </div>
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
        {/* <Product /> */}
        {/* <ProductDetails /> */}
       {/* <Cart/> */}
       {/* <Checkout/> */}
       {/* <Order/> */}
       {/* <OrderDetails/> */}
        </Routes>
        <div>
        <Footer />
        </div>
    </div>
  )
}

export default CustomerRouters