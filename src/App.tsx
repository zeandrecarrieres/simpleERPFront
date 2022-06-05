import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { MeusDados } from "./components/Context/MeuContexto";
import NossasRotas from "../src/routes/Routers";
import Login from "./components/login/Login";
import "./app.css";

import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";

function App() {

   return (
    <div className="app">
      <MeusDados>
        <Router>
          <Header />
            <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
          <NossasRotas />
          {/* <Footer /> */}
        </Router>
      </MeusDados>
    </div>
  );
}

export default App;
