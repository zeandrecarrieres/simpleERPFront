import "./transactionproducts.css";
import { useState, useEffect } from "react";
import SideBar from "../sidebar/SideBar";
import { useParams } from "react-router-dom";
import api from "../../api/api";

function TransactionProducts() {
  const { id } = useParams();

  //  console.log( id )

  const baseProduct = {
    transactionId: id,
    productId: "",
    productQuantity: 0,
    discount: 0,
    value: 0,
  };

  const baseTransaction = {
    productId: "",
    name: "",
  };

  async function returnName(id:string){
    listOfProduct.map((item) => {
      if (id == item.productId) {
        console.log(item.name)
        return "maca"         
      
      }
        
    })
    
  }

  const baseCarrinho: any = {};

  const nameProducts = [];

  const [product, setProduct] = useState(baseProduct);
  const [carrinho, setCarrinho] = useState([baseCarrinho]);
  const [listOfProduct, setListOfProducts] = useState([baseTransaction]);

  useEffect(() => {
    api
      .get("/product")
      .then((response) => response.data)
      .then((item) => setListOfProducts(item))
      .catch((err) => console.error(err));
  }, []);

  function handleChange(e: any) {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  }
  // console.log(product);

  async function handleSubmit(e: any) {
    e.preventDefault();
  }

  function addCartItem(e: any) {
    e.preventDefault();
    let newItem = [...carrinho];
    newItem.push(product);

    if (!product.productId) {
      alert("selecione o produto!");
    }
    setCarrinho(newItem);
  }

  useEffect(() => {
    console.log(carrinho);
  }, [carrinho]);

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

              {/* validar no envio do botao */}
            </select>

            <div className="forms-group">
              <label htmlFor="productQuantity">Quantidade:</label>
              <input
                type="number"
                name="productQuantity"
                onChange={handleChange}
                // value={address.district}
              />
              <label htmlFor="value">Valor:</label>
              <input
                type="number"
                name="value"
                onChange={handleChange}
                // value={address.zipCode}
              />
              <label htmlFor="discount">Desconto:</label>
              <input
                type="number"
                name="discount"
                onChange={handleChange}
                // value={address.zipCode}
              />
              <label htmlFor="total">Total:</label>
              <input
                type="number"
                name="total"
                onChange={handleChange}
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
        </form>

        <h2>Lista de Produtos:</h2>
        <table>
          <thead>
            <tr>
              <th>Número</th>
              <th>Nome</th>
              <th>Quantidade</th>
              <th>Preço Unitário:</th>
              <th>Desconto</th>
            </tr>
          </thead>

          <tbody>
            {carrinho.map((item, index) => (
              
              <>
               
                <tr>
                  <td>{index + 1}</td> <td>{item.productId}</td>
                  {/* <td>{returnName(item.productId)}</td> */}
                  <td>{item.productQuantity}</td> <td>{item.discount}</td>
                  <td>{item.value}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>

        <div>
          <button>Enviar</button>
        </div>
      </main>
    </div>
  );
}

export default TransactionProducts;
