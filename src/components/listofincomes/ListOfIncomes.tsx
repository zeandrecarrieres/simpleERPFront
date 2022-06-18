import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import { IncomeContext } from "../Context/IncomeContext";
import "./listofincomes.css";
import api from "../../api/api";

function ListOfIncomes() {
  // const { incomesData, setIncomesData } = useContext(IncomeContext);


  const data = {
    _id: "",
    type: "",
    NfNumber: "",
    IssueDate: "",
    supplierId: {
      clientSupplier: "",
      type: "",
      name: "",
      fantasyName: "",
      inscription: "",
    },
    freight: "",
    depenses: "",
    paymentConditions: "",
    dueDate: "",
    paymentMethod: "",
  };

  const [incomes, setIncomes] = useState([data]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [incomesFiltred, setIncomesFiltred] = useState([data]);

  useEffect(() => {
    api
      .get("/income")
      .then((response) => response.data)
      .then((item) => {
        setIncomes(item);
        setIncomesFiltred(item);
      })
      .catch((err) => console.error(err));
  }, []);

  const mudaData = (date: string) => {
    const initialDate = date;
    const splitDate = initialDate.split("/");
    console.info(`Split date: ${splitDate}`);
    const newDate = splitDate[2] + "-" + splitDate[1] + "-" + splitDate[0];
    console.info(`new date: ${newDate}`);
    return newDate;
  };

  const getStartDate = (e: any) => {
    e.preventDefault();
    console.log(`StartDate: ${e.target.value}`);
    const oldDate = e.target.value;
    setStartDate(oldDate);
    return;
  };

  const getEndDate = (e: any) => {
    e.preventDefault();
    console.log(`EndDate: ${e.target.value}`);
    const oldDate = e.target.value;
    setEndDate(oldDate);
    return;
  };

  const suspendClient = async (id: any) => {
    alert("Cliente suspenso com sucesso!");
  };

  const filterDates = (initialDate: any, finalDate: any, compareDate: any) => {
    let initDate = initialDate;
    let endDate = finalDate;
    let compDate = compareDate;
    let periodo = 60;
    let newInitialDate = new Date(initDate);
    let newEndDate = new Date(endDate);
    const dataPadronizada = mudaData(compDate);
    let newCompareDate = new Date(dataPadronizada);

    console.log(`TypesDate: ${typeof newInitialDate} ${typeof newEndDate}`);
    console.log(`results: ${newInitialDate} ${newEndDate}`);

    const compararDatas =
      newCompareDate >= newInitialDate && newCompareDate <= newEndDate;

    console.log(`Datas comparadas: ${compararDatas}`);

    return compararDatas;
  };

  function filterList() {
    const filtrado = incomes.filter((item) => filterDates(startDate, endDate, item.IssueDate));


    console.log(`filtrados: ${filtrado}`);

    setIncomesFiltred(filtrado);

  }

  function getKeyWord() {

  }

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
        <div className="filter-container">
          <div>
            <label htmlFor="keyWord">Palavra-Chave:</label>
            <input type="text" onChange={getKeyWord} />
          </div>
          <div>
            <label htmlFor="startDate">Data Inicial:</label>
            <input type="date" onChange={getStartDate} />
          </div>
          <div>
            <label htmlFor="endDate">Data Final:</label>
            <input type="date" onChange={getEndDate} />
          </div>

          <div>
            <button onClick={filterList}>Filtrar</button>
          </div>
        </div>
        <ul className="list-container">
          <li className="list-title">DATA - NÚMERO - TIPO - FOR</li>
          {incomesFiltred.map((item, index) => (
            <>
              <li key={index} className="list-incomes">
                <Link className="menu-link" to={`/income/detail/${item._id}`}>
                  {item.IssueDate} - {item.NfNumber} - {item.type} -{" "}
                  {item.supplierId && <span>{item.supplierId.name}</span>}
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
                    onClick={(e) => suspendClient(item._id)}
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

export default ListOfIncomes;
