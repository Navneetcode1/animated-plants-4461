import "./App.css";




// import Navbar from './Components/Navbar';
 
import AllRoutes from './pages/AllRoutes';
// import ProductList from './Components/ProductList';\
import ProductList from "./Components/CompnentsT/ProductList";
import Navbar2 from "./Components/Navbar2";

// import ProductList from './Components/ProductList';
import Navbar from './Components/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar2 />
      <AllRoutes />
      <ProductList />
    </div>
  );
}

export default App;

