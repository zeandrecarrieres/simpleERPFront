import React, { useState, useEffect } from "react";
import SideBar from "../sidebar/SideBar";
import api from "../../api/api";
import "./inflow.css";

function InFlow() {
  const data = {
    _id: "",
    type: "",
    NfNumber: "",
    issueDate: "",
    clientId: {
      clientSupplier: "CLIENT",
			type: "consumer",
			name: "José André",
			fantasyName: "Zé",
			CpfCnpj: "123.456.789-50",
			inscription: "0"},
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
  const [type, setType] = useState("");

  useEffect(() => {
    api
      .get("/sale")
      .then((response) => response.data)
      .then((item) => setSales(item))
      .catch((err) => console.error(err));
  }, []);

  function filterList() {
    console.log(startDate, endDate, type);
  }

  return (
    <div className="container">
      <SideBar />
      <main>
        <h2>Contas a Receber</h2>
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
            <label htmlFor="type">Tipo:</label>
            <select
              name="paymentConditions"
              id="paymentConditions"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setEndDate(e.target.value);
              }}
              required
            >
              <option selected disabled>
                Selecione...
              </option>

              <option value="cash">à vista</option>
              <option value="term">à prazo</option>
              <option value="finan">em parcelas</option>

              <option value="card">Cartão de Crédito</option>
            </select>
          </div>
          <div>
            <button onClick={filterList}>Filtrar</button>
          </div>
        </div>

        <ul className="list-container">
           <li className="list-title">DATA DA EMISSÃO - NÚMERO - CLIENTE - VENCIMENTO - TIPO</li>
          {sales.map((item, index) => (
            <>
              <li key={index} className="list">
                {item.issueDate} - {item.clientId.name} - {item.paymentConditions} - {item.paymentMethod} - {item.dueDate}
                <div></div>
              </li>
            </>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default InFlow;
