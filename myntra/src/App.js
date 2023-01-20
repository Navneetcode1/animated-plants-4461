import "./App.css";



import Navbar from './Components/Navbar';
import AllRoutes from './pages/AllRoutes';
// import ProductList from './Components/ProductList';\
import ProductList from "./Components/CompnentsT/ProductList";
import ProductDetail from "./PagesT/ProductDetail";
import Filters from "./Components/CompnentsT/Filters";



function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
  
      <ProductList />
      {/* <ProductDetail />  */}
    </div>
  );
}

export default App;
