import React from 'react'



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