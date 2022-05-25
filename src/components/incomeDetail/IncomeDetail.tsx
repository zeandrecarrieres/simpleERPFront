import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import api from "../../api/api";
import style from "./styles.module.css";

function IncomeDetail() {
  let baseIncome = {
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

  const incomeProducts = [
    {
      transactionId: "",
      productId: "",
      discount: "",
      value: "",
    },
  ];

  const [income, setIncome] = useState(baseIncome);
  const [setProducts, setAddresses] = useState(incomeProducts);

  const { _id } = useParams();

  useEffect(() => {
    api
      .get(`/income/detail/${_id}`)
      .then((response) => response.data)
      .then((item) => console.log(item))
      .catch((err) => console.error(err));
  }, [_id]);

  return (
    <div className="container">
      <SideBar />
      <main>
        <h2>Detalhe da Entrada</h2>
        <p>Nome:</p>

        <h2>ENDEREÇOS</h2>

        <li>{income.dueDate}</li>
      </main>
    </div>
  );
}

export default IncomeDetail;
