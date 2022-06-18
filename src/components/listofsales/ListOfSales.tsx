import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import "./listofsales.css";
import api from "../../api/api";

function ListOfSales() {
  const data = {
    _id: "",
    type: "",
    nfNumber: "",
    issueDate: "",
    clientId: {
			_id: "",
			clientSupplier: "",
			type: "",
			name: "",
			fantasyName: "",
			CpfCnpj: "",
			inscription: ""
		},
    salesmanId: "",
    comission: "",
    freight: "",
    depenses: "",
    paymentConditions: "",
    dueDate: "",
    paymentMethod: "",
  };

  const [sales, setSales] = useState([data]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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

   function filterList() {
    console.log(startDate, endDate);
  }

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

          <div className="filter-container">
          <div>
            <label htmlFor="startDate">Data Inicial:</label>
            <input
              type="date"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setStartDate(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="endDate">Data Final:</label>
            <input
              type="date"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEndDate(e.target.value);
              }}
            />
          </div>
          
          <div>
            <button onClick={filterList}>Filtrar</button>
          </div>
        </div>

        <ul className="list-container">
           <li className="list-title">DATA - NÚMERO - TIPO - CLIENTE</li>
          {sales.map((item, index) => (
            <>
              <li key={index} className="list-sales">
                <Link className="menu-link" to={`/sale/detail/${item._id}`}>
                 {item.issueDate} - {item.nfNumber} - {item.type} - {item.clientId.name}
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
