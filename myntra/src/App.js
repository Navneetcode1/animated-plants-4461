import "./App.css";



import Navbar from './Components/Navbar';
import AllRoutes from './pages/AllRoutes';
import ProductList from './Components/ProductList';



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
