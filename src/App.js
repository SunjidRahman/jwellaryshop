import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Category } from "@mui/icons-material";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/Contact";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import Cart from './pages/Cart';


const App = () => {
  return (
    <Router>
     
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="Home/" element={<Home/>}/>
          <Route exact path="/about" element={<AboutPage/>}/>
          <Route exact path="/contact" element={<ContactPage/>}/>
          <Route exact path="/category" element={<CategoryPage/>}/>
          <Route exact path="/product" element={<ProductPage/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
         
   
        </Routes>
      
    </Router>
  );
}

export default App;
