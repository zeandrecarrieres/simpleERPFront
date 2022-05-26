import React, { useState, useEffect, useContext } from "react";
import { MeuContexto } from "./components/Context/MeuContexto";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { MeusDados } from "./components/Context/MeuContexto";
import NossasRotas from "../src/routes/Routers";
import Login from "./components/login/Login";
import api from "./api/api";
import "./app.css";

import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";

function App() {
  const { logado, setLogado } = useContext(MeuContexto);
  const [loading, setLoading] = useState<boolean>(true);
  const [teste, setTeste] = useState("")

  console.log(logado)

  let token:string | null = ""
  useEffect(() => {

    setLogado(true);

    // (async () => {
    //   token = await localStorage.getItem("token");
    //   setLoading(false);
    //   if (token) {
    //   //   api.defaults.headers.common["Authorization"] = `Bearer ${token} `;
    //   //   console.log(token);
        
    //   //   return
    //   }
    // })()
    
    
    console.log(logado)
    setLoading(false)
  }, [logado]);
  
  if (loading) {
    return <h1>Carregando !!!</h1>;
  }


  return (
    <div className="app">
      <MeusDados>
        <Router>
          <Header />
            {String(logado)}
            {/* {!logado && <Navigate to="/login" />} */}
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
