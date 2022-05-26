import React from 'react'
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




function Routers() {
  return (
      <Routes>
          
      {/* Home Routes */}
           
            <Route path="/" element={<Home />} />
            {/* User Routes */}
            <Route path="/useradd" element={<UserAdd />} />
            <Route path="/user" element={<ListOfUsers />} />
            <Route path="/user/profile/:_id" element={<UserProfile />} />
            {/* Dashboard Routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Supplier Routes */}
            <Route path="/supplieradd" element={<SupplierAdd />} />
            <Route path="/supplier" element={<ListOfSuppliers />} />
            <Route
              path="/supplier/profile/:_id"
              element={<SupplierProfile />}
            />
            {/* Client Routes */}
            <Route path="/client" element={<ListOfClients />} />
            <Route path="/clientadd" element={<ClientAdd />} />
            <Route path="/client/profile/:_id" element={<ClientProfile />} />
            <Route path="/addressadd/:_id/:type" element={<AddressAdd />} />
            {/* Product Routes */}
            <Route path="/product" element={<ListOfProducts />} />
            <Route path="/productadd" element={<ProductAdd />} />
            <Route path="/product/profile/:_id" element={<ProductProfile />} />
            {/* Category Routes */}
            <Route path="/category" element={<ListOfCategories />} />
            <Route path="/categoryadd" element={<CategoryAdd />} />
            {/* Income Routes */}
            <Route path="/incomeadd" element={<IncomeAdd />} />
            <Route path="/income" element={<ListOfIncomes />} />
            <Route path="/income/detail/:_id" element={<IncomeDetail />} />
            {/* Sales Routes */}
            <Route path="/saleadd" element={<SaleAdd />} />
            <Route path="/sale" element={<ListOfSales />} />
            {/* Transactions Products Routes */}
            <Route
              path="/transactionproducts"
              element={<TransactionProducts />}
            />
            <Route
              path="/transactionproducts/:id"
              element={<TransactionProducts />}
            />

    </Routes>
  )
}

export default Routers