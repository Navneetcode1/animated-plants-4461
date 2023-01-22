import "./App.css";




// import Navbar from './Components/Navbar';
 
import AllRoutes from './pages/AllRoutes';
// import ProductList from './Components/ProductList';\
import ProductList from "./Components/CompnentsT/ProductList";



// import ProductList from './Components/ProductList';
// import Navbar from './Components/Navbar';

import ProductDetail from "./PagesT/ProductDetail";
import Filters from "./Components/CompnentsT/Filters";
import Navbar2 from "./Components/Navbar2";


import Navbar from './Components/Navbar';
import Home from "./VPages/Home";

function App() {
  return (
    <div className="App">

      <Navbar2 />
    
      <AllRoutes />
    
  
    
      {/* <ProductDetail />  */}

      {/* <Navbar2 /> */}
   

  {/* <Home/> */}
      {/* <ProductList /> */}
   

    </div>
  );
}

export default App;

