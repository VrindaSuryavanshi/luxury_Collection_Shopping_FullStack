import './App.css';

import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';

function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route path='/*' element={< CustomerRouters />}></Route>
      <Route path='/admin/*' element={< AdminRouters />}></Route>
      </Routes>
      </div>
     
  );
}

export default App;
