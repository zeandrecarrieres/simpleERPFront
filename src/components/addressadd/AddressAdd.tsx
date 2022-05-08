import "./addressadd.css";
import { useState } from "react";
import SideBar from "../sidebar/SideBar";
import { useParams } from "react-router-dom";
import api from "../../api/api";

function AddressAdd() {
  const baseAddress = {
    street: "",
    number: "",
    complement: "",
    district: "",
    zipCode: "",
    city: "",
    state: "",
    country: "",
    referenceId: "",
    referenceType: "",
  };

  const references = {
    referenceId: "referenceId",
    referenceType: "referenceType",
  };

  const [address, setAdress] = useState(baseAddress);

  const { _id, type } = useParams();

  console.info(_id, type);

  function handleChange(e: any) {
    setAdress({
      ...address,
      [e.target.name]: e.target.value,
      [references.referenceId]: _id,
      [references.referenceType]: type,
    });
    console.log(address);
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (
      !address.street ||
      !address.city ||
      !address.complement ||
      !address.country ||
      !address.district ||
      !address.number ||
      !address.state ||
      !address.zipCode
    ) {
      alert("Preencha todos os campos!");
    }
    const response = await api.post("/address", address);

    alert("Endereço Adicionado com sucesso!");
    clearForm();
    console.log(response);
  }

  function clearForm() {
    setAdress(baseAddress);
  }

  return (
    <div className="container">
      <SideBar />
      <main>
        <h2>CADASTRO DE ENDEREÇOS</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <label htmlFor="street">Endereço</label>
            <input
              type="text"
              name="street"
              onChange={handleChange}
              value={address.street}
            />
            <div className="forms-group">
              <label htmlFor="number">Número</label>
              <input
                type="text"
                name="number"
                onChange={handleChange}
                value={address.number}
              />
              <label htmlFor="complement">Complemento</label>
              <input
                type="text"
                name="complement"
                onChange={handleChange}
                value={address.complement}
              />
            </div>

            <div className="forms-group">
              <label htmlFor="district">Bairro</label>
              <input
                type="text"
                name="district"
                onChange={handleChange}
                value={address.district}
              />
              <label htmlFor="zipCode">CEP</label>
              <input
                type="text"
                name="zipCode"
                onChange={handleChange}
                value={address.zipCode}
              />
            </div>

            <div className="forms-group">
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                name="city"
                onChange={handleChange}
                value={address.city}
              />

              <label htmlFor="state">Estado</label>
              <input
                type="text"
                name="state"
                onChange={handleChange}
                value={address.state}
              />
            </div>

            <label htmlFor="country">País</label>
            <input
              type="text"
              name="country"
              onChange={handleChange}
              value={address.country}
            />
          </div>
          <button type="submit">Incluir</button>{" "}
          <button type="reset" onClick={clearForm}>
            Limpar
          </button>
        </form>
      </main>
    </div>
  );
}

export default AddressAdd;
