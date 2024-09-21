import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";
import { Register } from "./pages/login/Register";
import { Login } from "./pages/login/Login";
import { Footer } from "./Components/footer/Footer";
import { useSelector } from "react-redux";

function App() {
  const isLoggIn = useSelector((state) => state.auth.isLoggIn);
  const cartItems = useSelector((state) => state.cart.itemsList);
  console.log(cartItems)

  return (
    <>
      {isLoggIn && (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/account" element={<Account />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
      {!isLoggIn && <Login />}
    </>
  );
}

export default App;
