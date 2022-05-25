import "./dashboard.css";
import SideBar from "../sidebar/SideBar";
import { useContext, useState } from "react";
import { MeuContexto } from "../Context/MeuContexto";

const Dashboard: React.FC = () => {
 
 const { logado, setLogado } = useContext(MeuContexto)

  console.info(logado)

  function click() {
    setLogado(true)
  }

  return (
    <div className="container">
      {logado && <p>Teste</p>}
    <button onClick={click}>Logar</button>
    </div>
  );
};

export default Dashboard;
