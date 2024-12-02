import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import MainCarousel from './customer/components/Homecarousel/MainCarousel';
import HomePage from './customer/pages/homePage/HomePage';

function App() {
  return (
    <div className="App">
      <div className='z-50'>
        <Navigation />
      </div>
       <div>
        <HomePage />
       </div>
    </div>
  );
}

export default App;
