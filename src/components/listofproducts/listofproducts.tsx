import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import "./listofproducts.css";
import api from "../../api/api";

function ListOfProducts() {
  const data = {
    _id: "",
    code: "",
    categoryId: "",
    name: "",
    description: "",
    unit: "",
    price: "",
    cost: "",
  };

  const [products, setProducts] = useState([data]);

  useEffect(() => {
    api
      .get("/product")
      .then((response) => response.data)
      .then((item) => setProducts(item))
      .catch((err) => console.error(err));
  }, []);

  const suspendProduct = async (id: any) => {
    alert("Produto suspenso com sucesso!");
  };

  return (
    <div className="container">
      <SideBar />
      <main>
        <h1>Lista de Produtos</h1>
        <div>
          <Link className="add-button" to={"/productadd"}>
            Novo Produto
          </Link>
        </div>
        <ul className="list-container">
          {products.map((item, index) => (
            <>
              <li key={index} className="list-products">
                <Link className="menu-link" to={`/product/profile/${item._id}`}>
                
                  {item.name} - {item.description}
                </Link>

                <div>
                  <Link
                    className="edit-button "
                    to={`/addressadd/${item._id}/CLIENT`}
                  >
                    editar
                  </Link>
                  <button
                    className="remove-button"
                    onClick={(e) => suspendProduct(item._id)}
                  >
                    suspender
                  </button>
                </div>
              </li>
            </>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default ListOfProducts;
