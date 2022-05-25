import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import api from "../../api/api";
import style from "./styles.module.css";

function SupplierProfile() {
  let supplier = {
    clientSupplier: "",
    type: "",
    name: "",
    fantasyName: "",
    CpfCnpj: "",
    inscription: "",
  };

  const baseAddresses = [
    {
      street: "",
      number: "",
      complement: "",
      district: "",
      zipCode: "",
      city: "",
      state: "",
      country: "",
      referenceId: "",
      referenceType: "",
    },
  ];

  const [profile, setProfile] = useState(supplier);
  const [addresses, setAddresses] = useState(baseAddresses);

  const { _id } = useParams();

  useEffect(() => {
    api
      .get(`/supplier/profile/${_id}`)
      .then((response) => response.data)
      .then((item) => setProfile(item))
      .catch((err) => console.error(err));
  }, [_id]);

  useEffect(() => {
    api
      .get(`/address/supplier/${_id}/SUPPLIER`)
      .then((response) => response.data)
      .then((item) => setAddresses(item))
      .catch((err) => console.error(err));
  }, [_id]);

  return (
    <div className="container">
      <SideBar />
      <main>
        <h2>PERFIL DO FORNECEDOR</h2>
        <p>Nome:</p>
        <p>{profile.name}</p>
        <h2>ENDEREÇOS</h2>
        {addresses.map((item) => (
          <>
            <div className={style["container"]}>
              <li className="menu-link">
                <label>Rua: </label> {item.street}
              </li>
              <li>
                <label>Número: </label>
                {item.number}
              </li>
              <li>
                <label>Complemento: </label>
                {item.complement}
              </li>
              <li>
                <label>Bairro: </label>
                {item.district}
              </li>
              <li>
                <label>CEP: </label>
                {item.zipCode}
              </li>
              <li>
                <label>Cidade: </label>
                {item.city}
              </li>
              <li>
                <label>Estado: </label>
                {item.state}
              </li>
              <li>
                <label>País: </label>
                {item.country}
              </li>
            </div>
            {/* <AddressList item={{ item } } /> */}
          </>
        ))}
      </main>
    </div>
  );
}

export default SupplierProfile;
