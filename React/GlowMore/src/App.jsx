import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Login from "./pages/login";
import Registration from "./pages/registration";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Registration" element={<Registration/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
