import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";
import { Footer } from "./Components/footer/Footer";
import { Register } from "./pages/login/Register";
import { Login } from "./pages/login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/account" element={<Account />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
