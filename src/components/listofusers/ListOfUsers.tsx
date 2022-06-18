import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import "./listofusers.css";
import api from "../../api/api";

function ListOfUsers() {
  const data = {
    "_id": "",
		"name": "",
		"email": "",
		"password": "",
		"access": ""
  };

  const [users, setUsers] = useState([data]);

  useEffect(() => {
    api
      .get("/admin/user")
      .then((response) => response.data)
      .then((item) => setUsers(item))
      .catch((err) => console.error(err));
  }, []);

  const suspendUser = async (id: any) => {
    alert("Usuário suspenso com sucesso!");
  };

  return (
    <div className="container">
      <SideBar />
      <main>
        <h1>Lista de Usuários</h1>
        <div>
          <Link className="add-button" to={"/useradd"}>
            Novo Usuário
          </Link>
        </div>
        <ul className="list-container">
          {users.map((item, index) => (
            <>
              <li key={index} className="list">
                <Link className="menu-link" to={`/user/profile/${item._id}`}>
                  
                  {item.name}
                </Link>

                <div>
                                   <Link
                    className="edit-button "
                    to={`/Useradd`}
                  >
                    editar
                  </Link>
                  <button
                    className="remove-button"
                    onClick={(e) => suspendUser(item._id)}
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

export default ListOfUsers;
