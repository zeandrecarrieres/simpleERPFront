import Header from "./components/header/Header";
import Home from "./components/home/Home";
// import Footer from "./components/footer/Footer";
import UserAdd from "./components/userAdd/UserAdd";
import SupplierAdd from "./components/supplieradd/SupplierAdd";
import ProductAdd from "./components/productadd/ProductAdd";
import CategoryAdd from "./components/categoryadd/CategoryAdd";
import AddressAdd from "./components/addressadd/AddressAdd";
import ListOfClients from "./components/listofclients/listofclients";
import ClientAdd from "./components/clientadd/ClientAdd";
import Dashboard from "./components/dashBoard/dashboard";
import ClientProfile from "./components/clientprofile/ClientProfile";
import ListOfSuppliers from "./components/listofsuppliers/listofsuppliers";
import SupplierProfile from "./components/supplierprofile/SupplierProfile";
import ProductProfile from "./components/productprofile/ProductProfile"
import ListOfProducts from "./components/listofproducts/listofproducts"
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
          <Route path="/categoryadd" element={<CategoryAdd />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
