import './App.css';


import AllRoutes from './pages/AllRoutes';

import ProductList from './Components/ProductList';
import Navbar from './Components/Navbar';
// import Home from './VPages/Home';


function App() {
  return (
    <div className="App">

      <Navbar/>
      <AllRoutes/>
      <ProductList />
      {/* <Home/> */}

    </div>
  );
}


export default App;
