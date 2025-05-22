import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import CakePage from "./pages/CakePage";
import Cart from "./pages/Cart";
import OrderPage from "./pages/OrderPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./scss/main.scss";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cakes/:id" element={<CakePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
