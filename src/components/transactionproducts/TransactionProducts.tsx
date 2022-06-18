import "./transactionproducts.css";
import { useState, useEffect, createRef, useRef } from "react";
import SideBar from "../sidebar/SideBar";
import { useParams } from "react-router-dom";
import api from "../../api/api";

function TransactionProducts() {
  const { id } = useParams();

  const baseProduct = {
    transactionId: id,
    productId: "",
    productname: "",
    productQuantity: 0,
    discount: 0,
    value: 0,
    subTotal: 0,
  };

  const baseTransaction = {
    productId: "",
    name: "",
  };

  const baseCarrinho: any = {};
  const [product, setProduct] = useState(baseProduct);
  const [carrinho, setCarrinho] = useState([baseCarrinho]);
  const [listOfProduct, setListOfProducts] = useState([baseTransaction]);
  const [name, setName] = useState("");
  const [total, setTotal] = useState(0);

  const inputSubTotal = useRef<HTMLInputElement>(null);


  useEffect(() => {
    api
      .get("/product")
      .then((response) => response.data)
      .then((item) => setListOfProducts(item))
      .catch((err) => console.error(err));
  }, []);

  function change(e: any) {
    alert(e.target);
    return;
  }

  async function handleChange(e: any) {
    if (e.target.name === "productId") {
      const pname = await e.target.options[e.target.selectedIndex].text;
      setName(pname);
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
      });
      return;
    }
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  }

  function addCartItem(e: any) {
    e.preventDefault();
    let newSubTotal = inputSubTotal.current?.valueAsNumber;
    if (!newSubTotal) newSubTotal = 0;

    let newItem = [...carrinho];

    newItem.push(product);

    product.productname = name;
    product.subTotal = newSubTotal;

    if (!product.productId) {
      alert("selecione o produto!");
      return;
    }
    setCarrinho(newItem);
    return;
  }

  useEffect(() => {
    const soma = carrinho.reduce((acc: number, item) => {
      const novoValor = parseFloat(item.subTotal);

      if (!novoValor) {
        return 0;
      }
      return (acc += novoValor);
    }, 0);
    setTotal(soma);
  }, [carrinho]);

  async function handleSubmit(e: any) {
    e.preventDefault();
    delete carrinho[0];
    console.log(carrinho);
    await addCarrinhoBd(carrinho);
  }

  async function addCarrinhoBd(dados: any) {
    const response = await api.post("/incomeproducts", dados);
    // console.log(response)
  }

  return (
    <div className="container">
      <SideBar />
      <main>
        <h2>Inclusão Produtos</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <label htmlFor="productId">Produto:</label>
            <select
              name="productId"
              id="productId"
              onChange={handleChange}
              required
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                Selecione o produto
              </option>
              {listOfProduct.map((option: any) => (
                <>
                  <option value={option._id}>{option.name}</option>
                </>
              ))}

            </select>

            <div className="forms-group">
              <label htmlFor="productQuantity">Quantidade:</label>
              <input
                type="number"
                name="productQuantity"
                onChange={handleChange}
                defaultValue="0"
              />
              <label htmlFor="value">Valor:</label>
              <input
                type="number"
                name="value"
                onChange={handleChange}
                defaultValue="0"
              />
              <label htmlFor="discount">Desconto:</label>
              <input
                type="number"
                name="discount"
                onChange={handleChange}
                defaultValue="0"
              />
              <label htmlFor="subTotal">Total:</label>
              <input
                type="number"
                ref={inputSubTotal}
                value={
                  product.productQuantity *
                  product.value *
                  (1 - product.discount / 100)
                }
              />
            </div>
          </div>
          <div>
            <button onClick={addCartItem}>adicionar ao carrinho</button>
          </div>

          <h2>Lista de Produtos:</h2>
          <table>
            <thead>
              <tr>
                <th>Número</th>
                <th>Nome</th>
                <th>Quantidade</th>
                <th>Preço Unitário:</th>
                <th>Desconto</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {carrinho.map((item, index) => (
                <>
                  {index !== 0 ? (
                    <tr>
                      <td> {index}</td> <td>{item.productname}</td>
                      <td>{item.productQuantity}</td>
                      <td>{item.value}</td>
                      <td>{item.discount}</td>
                      <td>{item.subTotal}</td>
                    </tr>
                  ) : (
                    ""
                  )}
                </>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>TOTAL</td>
                <td>{total}</td>
              </tr>
            </tbody>
          </table>

          <div>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default TransactionProducts;
