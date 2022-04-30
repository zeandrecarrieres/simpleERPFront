import Header from "./components/header/Header";
import Home from "./components/home/Home";
// import Footer from "./components/footer/Footer";
import UserAdd from "./components/userAdd/UserAdd";
import SupplierAdd from "./components/supplieradd/SupplierAdd";
import ProductAdd from "./components/productadd/ProductAdd";
import CategoryAdd from "./components/categoryadd/CategoryAdd";
import AddressAdd from "./components/addressadd/AddressAdd";
import ListOfClients from "./components/listofclients/listofclients"

import Dashboard from "./components/dashBoard/dashboard";
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
          <Route path="/supplieradd" element={<SupplierAdd />} />
          <Route path="/productadd" element={<ProductAdd />} />
          <Route path="/categoryadd" element={<CategoryAdd />} />
          <Route path="/addressadd" element={<AddressAdd />} />
           <Route path="/client" element={<ListOfClients />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
