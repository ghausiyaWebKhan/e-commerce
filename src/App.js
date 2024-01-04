import React from "react";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import ShopDetail from "./components/ShopDetail/ShopDetail";
import ShopCart from "./components/ShopCart/ShopCart";
import Contact from "./components/Contact/Contact";
import { Routes, Route } from "react-router-dom";
import ShoppingCart from '../src/components/ShoppingCart/ShoppingCart'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Navbar/Header'
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
    <Header/>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/shop" element={<Shop/>} exact />
          <Route path="/shopdetail" element={<ShopDetail/>} exact />
          <Route path="/shopcart" element={<ShopCart/>} exact />
          <Route path="/contact" element={<Contact/>} exact />
        </Routes>
        {/* <ShoppingCart/> */}
        <Footer/>
    </>
  );
};

export default App;