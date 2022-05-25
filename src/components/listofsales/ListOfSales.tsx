import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import "./listofsales.css";
import api from "../../api/api";

function ListOfSales() {
  const data = {
    _id: "",
    type: "",
    NfNumber: "",
    IssueDate: "",
    clientId: "",
    salesmanId: "",
    comission: "",
    freight: "",
    depenses: "",
    paymentConditions: "",
    dueDate: "",
    paymentMethod: "",
  };

  const [sales, setSales] = useState([data]);

  useEffect(() => {
    api
      .get("/sale")
      .then((response) => response.data)
      .then((item) => setSales(item))
      .catch((err) => console.error(err));
  }, []);

  const suspendSale = async (id: any) => {
    alert("Saída suspensa com sucesso!");
  };

  return (
    <div className="container">
      <SideBar />
      <main>
        <h1>Lista de Saídas</h1>
        <div>
          <Link className="add-button" to={"/saleadd"}>
            Nova Saída
          </Link>
        </div>
        <ul>
          {sales.map((item, index) => (
            <>
              <li key={index} className="list">
                <Link className="menu-link" to={`/sale/detail/${item._id}`}>
                  {item.type} - {item.NfNumber}
                </Link>

                <div>
                  <Link
                    className="add-button"
                    to={`/transactionproducts/${item._id}`}
                  >
                    incluir produtos
                  </Link>
                  <Link className="edit-button " to={`/addressadd/${item._id}`}>
                    editar
                  </Link>
                  <button
                    className="remove-button"
                    onClick={(e) => suspendSale(item._id)}
                  >
                    cancelar
                  </button>
                </div>
              </li>
            </>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default ListOfSales;
