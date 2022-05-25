import "./supplieradd.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import api from "../../api/api";

function SupplierAdd() {
  let navigate = useNavigate();

  let baseSupplier = {
    clientSupplier: "SUPPLIER",
    type: "",
    name: "",
    fantasyName: "",
    CpfCnpj: "",
    inscription: "",
  };

  const [supplier, setSupplier] = useState(baseSupplier);

  function handleChange(e: any) {
    setSupplier({
      ...supplier,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    if (
      !supplier.type ||
      !supplier.name ||
      !supplier.fantasyName ||
      !supplier.CpfCnpj ||
      !supplier.inscription
    ) {
      alert("Preencha todos os campos!");
    }

    api.post("/supplier", supplier);

    alert("Fornecedor adicionado com sucesso!");
    clearForm();

    navigate("/supplier");
  }

  function clearForm() {
    setSupplier(baseSupplier);
  }

  return (
    <div className="container">
      <SideBar />
      <main>
        <h2>CADASTRO DE FORNECEDOR</h2>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="clientSupplier" value="SUPPLIER" />
          <div className="form-container">
            <label htmlFor="type">Tipo</label>
            <select
              name="type"
              id="type"
              onChange={handleChange}
              required
              value={supplier.type}
            >
              <option selected disabled>
                Selecione o tipo:
              </option>
              <option value="consumer">Pessoa Física</option>
              <option value="enterprise">Pessoa Jurídica</option>
            </select>
            <label htmlFor="name">Nome</label>
            <input
              type="name"
              name="name"
              onChange={handleChange}
              value={supplier.name}
              required
            />
            <label htmlFor="fantasyName">Nome Fantasia</label>
            <input
              type="text"
              name="fantasyName"
              onChange={handleChange}
              value={supplier.fantasyName}
              required
            />
            <div>
              <label htmlFor="CpfCnpj">CPF / CNPJ</label>
              <input
                type="textt"
                name="CpfCnpj"
                onChange={handleChange}
                value={supplier.CpfCnpj}
                required
              />
              <label htmlFor="inscription">Inscrição Estadual</label>
              <input
                type="text"
                name="inscription"
                onChange={handleChange}
                value={supplier.inscription}
                required
              />
            </div>
          </div>
          <button>Incluir</button>
        </form>
      </main>
    </div>
  );
}

export default SupplierAdd;
