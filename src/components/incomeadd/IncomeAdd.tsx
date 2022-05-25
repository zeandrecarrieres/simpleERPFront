import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./incomeadd.css";
import SideBar from "../sidebar/SideBar";
import api from "../../api/api";

function SaleAdd() {
  let navigate = useNavigate();

  let baseIncome = {
    type: "",
    NfNumber: "",
    IssueDate: "",
    supplierId: "",
    freight: "",
    depenses: "",
    paymentConditions: "",
    dueDate: "",
    paymentMethod: "",
  };

  const [income, setIncome] = useState(baseIncome);
  const [supplier, setSupplier] = useState([]);

  useEffect(() => {
    api
      .get("/supplier")
      .then((response) => response.data)
      .then((item) => setSupplier(item))
      .catch((err) => console.error(err));
  }, []);

  function handleChange(e: any) {
    setIncome({
      ...income,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    api.post("/income", income);

    alert("incluido");

    navigate("/income");
  }

  function clearForm() {
    setIncome(baseIncome);
  }

  return (
    <div className="container">
      <SideBar />
      <main>
        <h2>ENTRADA</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <label htmlFor="type">Type</label>
            <select name="type" id="type" onChange={handleChange} required>
              <option selected disabled>
                Selecione...
              </option>

              <option value="Entrada">Entrada</option>
              <option value="Compra">Compra</option>
            </select>
            <label htmlFor="NfNumber">Número NF</label>
            <input type="text" name="NfNumber" onChange={handleChange} />

            <label htmlFor="IssueDate">Data de Emissão:</label>
            <input type="text" name="IssueDate" onChange={handleChange} />

            <label htmlFor="supplierId">Fornecedor</label>
            <select
              name="supplierId"
              id="supplierId"
              onChange={handleChange}
              required
            >
              <option selected disabled>
                Selecione...
              </option>
              {supplier.map((option: any) => (
                <>
                  <option value={option._id}>{option.name}</option>
                </>
              ))}
            </select>

            <label htmlFor="freight">Frete:</label>
            <input type="number" name="freight" onChange={handleChange} />
            <label htmlFor="depenses">Outras despesas:</label>
            <input type="number" name="depenses" onChange={handleChange} />
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
            <input type="text" name="dueDate" onChange={handleChange} />

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

export default SaleAdd;
