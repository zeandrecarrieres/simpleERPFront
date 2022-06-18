import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import "./listofclients.css";
import api from "../../api/api";

function ListOfClients() {
  const data = {
    _id: "",
    type: "",
    name: "",
    fantasyName: "",
    CpfCnpj: "",
    inscription: "",
  };

  const [clients, setClients] = useState([data]);

  useEffect(() => {
    api
      .get("/client")
      .then((response) => response.data)
      .then((item) => setClients(item))
      .catch((err) => console.error(err));
  }, []);

  const suspendClient = async (id: any) => {
    alert("Cliente suspenso com sucesso!");
  };

  return (
    <div className="container">
      <SideBar />
      <main>
        <h1>Lista de Clientes</h1>
        <div>
          <Link className="add-button" to={"/clientadd"}>
            Novo Cliente
          </Link>
        </div>
        <ul className="list-container">
          {clients.map((item, index) => (
            <>
              <li key={index} className="list-clients">
                <Link className="menu-link" to={`/client/profile/${item._id}`}>
                  {" "}
                  {item.name}{" "}
                </Link>

                <div>
                  <Link
                    className="add-button"
                    to={`/addressadd/${item._id}/CLIENT`}
                  >
                    incluir endereço
                  </Link>
                  <Link
                    className="edit-button "
                    to={`/addressadd/${item._id}/CLIENT`}
                  >
                    editar
                  </Link>
                  <button
                    className="remove-button"
                    onClick={(e) => suspendClient(item._id)}
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

export default ListOfClients;
