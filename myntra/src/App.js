import "./App.css";




import Navbar from './Components/Navbar';

import AllRoutes from './pages/AllRoutes';
// import ProductList from './Components/ProductList';\
import ProductList from "./Components/CompnentsT/ProductList";

import ProductList from './Components/ProductList';
import Navbar from './Components/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <ProductList />
    </div>
  );
}

export default App;
