import { timeStamp } from "console";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import "./listofsuppliers.css";
import api from "../../api/api";

function ListOfSuppliers() {
  const data = {
    _id: "",
    type: "",
    name: "",
    fantasyName: "",
    CpfCnpj: "",
    inscription: "",
  };

  const [suppliers, setSuppliers] = useState([data]);

  useEffect(() => {
    api
      .get("/supplier")
      .then((response) => response.data)
      .then((item) => setSuppliers(item))
      .catch((err) => console.error(err));
  }, []);

  const suspendSupplier = async (id: any) => {
    alert("Fornecedor suspenso com sucesso!");
  };

  return (
    <div className="container">
      <SideBar />
      <main>
        <h1>Lista de Fornecedores</h1>
        <div>
          <Link className="add-button" to={"/supplieradd"}>
            Novo Fornecedor
          </Link>
        </div>
        <ul>
          {suppliers.map((item, index) => (
            <>
              <li key={index} className="list">
                <Link
                  className="menu-link"
                  to={`/supplier/profile/${item._id}`}
                >
                  {" "}
                  {item.name}{" "}
                </Link>

                <div>
                  <Link
                    className="add-button"
                    to={`/addressadd/${item._id}/SUPPLIER`}
                  >
                    incluir endereço
                  </Link>
                  <Link
                    className="edit-button "
                    to={`/addressadd/${item._id}/SUPPLIER`}
                  >
                    editar
                  </Link>
                  <button
                    className="remove-button"
                    onClick={(e) => suspendSupplier(item._id)}
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

export default ListOfSuppliers;
