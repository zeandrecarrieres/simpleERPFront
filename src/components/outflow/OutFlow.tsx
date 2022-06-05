import React, { useState, useEffect } from "react";
import SideBar from "../sidebar/SideBar";
import api from "../../api/api";
import "./outflow.css"

function InFlow() {
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
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [type, setType] = useState("");

  useEffect(() => {
    api
      .get("/income")
      .then((response) => response.data)
      .then((item) => setIncomes(item))
      .catch((err) => console.error(err));
  }, []);

  function filterList() {
       console.log(startDate, endDate, type)
  }

  return (
    <div className="container">
      <SideBar />
      <main>
        <h2>Contas a Receber</h2>
        <div className="filter-container">
   <div>
          <label htmlFor="startDate">Data Inicial:</label>
            <input type="date" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setStartDate(e.target.value)
            }}/>
        </div>
        <div>
          <label htmlFor="endDate">Data Final:</label>
              <input type="date" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEndDate(e.target.value)
            }}/>
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
     

        <ul>
          {incomes.map((item, index) => (
            <>
              <li key={index} className="list">
                {item.dueDate} - {item.NfNumber} - {item.supplierId} -{" "}
                {item.paymentMethod}
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