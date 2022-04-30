import { useState } from "react";
import "./clientadd.css";
import SideBar from "../sidebar/SideBar";
import api from "../../api/api"

function ClientAdd() {
  let client = {
    type: "",
    name: "",
    fantasyName: "",
    CpfCnpj: "",
    inscription: ""
  }

  function handleChange(e: any) {
    client = { ...client, [e.target.name]: e.target.value }
    console.log(client)
  }

  function handleSubmit(e: any) {
    e.preventDefault()
    console.log(client)
    api.post("/client", client)
  }

  return (
    <div className="container">
      <SideBar />
      <main>
        <h2>CADASTRO DE CLIENTE</h2>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="type" value="client" />
          <div className="form-container">
            <label htmlFor="type">Tipo</label>
            <select name="type" id="type" onChange={handleChange}>
              <option value="consumer">Pessoa Física</option>
              <option value="enterprise">Pessoa Jurídica</option>
            </select>

            <label htmlFor="name">Nome</label>
            <input type="name" name="name" onChange={handleChange}/>
            <label htmlFor="fantasyName">Nome Fantasia</label>
            <input type="text" name="fantasyName" onChange={handleChange} />

            <div>
              <label htmlFor="CpfCnpj">CPF / CNPJ</label>
              <input type="textt" name="CpfCnpj" onChange={handleChange}/>
              <label htmlFor="inscription">Inscrição Estadual</label>
              <input type="text" name="inscription"onChange={handleChange}/>
            </div>
          </div>
       <button>Incluir</button>
        </form>
      </main>
    </div>
  );
}

export default ClientAdd;
