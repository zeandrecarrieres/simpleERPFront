import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./saleadd.css";
import SideBar from "../sidebar/SideBar";
import api from "../../api/api";

function IncomeAdd() {
  let navigate = useNavigate();

  let baseSale = {
    type: "",
    NfNumber: "",
    IssueDate: "",
    salesmanId: "",
    comission: "",
    clientId: "",
    freight: "",
    depenses: "",
    paymentConditions: "",
    dueDate: "",
    paymentMethod: "",
  };
  // let baseProduct = {
  //   code: "",
  //   categoryId: "",
  //   name: "",
  //   description: "",
  //   unit: "",
  //   price: 0,
  //   cost: 0,
  // };

  const [sale, setSale] = useState(baseSale);
  const [client, setClient] = useState([]);

  useEffect(() => {
    api
      .get("/client")
      .then((response) => response.data)
      .then((item) => setClient(item))
      .catch((err) => console.error(err));
  }, []);

  function handleChange(e: any) {
    setSale({
      ...sale,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    // if (
    //   !product.code ||
    //   !product.categoryId ||
    //   !product.name ||
    //   !product.description ||
    //   !product.unit ||
    //   !product.price ||
    //   !product.cost
    // ) {
    //   alert("Preencha todos os campos!");
    // }

    console.log(sale);
    api.post("/sale", sale);

    alert("incluido");

    // clearForm();

    navigate("/sale");
  }

  function clearForm() {
    setSale(baseSale);
  }

  return (
    <div className="container">
      <SideBar />
      <main>
        <h2>SAÍDA</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <label htmlFor="type">Type</label>
            <select name="type" id="type" onChange={handleChange} required>
              <option selected disabled>
                Selecione...
              </option>

              <option value="sell">Venda</option>
              <option value="outgoing">Saída</option>
              <option value="consignate">Consignado</option>
            </select>
            <label htmlFor="NfNumber">Número NF</label>
            <input
              type="text"
              name="NfNumber"
              onChange={handleChange}
              // value={product.code}
            />

            <label htmlFor="IssueDate">Data de Emissão:</label>
            <input
              type="text"
              name="IssueDate"
              onChange={handleChange}
              // value={product.name}
            />

             <label htmlFor="salesmanId">Vendedor:</label>
            <input
              type="text"
              name="salesmanId"
              onChange={handleChange}
              // value={product.name}
            />

             <label htmlFor="comission">Comissão:</label>
            <input
              type="number"
              name="comission"
              onChange={handleChange}
              // value={product.name}
            />


            <label htmlFor="clientId">Cliente</label>
            <select
              name="clientId"
              id="clientId"
              onChange={handleChange}
              required
            >
              <option selected disabled>
                Selecione...
              </option>
              {client.map((option: any) => (
                <>
                  <option value={option._id}>{option.name}</option>
                </>
              ))}
            </select>

            <label htmlFor="freight">Frete:</label>
            <input
              type="number"
              name="freight"
              onChange={handleChange}
              // value={product.description}
            />
            <label htmlFor="depenses">Outras despesas:</label>
            <input
              type="number"
              name="depenses"
              onChange={handleChange}
              // value={product.unit}
            />
            <label htmlFor="paymentConditions">Condição de pagamento:</label>
            <select
              name="paymentConditions"
              id="paymentConditions"
              onChange={handleChange}
              required
            >
              <option selected disabled>
                Selecione...
              </option>

              <option value="cash">à vista</option>
              <option value="term">à prazo</option>
              <option value="finan">em parcelas</option>

              <option value="card">Cartão de Crédito</option>
            </select>
            <label htmlFor="dueDate">Data de Vencimento:</label>
            <input
              type="text"
              name="dueDate"
              onChange={handleChange}
              // value={product.cost}
            />

            <label htmlFor="paymentMethod">Type</label>
            <select
              name="paymentMethod"
              id="paymentMethod"
              onChange={handleChange}
              required
            >
              <option selected disabled>
                Selecione...
              </option>

              <option value="money">Dinheiro</option>
              <option value="check">Cheque</option>
              <option value="slip">Boleto</option>

              <option value="card">Cartão de Crédito</option>
            </select>
          </div>

          <button>Incluir</button>
        </form>
      </main>
    </div>
  );
}

export default IncomeAdd;
