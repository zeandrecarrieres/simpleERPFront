import React, { useState, useEffect } from "react";
// import api from "../../api/api";

function ListOfClients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3500/client")
      .then((response) => response.json())
      .then((data) => setClients(data))
      .catch((err) => console.error(err));
    console.info(clients);
  }, []);

  return (
    <div>
      <ul className="list">
        <h1>Lista de Clientes</h1>
        {clients.map((clients) => (
          <>
            <h2>{clients.name}</h2>
          </>
        ))}
      </ul>
    </div>
  );
}

export default ListOfClients;
