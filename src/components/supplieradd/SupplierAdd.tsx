import { useState } from "react";
import "./supplieradd.css";
import SideBar from "../sidebar/SideBar";
import AddressAdd from "../addressadd/AddressAdd";

function SupplierAdd() {
  const [address, setAdress] = useState([0]);

  function addAddress(e: any) {
    e.preventDefault();
    let ads = 2;
    // ads.push("1")
    setAdress([...address, ads]);
  }

  return (
    <div className="container">
      <SideBar />
      <main>
        <h2>CADASTRO DE FORNECEDOR</h2>
        <form>
          <input type="hidden" name="type" value="supplier" />
          <div className="form-container">
            <label htmlFor="type">Tipo</label>
            <select name="type" id="type">
              <option value="consumer">Pessoa Física</option>
              <option value="enterprise">Pessoa Jurídica</option>
            </select>

            <label htmlFor="name">Nome</label>
            <input type="name" name="name" />
            <label htmlFor="fantasyName">Nome Fantasia</label>
            <input type="text" name="fantasyName" />
            <div>
              <label htmlFor="CpfCnpj">CPF / CNPJ</label>
              <input type="textt" name="CpfCnpj" />
              <label htmlFor="inscription">Inscrição Estadual</label>
              <input type="text" name="inscription" />
            </div>
          </div>

          <button>Incluir</button>
        </form>
      </main>
    </div>
  );
}

export default SupplierAdd;
