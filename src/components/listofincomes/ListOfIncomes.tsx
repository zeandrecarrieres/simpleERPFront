import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import "./listofincomes.css";
import api from "../../api/api";

function ListOfIncomes() {
  const data = {
    _id: "",
    type: "",
    NfNumber: "",
    IssueDate: "",
    supplierId: "",
    freight: "",
    depenses: "",
    paymentConditions: "",
    dueDate: "",
    paymentMethod: "",
  };

  const [incomes, setIncomes] = useState([data]);

  useEffect(() => {
    api
      .get("/income")
      .then((response) => response.data)
      .then((item) => setIncomes(item))
      .catch((err) => console.error(err));
  }, []);

  const suspendClient = async (id: any) => {
    alert("Cliente suspenso com sucesso!");
  };

  return (
    <div className="container">
      <SideBar />
      <main>
        <h1>Lista de Entradas</h1>
        <div>
          <Link className="add-button" to={"/incomeadd"}>
            Nova Entrada
          </Link>
        </div>
        <ul>
          {incomes.map((item, index) => (
            <>
              <li key={index} className="list">
                <Link 
                  className="menu-link"
                  to={`/income/detail/${item._id}`}
                >
                  {item.type} - {item.NfNumber}
                </Link>

                <div>
                  <Link className="add-button" to={`/transactionproducts/${item._id}`}>
                    incluir produtos
                  </Link>
                  <Link className="edit-button " to={`/addressadd/${item._id}`}>editar</Link>
                  <button className="remove-button" onClick={(e)=>suspendClient(item._id)}>cancelar</button>
                </div>
              </li>
            </>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default ListOfIncomes;
