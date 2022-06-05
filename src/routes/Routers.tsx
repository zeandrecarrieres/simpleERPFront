import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




import Home from "../components/home/Home";
import Dashboard from "../components/dashBoard/dashboard";
import UserAdd from "../components/userAdd/UserAdd";
import ListOfUsers from "../components/listofusers/ListOfUsers";
import UserProfile from "../components/userprofile/UserProfile";
import SupplierAdd from "../components/supplieradd/SupplierAdd";
import ListOfSuppliers from "../components/listofsuppliers/ListOfSuppliers";
import SupplierProfile from "../components/supplierprofile/SupplierProfile";
import ClientAdd from "../components/clientadd/ClientAdd";
import ListOfClients from "../components/listofclients/ListOfClients";
import ClientProfile from "../components/clientprofile/ClientProfile";
import AddressAdd from "../components/addressadd/AddressAdd";
import ProductAdd from "../components/productadd/ProductAdd";
import ListOfProducts from "../components/listofproducts/ListOfProducts";
import ProductProfile from "../components/productprofile/ProductProfile";
import CategoryAdd from "../components/categoryadd/CategoryAdd";
import ListOfCategories from "../components/listofcategories/ListOfCategories";
import IncomeAdd from "../components/incomeadd/IncomeAdd";
import ListOfIncomes from "../components/listofincomes/ListOfIncomes";
import IncomeDetail from "../components/incomeDetail/IncomeDetail";
import SaleAdd from "../components/saleadd/SaleAdd";
import ListOfSales from "../components/listofsales/ListOfSales";
import TransactionProducts from "../components/transactionproducts/TransactionProducts";
import CashFlow from "../components/cashFlow/CashFlow";
import OutFlow from "../components/outflow/OutFlow";
import InFlow from "../components/inflow/InFlow";
import Stock from "../components/stock/stock";
import Private from "../Private/Private";
import { MeuContexto } from "../components/Context/MeuContexto";


function Routers() {
const { logado, setLogado } = useContext(MeuContexto)

  useEffect(() => {
  const loggedUser = localStorage.getItem('userId')

    console.log(`usuario logado ${loggedUser} `)
    if (loggedUser) {
      setLogado(true)
      console.log(logado)
      
    }

  })
  
    return (
    <Routes>
      {/* Home Routes */}

      <Route path="/" element={<Private><Home /></Private>} />
      {/* User Routes */}
      <Route path="/useradd" element={<Private><UserAdd /></Private>} />
      <Route path="/user" element={<Private><ListOfUsers /></Private>} />
      <Route path="/user/profile/:_id" element={<Private><UserProfile /></Private>} />
      {/* Dashboard Routes */}
      <Route path="/dashboard" element={<Private><Dashboard /></Private>} />
      {/* Supplier Routes */}
      <Route path="/supplieradd" element={<Private><SupplierAdd /></Private>} />
      <Route path="/supplier" element={<Private><ListOfSuppliers /></Private>} />
      <Route path="/supplier/profile/:_id" element={<Private><SupplierProfile /></Private>} />
      {/* Client Routes */}
      <Route path="/client" element={<Private><ListOfClients /></Private>} />
      <Route path="/clientadd" element={<Private><ClientAdd /></Private>} />
      <Route path="/client/profile/:_id" element={<Private><ClientProfile /></Private>} />
      <Route path="/addressadd/:_id/:type" element={<Private><AddressAdd /></Private>} />
      {/* Product Routes */}
      <Route path="/product" element={<Private><ListOfProducts /></Private>} />
      <Route path="/productadd" element={<Private><ProductAdd /></Private>} />
      <Route path="/product/profile/:_id" element={<Private><ProductProfile /></Private>} />
      {/* Category Routes */}
      <Route path="/category" element={<Private><ListOfCategories /></Private>} />
      <Route path="/categoryadd" element={<Private><CategoryAdd /></Private>} />
      {/* Income Routes */}
      <Route path="/incomeadd" element={<Private><IncomeAdd /></Private>} />
      <Route path="/income" element={<Private><ListOfIncomes /></Private>} />
      <Route path="/income/detail/:_id" element={<Private><IncomeDetail /></Private>} />
      {/* Sales Routes */}
      <Route path="/saleadd" element={<Private><SaleAdd /></Private>} />
      <Route path="/sale" element={ <Private><ListOfSales /></Private>} />
      <Route path="/stock" element={<Private><Stock /></Private>} />

      {/* Transactions Products Routes */}
      <Route path="/transactionproducts" element={<Private><TransactionProducts /></Private>} />
      <Route
        path="/transactionproducts/:id"
        element={<Private><TransactionProducts /></Private>}
      />
      <Route path="/cashflow" element={<Private><CashFlow /></Private>} />
      <Route path="/inflow" element={<Private><InFlow /></Private>} />
      <Route path="/outflow" element={<Private><OutFlow /></Private>} />
  
    </Routes>
  );
}

export default Routers;
