import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./clientadd.css";
import SideBar from "../sidebar/SideBar";
import api from "../../api/api";

function ClientAdd() {
   let navigate = useNavigate()

  let baseClient = {
    clientSupplier: "CLIENT", //Identificação se é cliente ou fornecedor
    type: "select",
    name: "",
    fantasyName: "",
    CpfCnpj: "",
    inscription: "",
  };

  const [client, setClient] = useState(baseClient);

  function handleChange(e: any) {
    setClient({
      ...client,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    if (
      !client.type ||
      !client.name ||
      !client.fantasyName ||
      !client.CpfCnpj ||
      !client.inscription
    ) {
      alert("Preencha todos os campos!");
    }

    api.post("/client", client);
  alert("Cliente Adicionado com sucesso!");
    clearForm();

    navigate("/client")
  }
  
   function clearForm() {
    setClient(baseClient);
  }
  return (
    <div className="container">
      <SideBar />
      <main>
        <h2>CADASTRO DE CLIENTE</h2>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="clientSupplier" value="CLIENT" />
          <div className="form-container">
            <label htmlFor="type">Tipo</label>
            <select name="type" id="type" onChange={handleChange} value={client.type} required>
              <option selected disabled value={"select"}>
                Selecione o tipo:
              </option>
              <option value="consumer">Pessoa Física</option>
              <option value="enterprise">Pessoa Jurídica</option>
            </select>

            <label htmlFor="name">Nome</label>
            <input type="name" name="name" onChange={handleChange} value={client.name} required />
            <label htmlFor="fantasyName">Nome Fantasia</label>
            <input
              type="text"
              name="fantasyName"
              onChange={handleChange}
              required
             value={client.fantasyName}
            />

            <div>
              <label htmlFor="CpfCnpj">CPF / CNPJ</label>
              <input
                type="textt"
                name="CpfCnpj"
                onChange={handleChange}
                required
                value={client.CpfCnpj}
              />
              <label htmlFor="inscription">Inscrição Estadual</label>
              <input
                type="text"
                name="inscription"
                onChange={handleChange}
                required
                value={client.inscription}
              />
            </div>
          </div>
          <button>Incluir</button>
        </form>
      </main>
    </div>
  );
}

export default ClientAdd;
