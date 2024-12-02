import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import MainCarousel from './customer/components/Homecarousel/MainCarousel';
import HomePage from './customer/pages/homePage/HomePage';
import Footer from './customer/components/footer/Footer';
import Product from './customer/components/product/Product';

function App() {
  return (
    <div className="App">
      <div className='z-50'>
        <Navigation />
      </div>
       <div>
        <HomePage />
        {/* <Product /> */}
       </div>
       <Footer/>
    </div>
  );
}

export default App;
