import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import api from "../../api/api";
import style from "./styles.module.css";

function UserProfile() {
  let user = {
  "name":"",
	"email":"",
	"password":"",
	"access":""
  };

  const [profile, setProfile] = useState(user);


  const { _id } = useParams();

  useEffect(() => {
    api
      .get(`/admin/user/profile/${_id}`)
      .then((response) => response.data)
      .then((item) => setProfile(item))
      .catch((err) => console.error(err));
  }, [_id]);

   return (
    <div className="container">
      <SideBar />
      <main>
        <h2>PERFIL DO Usuário</h2>
        <p>Nome:</p>
        <p>{profile.name}</p>

       
       </main>
    </div>
  );
}

export default UserProfile;
