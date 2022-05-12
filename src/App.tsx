import Header from "./components/header/Header";
import Home from "./components/home/Home";
// import Footer from "./components/footer/Footer";
import UserAdd from "./components/userAdd/UserAdd";
import SupplierAdd from "./components/supplieradd/SupplierAdd";
import ProductAdd from "./components/productadd/ProductAdd";
import CategoryAdd from "./components/categoryadd/CategoryAdd";
import AddressAdd from "./components/addressadd/AddressAdd";
import ListOfClients from "./components/listofclients/ListOfClients";
import ClientAdd from "./components/clientadd/ClientAdd";
import IncomeAdd from "./components/incomeadd/IncomeAdd";
import Dashboard from "./components/dashBoard/dashboard";
import ClientProfile from "./components/clientprofile/ClientProfile";
import ListOfSuppliers from "./components/listofsuppliers/ListOfSuppliers";
import SupplierProfile from "./components/supplierprofile/SupplierProfile";
import ProductProfile from "./components/productprofile/ProductProfile";
import ListOfProducts from "./components/listofproducts/ListOfProducts";
import ListOfCategories from "./components/listofcategories/ListOfCategories";
import ListOfIncomes from "./components/listofincomes/ListOfIncomes";
import SaleAdd from "./components/saleadd/SaleAdd";
import ListOfSales from "./components/listofsales/ListOfSales";
import TransactionProducts from "./components/transactionproducts/TransactionProducts";
import IncomeDetail from "./components/incomeDetail/IncomeDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/useradd" element={<UserAdd />} />
          <Route path="/client" element={<ListOfClients />} />
          <Route path="/clientadd" element={<ClientAdd />} />
          <Route path="/client/profile/:_id" element={<ClientProfile />} />
          <Route path="/addressadd/:_id/:type" element={<AddressAdd />} />
          <Route path="/supplier" element={<ListOfSuppliers />} />
          <Route path="/supplieradd" element={<SupplierAdd />} />
          <Route path="/supplier/profile/:_id" element={<SupplierProfile />} />
          <Route path="/product" element={<ListOfProducts />} />
          <Route path="/productadd" element={<ProductAdd />} />
          <Route path="/product/profile/:_id" element={<ProductProfile />} />
          <Route path="/category" element={<ListOfCategories />} />
          <Route path="/categoryadd" element={<CategoryAdd />} />
          <Route path="/incomeadd" element={<IncomeAdd />} />
          <Route path="/income" element={<ListOfIncomes />} />
           <Route path="/saleadd" element={<SaleAdd />} />
          <Route path="/sale" element={<ListOfSales />} />
          <Route path="/income/detail/:_id" element={<IncomeDetail />} />
          <Route path="/transactionproducts" element={<TransactionProducts />} />
          <Route path="/transactionproducts/:id" element={<TransactionProducts />} />
          
          

        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
