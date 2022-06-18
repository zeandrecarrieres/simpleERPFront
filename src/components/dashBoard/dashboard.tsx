import React, { useState, useEffect, useContext } from "react";
// import IncomeContext from "../Context/IncomeContext";
import { Link } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import "./dashboard.css";
import api from "../../api/api";

function Dashboard() {
  // const incomes = useContext(IncomeContext);


  return (
    <div className="container">
      <SideBar />
      <main>
        <h1>Dashboard</h1>
        <div>

        </div>


      </main>
    </div >
  );
}

export default Dashboard;

