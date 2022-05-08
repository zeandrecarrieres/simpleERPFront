import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import api from "../../api/api";
import style from "./styles.module.css";

function ProductProfile() {
  let product = {
    clientSupplier: "",
    type: "",
    name: "",
    fantasyName: "",
    CpfCnpj: "",
    inscription: "",
  };

  const [profile, setProfile] = useState(product);

  const { _id } = useParams();

  useEffect(() => {
    api
      .get(`/client/profile/${_id}`)
      .then((response) => response.data)
      .then((item) => setProfile(item))
      .catch((err) => console.error(err));
  }, []);

  // useEffect(() => {
  //   api
  //     .get(`/address/client/${_id}/CLIENT`)
  //     .then((response) => response.data)
  //     .then((item) => setAddresses(item))
  //     .catch((err) => console.error(err));
  // }, [profile]);

  return (
    <div className="container">
      <SideBar />
      <main>
        <h2>
        <p>Nome:</p>
          <p>{profile.name}</p>
         </h2>
      </main>
    </div>
  );
}

export default ProductProfile;
