import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import MainCarousel from './customer/components/Homecarousel/MainCarousel';
import HomePage from './customer/pages/homePage/HomePage';
import Footer from './customer/components/footer/Footer';
import Product from './customer/components/product/Product';
import ProductDetails from './customer/components/productDetails/ProductDetails';
import NestedGridExample from './customer/components/NestedGrid';
import Cart from './customer/components/cart/Cart';
import Checkout from './customer/components/checkout/Checkout';
import Order from './customer/components/order/Order';

function App() {
  return (
    <div className="App">
      <div className='z-50'>
        <Navigation />
      </div>
       <div>
        <HomePage />
        {/* <Product /> */}
        {/* <ProductDetails /> */}
       {/* <Cart/> */}
       {/* <Checkout/> */}
       {/* <Order/> */}
       </div>
       <Footer/>
    </div>
  );
}

export default App;
