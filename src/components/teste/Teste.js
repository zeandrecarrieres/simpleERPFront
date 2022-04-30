import React, { useState, useEffect } from "react";

import api from "../../api/api";

function Teste() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3500/client")
      .then((response) => response.json())
      .then((data) => setClients(data))
      .catch((err) => console.error(err));
    console.info(clients)

  }, []);

  return (
    <div>
      <ul className="list">
        <h1>Pratos</h1>
        {/* {clients
          // .filter((prato) => prato.category === "Pratos")
          .map((clients) => (
            <>
              <h2>{clients.name}</h2>
            </>
          ))} */}
      </ul>
    </div>
  );
}

export default Teste;
