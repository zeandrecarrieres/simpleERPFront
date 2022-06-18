import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import "./listofcategories.css";
import api from "../../api/api";

function ListOfCategories() {
  const data = {
    _id: "",
    category: "",
  };

  const [categories, setCategories] = useState([data]);

  useEffect(() => {
    api
      .get("/category")
      .then((response) => response.data)
      .then((item) => setCategories(item))
      .catch((err) => console.error(err));
  }, []);

  const suspendProduct = async (id: any) => {
    alert("Categoria suspensa com sucesso!");
  };

  return (
    <div className="container">
      <SideBar />
      <main>
        <h1>Lista de Categorias</h1>
        <div>
          <Link className="add-button" to={"/categoryadd"}>
            Nova Categoria
          </Link>
        </div>
        <ul className="list-container">
          {categories.map((item, index) => (
            <>
              <li key={index} className="list-categories">
                <span className="menu-link">{item.category} </span>
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

export default ListOfCategories;
